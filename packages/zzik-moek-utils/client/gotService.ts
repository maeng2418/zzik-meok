import got, { Got, OptionsOfTextResponseBody } from 'got'
import qs from 'qs'

class GotService {
  private readonly instance: Got

  constructor() {
    this.instance = got.extend({
      prefixUrl: 'https://localhost:4000',
    })
  }

  private serializeParams(params?: Record<string, any>) {
    if (!params) return undefined
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  get(
    url: string | URL,
    params?: Record<string, any>,
    options?: Omit<OptionsOfTextResponseBody, 'searchParams'>,
  ) {
    return this.instance.get(url, { searchParams: this.serializeParams(params), ...options }).json()
  }
}

export default GotService
