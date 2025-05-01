import { useEffect } from 'react'

export interface ApiError extends Error {
  status?: number
  response?: Response
  data?: unknown
}

/**
 * API 응답 에러를 처리하는 커스텀 훅
 *
 * @param error - 에러 객체 (타입스크립트의 Error 타입 또는 ApiError 타입)
 * @param onHttpError - HTTP 상태 코드별 에러 처리 콜백 함수 맵
 * @param onUnknownError - 식별되지 않은 에러 처리를 위한 콜백 함수
 */
export function useApiError(
  error: Error | ApiError | null,
  onHttpError?: Partial<Record<number, () => void>>,
  onUnknownError?: () => void,
) {
  useEffect(() => {
    if (!error) return

    // HTTP 상태 코드가 있는 API 에러인 경우
    if ('status' in error && error.status && onHttpError) {
      const handler = onHttpError[error.status]
      if (handler) {
        handler()
        return
      }
    }

    // API 에러가 아니거나 처리되지 않은 HTTP 상태 코드인 경우
    if (onUnknownError) {
      onUnknownError()
    }
  }, [error, onHttpError, onUnknownError])
}

/**
 * API 에러를 특정 타입으로 변환하는 함수
 *
 * @param error - 변환할 에러 객체
 * @returns ApiError 타입으로 변환된 에러 객체
 */
export function asApiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return error as ApiError
  }

  const apiError = new Error('Unknown API error') as ApiError
  if (typeof error === 'object' && error !== null) {
    Object.assign(apiError, error)
  }

  return apiError
}
