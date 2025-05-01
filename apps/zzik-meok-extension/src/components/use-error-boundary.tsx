import React, {
  Component,
  ErrorInfo,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react'

/**
 * 에러 바운더리 클래스 컴포넌트 (내부 구현)
 *
 * React의 에러 바운더리는 클래스 컴포넌트로만 구현 가능하므로,
 * 함수형 컴포넌트에서 사용하기 위한 내부 클래스 컴포넌트입니다.
 *
 * 이 컴포넌트는 다음 역할을 합니다:
 * 1. 자식 컴포넌트의 렌더링 에러를 포착
 * 2. 에러 정보를 상위 컴포넌트에 전달 (onError 콜백)
 * 3. resetKey를 통한 에러 상태 리셋 처리
 */
class ErrorBoundaryInternal extends Component<
  PropsWithChildren<{
    onError: (error: Error, errorInfo: ErrorInfo) => void
    resetKey: number
  }>
> {
  // 내부 에러 상태
  state = { hasError: false, error: null as Error | null }

  /**
   * 렌더링 과정에서 발생한 에러를 포착하는 정적 메서드
   *
   * React가 자식 컴포넌트에서 에러를 감지하면 이 메서드를 호출합니다.
   * 반환된 객체는 컴포넌트의 state와 병합됩니다.
   *
   * @param error 포착된 에러 객체
   * @returns 업데이트될 상태 객체
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  /**
   * 에러가 발생했을 때 추가 작업을 처리하는 메서드
   *
   * 이 메서드는 getDerivedStateFromError 후에 호출됩니다.
   * 여기서 onError 콜백을 통해 에러를 상위 컴포넌트에 전달합니다.
   * 이 콜백은 일반적으로 setError를 호출하여 useErrorBoundary 훅의 에러 상태를 업데이트합니다.
   *
   * @param error 포착된 에러 객체
   * @param errorInfo 에러 발생 위치 등의 추가 정보
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError(error, errorInfo)
  }

  /**
   * props 변경 시 에러 상태 리셋 처리
   *
   * resetKey prop이 변경되면 에러 상태를 초기화합니다.
   * 이는 사용자가 "다시 시도" 버튼을 클릭했을 때 useErrorBoundary 훅의 reset 함수에 의해 트리거됩니다.
   *
   * @param prevProps 이전 props
   */
  componentDidUpdate(prevProps: { resetKey: number }) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null })
    }
  }

  /**
   * 컴포넌트 렌더링 메서드
   *
   * 에러가 발생한 경우 에러를 다시 throw합니다. 이는 주로 방어 코드로,
   * 정상적인 흐름에서는 componentDidCatch에서 호출된 onError 콜백을 통해
   * 상위 컴포넌트(ApiErrorBoundary)가 이미 에러 UI를 렌더링했기 때문에
   * 이 코드는 실행될 기회가 거의 없습니다.
   *
   * 에러가 없는 경우 자식 컴포넌트를 정상적으로 렌더링합니다.
   */
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
 * 이 훅은 다음을 제공합니다:
 * 1. 에러 상태 (error)
 * 2. 에러 상태 리셋 함수 (reset)
 * 3. 에러 바운더리 래퍼 컴포넌트 (ErrorBoundaryWrapper)
 *
 * ApiErrorBoundary와 같은 상위 컴포넌트에서 이 훅을 사용하여
 * 에러 상태를 관리하고 적절한 에러 UI를 렌더링할 수 있습니다.
 *
 * @returns 에러 상태, 리셋 함수, 그리고 ErrorBoundary 래퍼 컴포넌트
 */
export function useErrorBoundary() {
  // 에러 상태 관리
  const [error, setError] = useState<Error | null>(null)
  // 에러 리셋을 위한 키 값 (증가시키면 에러 상태가 리셋됨)
  const [resetKey, setResetKey] = useState(0)

  /**
   * 에러 상태를 리셋하는 함수
   *
   * 이 함수는 다음 작업을 수행합니다:
   * 1. error 상태를 null로 설정
   * 2. resetKey를 증가시켜 ErrorBoundaryInternal의 componentDidUpdate 트리거
   *
   * 사용자가 "다시 시도" 버튼을 클릭했을 때 호출됩니다.
   */
  const reset = useCallback(() => {
    setError(null)
    setResetKey((prev) => prev + 1)
  }, [])

  /**
   * 에러 바운더리 래퍼 컴포넌트
   *
   * 이 컴포넌트는 다음 역할을 합니다:
   * 1. error 상태가 있으면 에러를 throw (방어 코드)
   * 2. error 상태가 없으면 ErrorBoundaryInternal로 자식을 감싸서 렌더링
   *
   * error 상태가 있을 때 throw하는 코드는 주로 방어 코드로,
   * 정상적인 흐름에서는 ApiErrorBoundary가 이미 에러 UI를 렌더링했기 때문에
   * 이 코드는 실행될 기회가 거의 없습니다.
   */
  const ErrorBoundaryWrapper = useCallback(
    ({ children }: { children: ReactNode }) => {
      // 방어 코드: 에러 상태가 있으면 throw
      // 정상적인 흐름에서는 ApiErrorBoundary가 이미 에러 UI를 렌더링했기 때문에
      // 이 코드는 실행될 기회가 거의 없습니다.
      if (error) {
        throw error
      }

      return (
        <ErrorBoundaryInternal
          resetKey={resetKey}
          onError={(err, info) => {
            console.error('ErrorBoundary caught an error:', err, info)
            // 포착된 에러를 상태로 설정하여 ApiErrorBoundary가 이를 감지하게 함
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
