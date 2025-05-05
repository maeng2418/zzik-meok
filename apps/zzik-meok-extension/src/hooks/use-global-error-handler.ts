import { useEffect, useRef } from 'react'

type GlobalErrorHandlerOptions = {
  /**
   * 전역 error 이벤트 처리 함수
   */
  onError?: (error: Error) => void

  /**
   * Promise rejection 이벤트 처리 함수
   */
  onUnhandledRejection?: (error: Error) => void
}

/**
 * 전역 에러 이벤트를 처리하는 훅
 *
 * window.onerror와 unhandledrejection 이벤트를 처리합니다.
 */
export const useGlobalErrorHandler = ({
  onError,
  onUnhandledRejection,
}: GlobalErrorHandlerOptions) => {
  // 이벤트 핸들러 참조 저장
  const handlersRef = useRef({
    onError,
    onUnhandledRejection,
  })

  // 옵션이 변경되면 참조 업데이트
  useEffect(() => {
    handlersRef.current = {
      onError,
      onUnhandledRejection,
    }
  }, [onError, onUnhandledRejection])

  useEffect(() => {
    // 전역 에러 이벤트 핸들러
    const handleGlobalError = (event: ErrorEvent) => {
      const { onError } = handlersRef.current

      // 에러 객체 추출
      const error = event.error || new Error(event.message || '알 수 없는 에러')

      // 콘솔에 출력
      console.error('[전역 에러]', error)

      // 콜백 함수 호출
      if (onError) {
        onError(error)
      }
    }

    // Promise rejection 이벤트 핸들러
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const { onUnhandledRejection } = handlersRef.current

      // 에러 객체 추출
      const error =
        event.reason instanceof Error
          ? event.reason
          : new Error(String(event.reason) || '처리되지 않은 Promise 거부')

      // 콘솔에 출력
      console.error('[처리되지 않은 Promise 거부]', error)

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
