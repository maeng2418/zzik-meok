import qs from 'qs'

type Arr<T> = T | T[]
type Dictionary<T> = { [key: string]: T }
type Location = {
  path?: string
  params?: Dictionary<Arr<string | number | boolean | null>>
  query?: Dictionary<Arr<string | number | boolean | undefined | null>>
}
type RawLocation = string | Location

export const toPath = (path: string = '', params: Location['params'] = {}): string => {
  return Object.entries(params).reduce(
    (result, [key, value]) =>
      result.replace(new RegExp(`:${key}`, 'g'), encodeURIComponent(value as string)),
    path,
  )
}

export const toQueryString = (query: Location['query'] = {}): string => {
  return qs.stringify(query, { arrayFormat: 'repeat' })
}

export const toURL = (
  location: RawLocation,
  params: Location['params'] = {},
  query: Location['query'] = {},
): string => {
  const urlCombine = (items: string[]) => items.filter((v, i) => i === 0 || v).join('?')
  if (typeof location === 'string') {
    return urlCombine([toPath(location, params), toQueryString(query)])
  }
  return urlCombine([toPath(location.path, location.params), toQueryString(location.query)])
}
