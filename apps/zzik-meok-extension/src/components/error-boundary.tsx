import { ClientError } from '@/utils/error'
import { ServerError } from '@zzik-meok/utils/client/browser'
import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'
import ClientErrorFallback from './client-error-fallback'
import ServerErrorFallback from './server-error-fallback'

/**
 * 일반 에러와 API 에러를 모두 처리하며, HTTP 상태 코드별로 다른 폴백 UI를 제공할 수 있습니다.
 */
const ErrorBoundary = () => {
  // FallbackComponent에서 에러와 리셋 함수를 받아 적절한 UI를 반환합니다
  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
    if (!(error instanceof ClientError) && !(error instanceof ServerError)) {
      console.log(error, '전역에러')
      throw error
    }

    if (error instanceof ClientError) {
      return <ClientErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    }

    // 서버 에러인 경우
    if (error instanceof ServerError) {
      return <ServerErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    }

    return null
  }

  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>
      <Outlet />
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
