import { ApiError } from '@/hooks/use-api-error'
import { useState } from 'react'

/**
 * 테스트용 에러를 트리거하는 훅
 *
 * @returns 에러 트리거 함수
 */
export function useTriggerError() {
  const [error, setError] = useState<ApiError | null>(null)

  /**
   * 일반 에러를 트리거합니다
   *
   * @param message 에러 메시지
   */
  const triggerError = (message: string = '테스트 에러입니다') => {
    const error = new Error(message)
    throw error
  }

  /**
   * HTTP 상태 코드를 가진 API 에러를 트리거합니다
   *
   * @param status HTTP 상태 코드
   * @param message 에러 메시지
   */
  const triggerApiError = (status: number, message: string = `${status} 에러입니다`) => {
    const apiError = new Error(message) as ApiError
    apiError.status = status
    throw apiError
  }

  return {
    error,
    setError,
    triggerError,
    triggerApiError,
  }
}
