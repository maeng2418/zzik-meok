import { ApiError } from '@/hooks/use-api-error'
import { useGlobalErrorHandler } from '@/hooks/use-global-error-handler'
import { ReactNode, useCallback, useState } from 'react'
import ApiErrorBoundary from './api-error-boundary'

interface GlobalErrorHandlerProps {
  children: ReactNode
  fallback?: ReactNode | ((error: ApiError, reset: () => void) => ReactNode)
  onError?: (error: ApiError, info: { componentStack: string }) => void
  statusHandlers?: Partial<Record<number, (error: ApiError, reset: () => void) => ReactNode>>
}

/**
 * 전역 에러 핸들러와 API 에러 바운더리를 통합한 컴포넌트
 *
 * - React 컴포넌트 내부 에러
 * - 전역 window.onerror 이벤트
 * - 처리되지 않은 Promise rejection
 *
 * 위 모든 에러를 처리할 수 있습니다.
 */
const GlobalErrorHandler = ({
  children,
  fallback,
  onError,
  statusHandlers = {},
}: GlobalErrorHandlerProps) => {
  // 전역 에러 상태 관리
  const [globalError, setGlobalError] = useState<ApiError | null>(null)

  // 전역 에러 리셋 함수
  const resetGlobalError = useCallback(() => {
    setGlobalError(null)
  }, [])

  // 전역 에러 이벤트 처리 훅
  useGlobalErrorHandler({
    onError: (error) => {
      console.error('전역 에러가 발생했습니다:', error)
      setGlobalError(error as ApiError)

      // onError 콜백 호출 (있는 경우)
      if (onError) {
        onError(error as ApiError, { componentStack: error.stack || '' })
      }
    },
    onUnhandledRejection: (error) => {
      console.error('처리되지 않은 Promise 에러가 발생했습니다:', error)
      setGlobalError(error as ApiError)

      // onError 콜백 호출 (있는 경우)
      if (onError) {
        onError(error as ApiError, { componentStack: error.stack || '' })
      }
    },
  })

  // 전역 에러가 있을 경우 에러 UI 표시
  if (globalError) {
    // HTTP 상태 코드별 처리기가 있으면 사용
    if (statusHandlers && globalError.status && statusHandlers[globalError.status]) {
      const statusHandler = statusHandlers[globalError.status]
      if (statusHandler) {
        return statusHandler(globalError, resetGlobalError)
      }
    }

    // fallback prop이 함수인 경우
    if (fallback && typeof fallback === 'function') {
      return fallback(globalError, resetGlobalError)
    }

    // fallback이 ReactNode인 경우
    if (fallback) {
      return fallback
    }

    // 기본 에러 UI
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

  // 전역 에러가 없는 경우 ApiErrorBoundary로 컴포넌트 트리를 감싸서 React 컴포넌트 에러 처리
  return (
    <ApiErrorBoundary statusHandlers={statusHandlers} fallback={fallback} onError={onError}>
      {children}
    </ApiErrorBoundary>
  )
}

export default GlobalErrorHandler
