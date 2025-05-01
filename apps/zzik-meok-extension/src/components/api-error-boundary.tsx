import { ApiError } from '@/hooks/use-api-error'
import { ReactNode } from 'react'
import { useErrorBoundary } from './use-error-boundary'

/**
 * ApiErrorBoundary 컴포넌트의 props 인터페이스
 */
interface ApiErrorBoundaryProps {
  /** 감싸는 자식 컴포넌트 */
  children: ReactNode
  /** 에러 발생 시 표시할 폴백 UI (ReactNode 또는 렌더 함수) */
  fallback?: ReactNode | ((error: ApiError, reset: () => void) => ReactNode)
  /** 에러 발생 시 호출될 콜백 함수 */
  onError?: (error: ApiError, info: { componentStack: string }) => void
  /** HTTP 상태 코드별 에러 처리 컴포넌트 매핑 */
  statusHandlers?: Partial<Record<number, (error: ApiError, reset: () => void) => ReactNode>>
}

/**
 * API 에러를 처리하는 ErrorBoundary 컴포넌트 (함수형)
 *
 * 이 컴포넌트는 다음과 같은 역할을 합니다:
 * 1. useErrorBoundary 훅을 사용하여 하위 컴포넌트의 에러를 감지
 * 2. HTTP 상태 코드별로 다른 에러 UI 제공
 * 3. 에러 리셋 메커니즘 제공
 *
 * 에러 처리 흐름:
 * - ErrorBoundaryInternal이 에러를 포착하고 onError 콜백을 통해 setError 호출
 * - error 상태가 업데이트되면 ApiErrorBoundary가 이를 감지하여 에러 UI 렌더링
 * - 사용자가 '다시 시도'를 클릭하면 reset 함수가 호출되어 에러 상태 초기화
 *
 * 일반 에러와 API 에러를 모두 처리하며, HTTP 상태 코드별로 다른 폴백 UI를 제공할 수 있습니다.
 */
const ApiErrorBoundary = ({
  children,
  fallback,
  onError,
  statusHandlers,
}: ApiErrorBoundaryProps) => {
  // useErrorBoundary 훅에서 에러 상태와 기능을 가져옴
  // 이 훅은 ErrorBoundaryInternal을 통해 자식 컴포넌트의 에러를 감지
  const { error, reset, ErrorBoundaryWrapper } = useErrorBoundary()

  // 일반 Error를 ApiError 타입으로 변환 (타입 캐스팅)
  // ApiError는 status, response 등 HTTP 에러 관련 추가 정보를 포함
  const apiError = error as ApiError

  // 에러가 발생하고 onError 콜백이 제공된 경우 호출
  // 외부 에러 추적 시스템이나 로깅에 활용 가능
  if (apiError && onError) {
    onError(apiError, { componentStack: apiError.stack || '' })
  }

  // 에러가 감지된 경우 적절한 에러 UI 렌더링
  // 이 조건이 먼저 평가되므로, ErrorBoundaryWrapper의 throw error는 실행되지 않음
  if (apiError) {
    // 1. HTTP 상태 코드별 처리기가 있으면 사용 (가장 높은 우선순위)
    // 예: 401은 로그인 페이지로, 403은 권한 없음 페이지로 등
    if (statusHandlers && apiError.status && statusHandlers[apiError.status]) {
      const statusHandler = statusHandlers[apiError.status]
      if (statusHandler) {
        return statusHandler(apiError, reset)
      }
    }

    // 2. fallback prop이 함수인 경우, 에러와 리셋 함수를 인자로 호출
    // 동적인 에러 UI 생성 가능
    if (fallback && typeof fallback === 'function') {
      return fallback(apiError, reset)
    }

    // 3. fallback이 ReactNode인 경우 그대로 렌더링
    // 정적인 에러 UI 제공
    if (fallback) {
      return fallback
    }

    // 4. 기본 에러 UI (위 조건이 모두 충족되지 않을 때)
    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-40">
        <h2 className="text-lg font-semibold mb-2">에러가 발생했습니다</h2>
        {apiError.status && (
          <p className="text-sm text-destructive mb-1">상태 코드: {apiError.status}</p>
        )}
        <p className="text-sm text-muted-foreground mb-2">{apiError.message}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={reset}
        >
          다시 시도
        </button>
      </div>
    )
  }

  // 에러가 없는 경우에만 ErrorBoundaryWrapper로 자식을 감싸서 렌더링
  // ErrorBoundaryWrapper는 내부적으로 ErrorBoundaryInternal을 사용하여
  // 자식 컴포넌트의 렌더링 에러를 포착합니다.
  return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
}

export default ApiErrorBoundary
