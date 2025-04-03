import path from 'path'
import { querySelectorAll } from 'svgo/lib/xast.js'

const template = ({ jsx, componentName }, { tpl }) => {
  const ComponentName = componentName.replace(/^Svg/, '')
  return tpl`
    import { IconProps } from '../icon.types'

    const ${ComponentName} = ({
      size = 24,
      tabIndex = -1,
      focusable = false,
      ...props
    }: IconProps) => {
      return (${jsx})
    }
    
    export default ${ComponentName}
  `
}

const indexTemplate = (filePaths: { path: string; originalPath: string }[]) => {
  const uniqueFilePaths = [...new Set(filePaths.map(({ path }) => path))]
  const exportEntries = uniqueFilePaths.sort().map((filePath) => {
    const dirList = filePath.split('/')
    const namespace = dirList[dirList.length - 2]
    const upperCaseNamespace = namespace.replace(/^[a-z]/, (letter) => letter.toUpperCase())
    const basename = path.basename(filePath, path.extname(filePath))
    // 파스칼케이스로 변환하는 유틸리티 함수
    const toPascalCase = (str: string) =>
      str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
    const pascalCaseBasename = toPascalCase(basename) // 파스칼케이스 변환
    return `export { default as ${upperCaseNamespace}${pascalCaseBasename} } from './${basename}'`
  })
  return `
    ${exportEntries.join('\n')}
  `
}

const replaceAttributesBySelector = (root, params) => {
  const selectors = Array.isArray(params.selectors) ? params.selectors : [params]

  for (const { selector, attributes, value } of selectors) {
    const nodes = querySelectorAll(root, selector)

    for (const node of nodes) {
      if (node.type === 'element') {
        if (Array.isArray(attributes)) {
          for (const name of attributes) {
            node.attributes[name] = value
          }
        } else {
          node.attributes[attributes] = value
        }
      }
    }
  }
}

export default {
  template,
  indexTemplate,
  typescript: true,
  prettierConfig: {
    parser: 'typescript',
  },
  svgProps: {
    height: '{size}',
    width: '{size}',
    tabIndex: '{tabIndex}',
    focusable: '{focusable}',
    fill: 'currentColor',
  },
  filenameCase: 'kebab',
  svgoConfig: {
    plugins: [
      {
        name: 'replaceAttributesBySelector',
        type: 'visitor',
        params: {
          selectors: [
            {
              selector: `[fill][fill!='none']:not([data-fill-ignore])`,
              attributes: 'fill',
              value: 'currentColor',
            },
            {
              selector: `[stroke][stroke!='none']:not([data-stroke-ignore])`,
              attributes: 'stroke',
              value: 'currentColor',
            },
            {
              selector: '[data-fill-ignore]',
              attributes: 'data-fill-ignore',
              value: '',
            },
            {
              selector: '[data-fill-stroke]',
              attributes: 'data-fill-stroke',
              value: '',
            },
          ],
        },
        fn: replaceAttributesBySelector,
      },
    ],
  },
}
