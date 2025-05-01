import React, {
  Component,
  ErrorInfo,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react'

// 에러 바운더리 클래스 정의 (React 라이프사이클 메서드가 필요함)
class ErrorBoundaryInternal extends Component<
  PropsWithChildren<{
    onError: (error: Error, errorInfo: ErrorInfo) => void
    resetKey: number
  }>
> {
  state = { hasError: false, error: null as Error | null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError(error, errorInfo)
  }

  componentDidUpdate(prevProps: { resetKey: number }) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null })
    }
  }

  render() {
    if (this.state.hasError) {
      throw this.state.error
    }

    return this.props.children
  }
}

/**
 * 함수형 컴포넌트에서 에러 바운더리 로직을 사용하기 위한 커스텀 훅
 *
 * @returns 에러 상태, 리셋 함수, 그리고 ErrorBoundary 래퍼 컴포넌트
 */
export function useErrorBoundary() {
  const [error, setError] = useState<Error | null>(null)
  const [resetKey, setResetKey] = useState(0)

  const reset = useCallback(() => {
    setError(null)
    setResetKey((prev) => prev + 1)
  }, [])

  const ErrorBoundaryWrapper = useCallback(
    ({ children }: { children: ReactNode }) => {
      if (error) {
        throw error
      }

      return (
        <ErrorBoundaryInternal
          resetKey={resetKey}
          onError={(err, info) => {
            console.error('ErrorBoundary caught an error:', err, info)
            setError(err)
          }}
        >
          {children}
        </ErrorBoundaryInternal>
      )
    },
    [error, resetKey],
  )

  return {
    error,
    reset,
    ErrorBoundaryWrapper,
  }
}

// 함수형 컴포넌트에서 사용할 수 있는 에러 경계 래퍼
export function createErrorBoundary<ErrorType extends Error = Error>(
  FallbackComponent: React.ComponentType<{ error: ErrorType; reset: () => void }>,
) {
  return function ErrorBoundaryWithFallback({ children }: { children: ReactNode }) {
    const { error, reset, ErrorBoundaryWrapper } = useErrorBoundary()

    if (error) {
      return <FallbackComponent error={error as ErrorType} reset={reset} />
    }

    return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
  }
}
