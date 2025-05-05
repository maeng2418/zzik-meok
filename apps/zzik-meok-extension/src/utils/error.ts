export type ClientErrorCode =
  | 'NOT_FOUND'
  | 'INVALID_PARAMETER'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'API_CANCELLED'
  | 'UNEXPECTED'
  | 'UNKNOWN'

export class ClientError extends Error {
  code: ClientErrorCode
  reason?: string

  constructor(code: ClientErrorCode, reason?: string) {
    super(reason)
    this.code = code
    this.reason = reason
  }
}
