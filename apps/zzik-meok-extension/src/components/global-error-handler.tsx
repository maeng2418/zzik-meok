import { useGlobalErrorHandler } from '@/hooks/use-global-error-handler'
import { useState } from 'react'
import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import ErrorBoundary from './error-boundary'

/**
 * 전역 에러 핸들러와 API 에러 바운더리를 통합한 컴포넌트
 *
 * - React 컴포넌트 내부 에러
 * - 전역 window.onerror 이벤트
 * - 처리되지 않은 Promise rejection
 *
 * 위 모든 에러를 처리할 수 있습니다.
 */
const GlobalErrorHandler = () => {
  const [globalError, setGlobalError] = useState<Error | null>(null)
  // 전역 에러 이벤트 처리 훅
  useGlobalErrorHandler({
    onError: (error) => {
      setGlobalError(error)
    },
    onUnhandledRejection: (error) => {
      setGlobalError(error)
    },
  })

  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
    // 기본 에러 UI
    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-40">
        <h2 className="text-lg font-semibold mb-2">에러가 발생했습니다</h2>
        <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
        <p className="text-xs text-muted-foreground mb-2">타입: 전역 에러</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={resetErrorBoundary}
        >
          다시 시도
        </button>
      </div>
    )
  }

  if (globalError) {
    return <FallbackComponent error={globalError} resetErrorBoundary={() => setGlobalError(null)} />
  }

  // 전역 에러가 없는 경우 ApiErrorBoundary로 컴포넌트 트리를 감싸서 React 컴포넌트 에러 처리
  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>
      <ErrorBoundary />
    </ReactErrorBoundary>
  )
}

export default GlobalErrorHandler
