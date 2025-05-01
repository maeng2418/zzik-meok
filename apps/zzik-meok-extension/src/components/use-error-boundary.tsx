import React, { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react'
import {
  ErrorBoundary as ReactErrorBoundary,
  useErrorBoundary as useReactErrorBoundary,
} from 'react-error-boundary'

/**
 * @deprecated 이 모듈은 react-error-boundary 라이브러리로 대체되었습니다.
 * 대신 import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary'를 사용하세요.
 */

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
 * @deprecated 대신 react-error-boundary의 useErrorBoundary 훅을 사용하세요.
 * @returns 에러 상태, 리셋 함수, 그리고 ErrorBoundary 래퍼 컴포넌트
 */
export function useErrorBoundary() {
  // react-error-boundary 라이브러리의 useErrorBoundary 호출
  const { resetBoundary, showBoundary } = useReactErrorBoundary()

  const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => {
    // 래퍼 컴포넌트를 ReactErrorBoundary로 대체
    return (
      <ReactErrorBoundary
        fallbackRender={({ error }) => {
          // 에러를 상위로 전파
          throw error
        }}
      >
        {children}
      </ReactErrorBoundary>
    )
  }

  return {
    error: null, // 현재 에러 상태 (호환성을 위해 유지)
    reset: resetBoundary,
    ErrorBoundaryWrapper,
  }
}

/**
 * 함수형 컴포넌트에서 사용할 수 있는 에러 경계 래퍼
 *
 * @deprecated 대신 react-error-boundary의 ErrorBoundary 컴포넌트를 사용하세요.
 */
export function createErrorBoundary<ErrorType extends Error = Error>(
  FallbackComponent: React.ComponentType<{ error: ErrorType; reset: () => void }>,
) {
  return function ErrorBoundaryWithFallback({ children }: { children: ReactNode }) {
    return (
      <ReactErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <FallbackComponent error={error as ErrorType} reset={resetErrorBoundary} />
        )}
      >
        {children}
      </ReactErrorBoundary>
    )
  }
}
