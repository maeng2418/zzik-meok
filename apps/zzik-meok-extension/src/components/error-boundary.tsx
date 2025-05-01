import { ReactNode } from 'react'
import { useErrorBoundary } from './use-error-boundary'

interface FallbackProps {
  error: Error
  reset: () => void
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode | ((props: FallbackProps) => ReactNode)
  onError?: (error: Error, info: { componentStack: string }) => void
}

// 기본 폴백 UI 컴포넌트
const DefaultFallback = ({ error, reset }: FallbackProps) => (
  <div className="flex flex-col items-center justify-center p-4 min-h-40">
    <h2 className="text-lg font-semibold mb-2">에러가 발생했습니다</h2>
    <p className="text-sm text-muted-foreground">{error.message}</p>
    <button
      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
      onClick={reset}
    >
      다시 시도
    </button>
  </div>
)

// 함수형 ErrorBoundary 컴포넌트
const ErrorBoundary = ({ children, fallback, onError }: ErrorBoundaryProps) => {
  // 내부 에러 바운더리 상태와 컴포넌트
  const { error, reset, ErrorBoundaryWrapper } = useErrorBoundary()

  // 에러 발생 시 콜백 처리
  if (error && onError) {
    onError(error, { componentStack: error.stack || '' })
  }

  // 에러가 발생했을 때의 UI 처리
  if (error) {
    // fallback이 함수인 경우
    if (typeof fallback === 'function') {
      return fallback({ error, reset })
    }

    // fallback이 ReactNode인 경우
    if (fallback) {
      return fallback
    }

    // 기본 폴백 UI
    return <DefaultFallback error={error} reset={reset} />
  }

  // 에러가 없을 때는 래퍼 내부에 자식 렌더링
  return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
}

export default ErrorBoundary
