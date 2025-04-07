import ky, { Input, KyInstance, Options } from 'ky'
import qs from 'qs'

export class KyService {
  private readonly instance: KyInstance

  constructor() {
    this.instance = ky.create({
      prefixUrl: 'https://localhost:4000',
    })
  }

  private serializeParams(params?: Record<string, any>) {
    if (!params) return undefined
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  get(url: Input, params?: Record<string, any>, options?: Omit<Options, 'searchParams'>) {
    return this.instance.get(url, { searchParams: this.serializeParams(params), ...options }).json()
  }

  post(
    url: Input,
    body?: Record<string, any>,
    options?: Omit<Options, 'searchParams'> & { params?: Record<string, any> },
  ) {
    return this.instance
      .post(url, { json: body, searchParams: this.serializeParams(options?.params), ...options })
      .json()
  }

  put(
    url: Input,
    body?: Record<string, any>,
    options?: Omit<Options, 'searchParams'> & { params?: Record<string, any> },
  ) {
    return this.instance
      .put(url, { json: body, searchParams: this.serializeParams(options?.params), ...options })
      .json()
  }

  delete(url: Input, options?: Omit<Options, 'searchParams'> & { params?: Record<string, any> }) {
    return this.instance
      .delete(url, { searchParams: this.serializeParams(options?.params), ...options })
      .json()
  }

  patch(
    url: Input,
    body?: Record<string, any>,
    options?: Omit<Options, 'searchParams'> & { params?: Record<string, any> },
  ) {
    return this.instance
      .patch(url, { json: body, searchParams: this.serializeParams(options?.params), ...options })
      .json()
  }
}
