import { ApiError, asApiError } from '@/hooks/use-api-error'
import { useEffect, useRef } from 'react'

/**
 * useGlobalErrorHandler 훅의 옵션 인터페이스
 *
 * 전역 에러와 처리되지 않은 Promise 거부를 어떻게 처리할지 설정하는 옵션들입니다.
 */
interface GlobalErrorHandlerOptions {
  /**
   * 전역 error 이벤트(window.onerror) 처리 콜백 함수
   *
   * 이 함수는 window.onerror 이벤트가 발생할 때 호출됩니다.
   * 예: 구문 오류, 타입 오류, 참조 오류 등 전역 스코프에서 발생하는 에러
   */
  onError?: (error: Error | ApiError) => void

  /**
   * Promise rejection 이벤트(unhandledrejection) 처리 콜백 함수
   *
   * 이 함수는 처리되지 않은 Promise 거부가 발생할 때 호출됩니다.
   * 예: catch 블록으로 처리되지 않은 rejected Promise
   */
  onUnhandledRejection?: (error: Error | ApiError) => void

  /**
   * 에러를 ApiError로 변환할지 여부
   *
   * true인 경우, 일반 Error 객체를 ApiError 인터페이스로 변환합니다.
   * ApiError는 HTTP 상태 코드와 응답 데이터를 포함할 수 있습니다.
   *
   * @default true
   */
  convertToApiError?: boolean

  /**
   * 에러 로깅 여부
   *
   * true인 경우, 포착된 에러를 콘솔에 출력합니다.
   *
   * @default true
   */
  enableLogging?: boolean
}

/**
 * 전역 에러 이벤트를 처리하는 훅
 *
 * 이 훅은 React 컴포넌트 트리 외부에서 발생하는 에러를 포착하기 위한 메커니즘을 제공합니다:
 *
 * 1. window.onerror 이벤트를 통해 전역 에러 포착
 *    - 구문 오류, 타입 오류, 참조 오류 등 JavaScript 실행 중 발생하는 에러
 *    - 이벤트 핸들러 내부에서 발생하는 에러 (React 에러 바운더리가 포착하지 못하는 에러)
 *
 * 2. unhandledrejection 이벤트를 통해 처리되지 않은 Promise 거부 포착
 *    - catch 블록이 없는 rejected Promise
 *    - async/await 문에서 try/catch로 처리되지 않은 에러
 *
 * 이 훅은 React 에러 바운더리의 한계를 보완하여, 컴포넌트 외부에서 발생하는
 * 에러도 일관된 방식으로 처리할 수 있게 합니다.
 *
 * @param options 전역 에러 처리 옵션
 * @returns null
 */
export function useGlobalErrorHandler({
  onError,
  onUnhandledRejection,
  convertToApiError = true,
  enableLogging = true,
}: GlobalErrorHandlerOptions = {}) {
  /**
   * 콜백 핸들러와 옵션을 참조로 저장
   *
   * useRef를 사용하여 최신 값을 유지하면서도 이벤트 리스너 재등록을 방지합니다.
   * 이벤트 리스너는 한 번만 등록되고, 내부에서 항상 최신 콜백을 참조합니다.
   */
  const handlersRef = useRef({
    onError,
    onUnhandledRejection,
    convertToApiError,
    enableLogging,
  })

  /**
   * 옵션이 변경되면 참조 업데이트
   *
   * 콜백 함수나 옵션이 변경되었을 때 ref 객체를 업데이트합니다.
   * 이렇게 하면 이벤트 핸들러가 항상 최신 콜백과 옵션을 사용합니다.
   */
  useEffect(() => {
    handlersRef.current = {
      onError,
      onUnhandledRejection,
      convertToApiError,
      enableLogging,
    }
  }, [onError, onUnhandledRejection, convertToApiError, enableLogging])

  /**
   * 전역 에러 이벤트 리스너 설정
   *
   * window.onerror와 unhandledrejection 이벤트를 감지하는
   * 이벤트 리스너를 등록하고, 컴포넌트 언마운트 시 제거합니다.
   */
  useEffect(() => {
    /**
     * 전역 에러(window.onerror) 이벤트 핸들러
     *
     * JavaScript 실행 중 발생하는 에러와 이벤트 핸들러 내의 에러를 포착합니다.
     *
     * @param event ErrorEvent 객체
     */
    const handleGlobalError = (event: ErrorEvent) => {
      const { onError, convertToApiError, enableLogging } = handlersRef.current

      // 에러 객체 추출 (event.error가 없으면 message로 새 Error 생성)
      const errorObject = event.error || new Error(event.message || '알 수 없는 에러')

      // 필요하면 ApiError로 변환 (HTTP 상태 코드 등 추가 정보 포함)
      const error = convertToApiError ? asApiError(errorObject) : errorObject

      // 로깅 활성화된 경우 콘솔에 출력
      if (enableLogging) {
        console.error('[전역 에러]', error)
      }

      // 콜백 함수가 제공된 경우 호출
      if (onError) {
        onError(error)
      }
    }

    /**
     * Promise rejection 이벤트 핸들러
     *
     * 처리되지 않은 Promise 거부(catch되지 않은 reject)를 포착합니다.
     *
     * @param event PromiseRejectionEvent 객체
     */
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const { onUnhandledRejection, convertToApiError, enableLogging } = handlersRef.current

      // 에러 객체 추출 (reason이 Error면 그대로 사용, 아니면 새 Error 생성)
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

      // 콜백 함수가 제공된 경우 호출
      if (onUnhandledRejection) {
        onUnhandledRejection(error)
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    /**
     * 정리 함수 (cleanup)
     *
     * 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하여 메모리 누수를 방지합니다.
     */
    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, []) // 빈 의존성 배열로 한 번만 설정

  return null
}
