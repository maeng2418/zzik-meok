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

  private serializeParams(params?: object): string | undefined {
    if (!params) return undefined
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  async get<TResponse = unknown>(
    url: string | URL,
    params?: object,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType'
    >,
  ) {
    const response = await this.instance.get<TResponse>(url, {
      searchParams: this.serializeParams(params),
      responseType: 'json',
      resolveBodyOnly: false,
      ...options,
    })
    return response
  }

  async post<TResponse = unknown>(
    url: string | URL,
    body?: object,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: object },
  ) {
    const response = await this.instance.post<TResponse>(url, {
      json: body,
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      ...options,
    })
    return response
  }

  async put<TResponse = unknown>(
    url: string | URL,
    body?: object,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: object },
  ) {
    const response = await this.instance.put<TResponse>(url, {
      json: body,
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }

  async delete<TResponse = unknown>(
    url: string | URL,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType'
    > & { params?: object },
  ) {
    const response = await this.instance.delete<TResponse>(url, {
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }

  async patch<TResponse = unknown>(
    url: string | URL,
    body?: object,
    options?: Omit<
      OptionsOfJSONResponseBody,
      'searchParams' | 'isStream' | 'resolveBodyOnly' | 'responseType' | 'json'
    > & { params?: object },
  ) {
    const response = await this.instance.patch<TResponse>(url, {
      json: body,
      searchParams: this.serializeParams(options?.params),
      responseType: 'json',
      resolveBodyOnly: true,
      ...options,
    })
    return response
  }
}
