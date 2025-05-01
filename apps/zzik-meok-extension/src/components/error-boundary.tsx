import { ReactNode } from 'react'
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps as ReactFallbackProps,
} from 'react-error-boundary'

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

// 함수형 ErrorBoundary 컴포넌트 (react-error-boundary 사용)
const ErrorBoundary = ({ children, fallback, onError }: ErrorBoundaryProps) => {
  // fallback UI를 처리하는 함수
  const fallbackRender = ({ error, resetErrorBoundary }: ReactFallbackProps) => {
    // fallback이 함수인 경우
    if (typeof fallback === 'function') {
      return fallback({ error, reset: resetErrorBoundary })
    }

    // fallback이 ReactNode인 경우
    if (fallback) {
      return fallback as ReactNode
    }

    // 기본 폴백 UI
    return <DefaultFallback error={error} reset={resetErrorBoundary} />
  }

  return (
    <ReactErrorBoundary
      fallbackRender={fallbackRender}
      onError={(error, info) => {
        if (onError) {
          onError(error, { componentStack: info.componentStack || '' })
        }
      }}
    >
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
