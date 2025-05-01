import ApiErrorBoundary from '@/components/api-error-boundary'
import { useTriggerError } from '@/hooks/use-trigger-error'
import React from 'react'

/**
 * 에러 테스트 컴포넌트
 *
 * 다양한 에러를 발생시켜 ErrorBoundary를 테스트합니다.
 */
const ErrorTest: React.FC = () => {
  const { triggerError, triggerApiError } = useTriggerError()

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">에러 테스트</h2>

      <div className="flex flex-col gap-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={() => triggerError()}
        >
          일반 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={() => triggerApiError(401, '인증이 필요합니다')}
        >
          401 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          onClick={() => triggerApiError(403, '권한이 없습니다')}
        >
          403 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => triggerApiError(404, '리소스를 찾을 수 없습니다')}
        >
          404 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded-md"
          onClick={() => triggerApiError(500, '서버 내부 오류가 발생했습니다')}
        >
          500 에러 발생
        </button>
      </div>
    </div>
  )
}

/**
 * 에러 경계가 적용된 에러 테스트 컴포넌트
 *
 * ApiErrorBoundary로 컴포넌트 수준의 에러 처리를 보여줍니다.
 */
const ErrorTestWithBoundary: React.FC = () => {
  return (
    <ApiErrorBoundary
      onError={(error, info) => {
        console.log('에러가 발생했습니다:', error, info)
      }}
      fallback={(error, reset) => (
        <div className="p-4 border border-red-300 rounded-md bg-red-50 dark:bg-red-950 dark:border-red-800">
          <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">커스텀 에러 UI</h3>
          <p className="my-2 text-red-600 dark:text-red-300">{error.message}</p>
          {error.status && (
            <p className="mb-2 text-sm text-red-500 dark:text-red-400">상태 코드: {error.status}</p>
          )}
          <button
            className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={reset}
          >
            다시 시도
          </button>
        </div>
      )}
    >
      <ErrorTest />
    </ApiErrorBoundary>
  )
}

export default ErrorTestWithBoundary
export { ErrorTest }
