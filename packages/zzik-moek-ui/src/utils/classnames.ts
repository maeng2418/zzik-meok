export { default as classnames } from 'classnames'

export const extractClasses = (className: string = '', pattern: string) => {
  if (!className) return ''

  const classNames = className.split(' ')
  const fontClasses = classNames.filter((className) => className.includes(pattern))

  return fontClasses.join(' ')
}
