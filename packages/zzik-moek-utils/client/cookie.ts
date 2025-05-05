import Cookies from 'js-cookie'

export type CookieAttributes = Cookies.CookieAttributes

export class Cookie {
  static getAll() {
    return Cookies.get()
  }

  static get(key: string) {
    const value = Cookies.get(key)
    try {
      return value ? JSON.parse(value) : undefined
    } catch {
      return undefined
    }
  }

  static set<TValue>(key: string, value: TValue, options?: Cookies.CookieAttributes) {
    Cookies.set(key, JSON.stringify(value), options)
  }

  static remove(key: string, options?: Cookies.CookieAttributes) {
    Cookies.remove(key, options)
  }
}
