import reactJsConfig from '@zzik-meok/eslint-config/react'

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactJsConfig,
  {
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]
