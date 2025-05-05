import { ServerErrorCode } from '@/common'
import ky, { HTTPError, Input, KyInstance, KyResponse, NormalizedOptions, Options } from 'ky'
import qs from 'qs'

export type { HTTPError, KyResponse }

export class KyService {
  private readonly instance: KyInstance

  constructor(options?: Options) {
    this.instance = ky.create({
      prefixUrl: 'https://localhost:4000',
      ...options,
    })
  }

  extend(options: Options) {
    this.instance.extend(options)
  }

  private serializeParams(params?: object): string | undefined {
    if (!params) return undefined
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  async get<TResponse = unknown>(
    url: Input,
    params?: object,
    options?: Omit<Options, 'searchParams'>,
  ) {
    return this.instance
      .get(url, {
        searchParams: this.serializeParams(params),
        ...options,
      })
      .json<TResponse>()
  }

  async post<TResponse = unknown>(
    url: Input,
    body?: object,
    options?: Omit<Options, 'searchParams'> & { params?: object },
  ) {
    return this.instance
      .post(url, {
        json: body,
        searchParams: this.serializeParams(options?.params),
        ...options,
      })
      .json<TResponse>()
  }

  async put<TResponse = unknown>(
    url: Input,
    body?: object,
    options?: Omit<Options, 'searchParams'> & { params?: object },
  ) {
    return this.instance
      .put(url, {
        json: body,
        searchParams: this.serializeParams(options?.params),
        ...options,
      })
      .json<TResponse>()
  }

  async delete<TResponse = unknown>(
    url: Input,
    options?: Omit<Options, 'searchParams'> & { params?: object },
  ) {
    return this.instance
      .delete(url, {
        searchParams: this.serializeParams(options?.params),
        ...options,
      })
      .json<TResponse>()
  }

  async patch<TResponse = unknown>(
    url: Input,
    body?: object,
    options?: Omit<Options, 'searchParams'> & { params?: object },
  ) {
    return this.instance
      .patch(url, {
        json: body,
        searchParams: this.serializeParams(options?.params),
        ...options,
      })
      .json<TResponse>()
  }
}

export class ServerError extends HTTPError {
  readonly code: ServerErrorCode
  readonly reason?: string

  constructor(
    response: Response,
    request: Request,
    options: NormalizedOptions,
    code: ServerErrorCode,
    reason?: string,
  ) {
    super(response, request, options)
    this.code = code
    this.reason = reason
  }
}
