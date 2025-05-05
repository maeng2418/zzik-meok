import { ClientError } from '@/utils/error'
import { FallbackProps } from 'react-error-boundary'

type ClientErrorFallbackProps = {
  error: ClientError
  resetErrorBoundary: FallbackProps['resetErrorBoundary']
}

const ClientErrorFallback = ({ error, resetErrorBoundary }: ClientErrorFallbackProps) => {
  switch (error.code) {
    case 'NOT_FOUND':
      return <div>존재하지 않는 페이지입니다</div>
    case 'INVALID_PARAMETER':
      return <div>잘못된 파라미터입니다</div>
    case 'NETWORK_ERROR':
      return <div>네트워크 오류가 발생했습니다</div>
    case 'TIMEOUT':
      return <div>요청 시간이 초과했습니다</div>
    case 'API_CANCELLED':
      return <div>요청이 취소되었습니다</div>
    default:
      return (
        <div className="flex flex-col items-center justify-center p-4 min-h-40">
          <h2 className="text-lg font-semibold mb-2">클라이언트 에러가 발생했습니다</h2>
          {error.code && <p className="text-sm text-destructive mb-1">에러 코드: {error.code}</p>}
          <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
          <button
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={resetErrorBoundary}
          >
            다시 시도
          </button>
        </div>
      )
  }
}

export default ClientErrorFallback
