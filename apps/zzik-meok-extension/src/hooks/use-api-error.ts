import { useEffect } from 'react'

/**
 * API 에러를 나타내는 확장 인터페이스
 *
 * 기본 Error 인터페이스를 확장하여 HTTP API 통신에서 발생하는
 * 추가적인 정보(상태 코드, 응답 객체, 응답 데이터)를 포함합니다.
 *
 * 이 인터페이스를 사용하면 다양한 HTTP 에러 상황을 더 효과적으로 처리할 수 있습니다.
 */
export interface ApiError extends Error {
  /** HTTP 상태 코드 (예: 400, 401, 404, 500 등) */
  status?: number
  /** 원본 Response 객체 */
  response?: Response
  /** 응답 데이터 (JSON, 텍스트 등) */
  data?: unknown
}

/**
 * API 응답 에러를 처리하는 커스텀 훅
 *
 * 이 훅은 API 요청에서 발생한 에러를 HTTP 상태 코드에 따라 처리할 수 있게 해줍니다.
 * 특정 상태 코드에 대한 처리 로직을 정의하고, 알 수 없는 에러에 대한 기본 처리도 제공합니다.
 *
 * 사용 예시:
 * ```
 * useApiError(error, {
 *   401: () => router.push('/login'),
 *   403: () => showPermissionDeniedMessage(),
 *   404: () => router.push('/not-found')
 * }, () => showGenericErrorMessage());
 * ```
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
    // 에러가 없으면 아무 작업도 하지 않음
    if (!error) return

    // HTTP 상태 코드가 있는 API 에러인 경우
    if ('status' in error && error.status && onHttpError) {
      const handler = onHttpError[error.status]
      if (handler) {
        // 상태 코드에 맞는 핸들러 실행
        handler()
        return
      }
    }

    // API 에러가 아니거나 처리되지 않은 HTTP 상태 코드인 경우
    // 알 수 없는 에러 처리 콜백 호출
    if (onUnknownError) {
      onUnknownError()
    }
  }, [error, onHttpError, onUnknownError])
}

/**
 * 임의의 에러 객체를 ApiError 타입으로 변환하는 유틸리티 함수
 *
 * 이 함수는 다양한 형태의 에러 객체를 일관된 ApiError 인터페이스로
 * a변환하여 에러 처리 로직을 단순화합니다.
 *
 * 변환 규칙:
 * 1. 이미 Error 인스턴스인 경우 ApiError로 타입 캐스팅
 * 2. 객체인 경우 새 Error 객체를 생성하고 원본 객체의 프로퍼티를 복사
 * 3. 그 외의 경우 'Unknown API error' 메시지를 가진 새 ApiError 생성
 *
 * @param error - 변환할 에러 객체 (임의의 타입 가능)
 * @returns ApiError 타입으로 변환된 에러 객체
 */
export function asApiError(error: unknown): ApiError {
  // 이미 Error 타입인 경우 바로 ApiError로 변환
  if (error instanceof Error) {
    return error as ApiError
  }

  // 새 ApiError 객체 생성
  const apiError = new Error('Unknown API error') as ApiError

  // error가 객체인 경우, 해당 객체의 모든 프로퍼티를 apiError에 복사
  if (typeof error === 'object' && error !== null) {
    Object.assign(apiError, error)
  }

  return apiError
}
