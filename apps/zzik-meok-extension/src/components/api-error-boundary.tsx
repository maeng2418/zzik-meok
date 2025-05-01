import { ApiError } from '@/hooks/use-api-error'
import { ReactNode } from 'react'
import { useErrorBoundary } from './use-error-boundary'

interface ApiErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode | ((error: ApiError, reset: () => void) => ReactNode)
  onError?: (error: ApiError, info: { componentStack: string }) => void
  statusHandlers?: Partial<Record<number, (error: ApiError, reset: () => void) => ReactNode>>
}

/**
 * API 에러를 처리하는 ErrorBoundary 컴포넌트 (함수형)
 *
 * 일반 에러와 API 에러를 모두 처리하며, HTTP 상태 코드별로 다른 폴백 UI를 제공할 수 있습니다.
 */
const ApiErrorBoundary = ({
  children,
  fallback,
  onError,
  statusHandlers,
}: ApiErrorBoundaryProps) => {
  // 내부 에러 바운더리 상태와 컴포넌트
  const { error, reset, ErrorBoundaryWrapper } = useErrorBoundary()

  // API 에러로 변환
  const apiError = error as ApiError

  // 에러 콜백 처리
  if (apiError && onError) {
    onError(apiError, { componentStack: apiError.stack || '' })
  }

  // 에러 UI 렌더링
  if (apiError) {
    // HTTP 상태 코드별 처리기가 있으면 사용
    if (statusHandlers && apiError.status && statusHandlers[apiError.status]) {
      const statusHandler = statusHandlers[apiError.status]
      if (statusHandler) {
        return statusHandler(apiError, reset)
      }
    }

    // fallback prop이 함수인 경우
    if (fallback && typeof fallback === 'function') {
      return fallback(apiError, reset)
    }

    // fallback이 ReactNode인 경우
    if (fallback) {
      return fallback
    }

    // 기본 에러 UI
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

  // 에러가 없을 때는 래퍼 내부에 자식 렌더링
  return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
}

export default ApiErrorBoundary
