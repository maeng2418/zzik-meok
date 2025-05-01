import { ApiError } from '@/hooks/use-api-error'
import React, { useCallback } from 'react'

/**
 * 전역 에러를 테스트하기 위한 컴포넌트
 */
const GlobalErrorTest: React.FC = () => {
  // window.onerror 이벤트를 발생시키는 함수
  const triggerGlobalError = useCallback(() => {
    // 에러를 발생시키는 코드
    setTimeout(() => {
      // @ts-ignore
      nonExistentFunction() // 존재하지 않는 함수 호출로 에러 발생
    }, 0)
  }, [])

  // unhandledrejection 이벤트를 발생시키는 함수
  const triggerUnhandledRejection = useCallback(() => {
    // 처리되지 않은 Promise rejection 발생
    new Promise((_, reject) => {
      reject(new Error('처리되지 않은 Promise 에러'))
    })
  }, [])

  // HTTP 상태 코드를 가진 unhandledrejection 발생
  const triggerApiRejection = useCallback((status: number) => {
    // HTTP 상태 코드를 가진 Promise rejection 발생
    new Promise((_, reject) => {
      const error = new Error(`${status} API 에러`) as ApiError
      error.status = status
      reject(error)
    })
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">전역 에러 테스트</h2>

      <div className="flex flex-col gap-2">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={triggerGlobalError}>
          전역 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={triggerUnhandledRejection}
        >
          처리되지 않은 Promise 에러 발생
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          onClick={() => triggerApiRejection(401)}
        >
          401 API 에러 (Promise) 발생
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => triggerApiRejection(404)}
        >
          404 API 에러 (Promise) 발생
        </button>
      </div>
    </div>
  )
}

export default GlobalErrorTest
