import got, { Got, Options, OptionsOfJSONResponseBody } from 'got'
import qs from 'qs'

export class GotService {
  private readonly instance: Got

  constructor(options?: Options) {
    this.instance = got.extend({
      prefixUrl: 'https://localhost:4000',
      responseType: 'json',
      ...options,
    })
  }

  extend(options: Options) {
    this.instance.extend(options)
  }

  private serializeParams(params?: Record<string, any>): string | undefined {
    if (!params) return undefined
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  async get(
    url: string | URL,
    params?: Record<string, any>,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType'
    >,
  ) {
    const response = await this.instance.get(url, {
      searchParams: this.serializeParams(params),
      responseType: 'json',
      resolveBodyOnly: false,
      ...options,
    })
    return response
  }

  async post(
    url: string | URL,
    body?: Record<string, any>,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: Record<string, any> },
  ) {
    const response = await this.instance
      .post(url, {
        json: body,
        searchParams: this.serializeParams(options?.params),
        responseType: 'json',
        ...options,
      })
      .json()
    return response
  }

  async put(
    url: string | URL,
    body?: Record<string, any>,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: Record<string, any> },
  ) {
    const response = await this.instance.put(url, {
      json: body,
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }

  async delete(
    url: string | URL,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType'
    > & { params?: Record<string, any> },
  ) {
    const response = await this.instance.delete(url, {
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }

  async patch(
    url: string | URL,
    body?: Record<string, any>,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: Record<string, any> },
  ) {
    const response = await this.instance.patch(url, {
      json: body,
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }
}
