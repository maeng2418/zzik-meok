import { ApiError, asApiError } from '@/hooks/use-api-error'
import { useEffect, useRef } from 'react'

interface GlobalErrorHandlerOptions {
  /**
   * 전역 error 이벤트 처리 함수
   */
  onError?: (error: Error | ApiError) => void

  /**
   * Promise rejection 이벤트 처리 함수
   */
  onUnhandledRejection?: (error: Error | ApiError) => void

  /**
   * 에러를 ApiError로 변환할지 여부
   * @default true
   */
  convertToApiError?: boolean

  /**
   * 에러 로깅 여부
   * @default true
   */
  enableLogging?: boolean
}

/**
 * 전역 에러 이벤트를 처리하는 훅
 *
 * window.onerror와 unhandledrejection 이벤트를 처리합니다.
 */
export function useGlobalErrorHandler({
  onError,
  onUnhandledRejection,
  convertToApiError = true,
  enableLogging = true,
}: GlobalErrorHandlerOptions = {}) {
  // 이벤트 핸들러 참조 저장
  const handlersRef = useRef({
    onError,
    onUnhandledRejection,
    convertToApiError,
    enableLogging,
  })

  // 옵션이 변경되면 참조 업데이트
  useEffect(() => {
    handlersRef.current = {
      onError,
      onUnhandledRejection,
      convertToApiError,
      enableLogging,
    }
  }, [onError, onUnhandledRejection, convertToApiError, enableLogging])

  useEffect(() => {
    // 전역 에러 이벤트 핸들러
    const handleGlobalError = (event: ErrorEvent) => {
      const { onError, convertToApiError, enableLogging } = handlersRef.current

      // 에러 객체 추출
      const errorObject = event.error || new Error(event.message || '알 수 없는 에러')

      // 필요하면 ApiError로 변환
      const error = convertToApiError ? asApiError(errorObject) : errorObject

      // 로깅 활성화된 경우 콘솔에 출력
      if (enableLogging) {
        console.error('[전역 에러]', error)
      }

      // 콜백 함수 호출
      if (onError) {
        onError(error)
      }
    }

    // Promise rejection 이벤트 핸들러
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const { onUnhandledRejection, convertToApiError, enableLogging } = handlersRef.current

      // 에러 객체 추출
      const errorObject =
        event.reason instanceof Error
          ? event.reason
          : new Error(String(event.reason) || '처리되지 않은 Promise 거부')

      // 필요하면 ApiError로 변환
      const error = convertToApiError ? asApiError(errorObject) : errorObject

      // 로깅 활성화된 경우 콘솔에 출력
      if (enableLogging) {
        console.error('[처리되지 않은 Promise 거부]', error)
      }

      // 콜백 함수 호출
      if (onUnhandledRejection) {
        onUnhandledRejection(error)
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, []) // 빈 의존성 배열로 한 번만 설정

  return null
}
