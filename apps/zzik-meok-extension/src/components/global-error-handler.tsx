import { ApiError } from '@/hooks/use-api-error'
import { useGlobalErrorHandler } from '@/hooks/use-global-error-handler'
import { ReactNode, useCallback, useState } from 'react'
import ApiErrorBoundary from './api-error-boundary'

/**
 * GlobalErrorHandler 컴포넌트의 props 인터페이스
 */
interface GlobalErrorHandlerProps {
  /** 감싸는 자식 컴포넌트 */
  children: ReactNode
  /** 에러 발생 시 표시할 폴백 UI (ReactNode 또는 렌더 함수) */
  fallback?: ReactNode | ((error: ApiError, reset: () => void) => ReactNode)
  /** 에러 발생 시 호출될 콜백 함수 */
  onError?: (error: ApiError, info: { componentStack: string }) => void
}

/**
 * 전역 에러 핸들러와 API 에러 바운더리를 통합한 컴포넌트
 *
 * 이 컴포넌트는 두 가지 주요 에러 처리 메커니즘을 결합합니다:
 *
 * 1. 전역 에러 처리 (useGlobalErrorHandler 훅 사용)
 *    - window.onerror 이벤트 (전역 에러)
 *    - unhandledrejection 이벤트 (처리되지 않은 Promise 에러)
 *
 * 2. 컴포넌트 에러 처리 (ApiErrorBoundary 사용)
 *    - React 컴포넌트 렌더링 중 발생하는 에러
 *
 * 에러 처리 우선순위:
 * - 전역 에러가 있으면 GlobalErrorHandler에서 직접 에러 UI 렌더링
 * - 전역 에러가 없으면 ApiErrorBoundary로 컴포넌트 에러 처리
 *
 * 이 구조를 통해 React 컴포넌트 외부에서 발생하는 에러도 잡아내어
 * React 컴포넌트 내부 에러와 동일한 방식으로 일관되게 처리할 수 있습니다.
 */
const GlobalErrorHandler = ({ children, fallback, onError }: GlobalErrorHandlerProps) => {
  // 전역 에러(window.onerror, unhandledrejection)를 저장하는 상태
  // 이 상태가 null이 아니면 전역 에러가 발생한 것입니다
  const [globalError, setGlobalError] = useState<ApiError | null>(null)

  /**
   * 전역 에러 상태를 초기화하는 함수
   *
   * 사용자가 '다시 시도' 버튼을 클릭했을 때 호출됩니다.
   */
  const resetGlobalError = useCallback(() => {
    setGlobalError(null)
  }, [])

  /**
   * 전역 에러 이벤트 처리 훅 사용
   *
   * window.onerror 및 unhandledrejection 이벤트를 감지하여
   * 각각 onError, onUnhandledRejection 콜백을 통해 처리합니다.
   *
   * 이 메커니즘은 React 렌더링 외부에서 발생하는 에러를 포착합니다.
   */
  useGlobalErrorHandler({
    // 전역 에러(window.onerror) 처리 콜백
    onError: (error) => {
      console.error('전역 에러가 발생했습니다:', error)
      // 전역 에러 상태 업데이트
      setGlobalError(error as ApiError)

      // 외부 콜백 호출 (있는 경우)
      if (onError) {
        onError(error as ApiError, { componentStack: error.stack || '' })
      }
    },
    // 처리되지 않은 Promise 에러(unhandledrejection) 처리 콜백
    onUnhandledRejection: (error) => {
      console.error('처리되지 않은 Promise 에러가 발생했습니다:', error)
      // 전역 에러 상태 업데이트
      setGlobalError(error as ApiError)

      // 외부 콜백 호출 (있는 경우)
      if (onError) {
        onError(error as ApiError, { componentStack: error.stack || '' })
      }
    },
  })

  /**
   * API 상태 코드별 에러 처리기 정의
   *
   * HTTP 상태 코드에 따라 다른 UI를 표시할 수 있습니다.
   * 전역 에러와 ApiErrorBoundary 모두에서 사용됩니다.
   */
  const statusHandlers: Partial<
    Record<number, (error: ApiError, reset: () => void) => React.ReactNode>
  > = {
    // 401 Unauthorized: 인증 필요
    401: (error, reset) => (
      <div className="flex flex-col items-center justify-center p-4 min-h-40">
        <h2 className="text-lg font-semibold mb-2">로그인이 필요합니다</h2>
        <p className="text-sm text-muted-foreground mb-2">로그인 페이지로 이동해주세요</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={reset}
        >
          로그인 페이지로 이동
        </button>
      </div>
    ),
    // 403 Forbidden: 권한 없음
    403: (error, reset) => (
      <div className="flex flex-col items-center justify-center p-4 min-h-40">
        <h2 className="text-lg font-semibold mb-2">접근 권한이 없습니다</h2>
        <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={reset}
        >
          이전 페이지로 이동
        </button>
      </div>
    ),
  }

  /**
   * 전역 에러가 있는 경우의 처리
   *
   * window.onerror나 unhandledrejection 이벤트로 인해
   * globalError 상태가 설정된 경우 적절한 UI를 렌더링합니다.
   *
   * 이 분기에서는 전역 에러를 처리하고, ApiErrorBoundary로는 넘어가지 않습니다.
   * 따라서 React 컴포넌트 외부에서 발생한 에러를 우선적으로 처리합니다.
   */
  if (globalError) {
    // 1. HTTP 상태 코드별 처리기 적용 (가장 높은 우선순위)
    if (statusHandlers && globalError.status && statusHandlers[globalError.status]) {
      const statusHandler = statusHandlers[globalError.status]
      if (statusHandler) {
        return statusHandler(globalError, resetGlobalError)
      }
    }

    // 2. fallback이 함수인 경우 호출
    if (fallback && typeof fallback === 'function') {
      return fallback(globalError, resetGlobalError)
    }

    // 3. fallback이 ReactNode인 경우 그대로 사용
    if (fallback) {
      return fallback
    }

    // 4. 기본 전역 에러 UI
    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-40">
        <h2 className="text-lg font-semibold mb-2">에러가 발생했습니다</h2>
        {globalError.status && (
          <p className="text-sm text-destructive mb-1">상태 코드: {globalError.status}</p>
        )}
        <p className="text-sm text-muted-foreground mb-2">{globalError.message}</p>
        <p className="text-xs text-muted-foreground mb-2">타입: 전역 에러</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={resetGlobalError}
        >
          다시 시도
        </button>
      </div>
    )
  }

  /**
   * 전역 에러가 없는 경우의 처리
   *
   * React 컴포넌트 렌더링 중 발생하는 에러를 처리하기 위해
   * ApiErrorBoundary로 자식 컴포넌트를 감싸서 렌더링합니다.
   *
   * 전역 에러와 컴포넌트 에러에서 동일한 statusHandlers와 fallback을 사용하여
   * 일관된 에러 UI 경험을 제공합니다.
   */
  return (
    <ApiErrorBoundary statusHandlers={statusHandlers} fallback={fallback} onError={onError}>
      {children}
    </ApiErrorBoundary>
  )
}

export default GlobalErrorHandler
