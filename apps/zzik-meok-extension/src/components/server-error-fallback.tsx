import { ServerError } from '@zzik-meok/utils/client/browser'
import { FallbackProps } from 'react-error-boundary'

type ServerErrorFallbackProps = {
  error: ServerError
  resetErrorBoundary: FallbackProps['resetErrorBoundary']
}

const ServerErrorFallback = ({ error, resetErrorBoundary }: ServerErrorFallbackProps) => {
  switch (error.code) {
    case 'UNAUTHENTICATED':
      return (
        <div className="flex flex-col items-center justify-center p-4 min-h-40">
          <h2 className="text-lg font-semibold mb-2">로그인이 필요합니다</h2>
          <p className="text-sm text-muted-foreground mb-2">로그인 페이지로 이동해주세요</p>
          <button
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={resetErrorBoundary}
          >
            로그인 페이지로 이동
          </button>
        </div>
      )
    case 'UNAUTHORIZED':
      return <div>접근 권한이 없습니다</div>
    default:
      return (
        <div className="flex flex-col items-center justify-center p-4 min-h-40">
          <h2 className="text-lg font-semibold mb-2">서버 에러가 발생했습니다</h2>
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

export default ServerErrorFallback
