import type { PlopTypes } from '@turbo/gen'
import fs from 'fs'
import path from 'path'
// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (data: any) => {
        const dirPath = path.resolve(plop.getDestBasePath(), `src/components/${data.name}`)
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true })
          console.log(`Directory created at ${dirPath}`)
        }
        return `Directory checked/created: ${data.name}`
      },

      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /(\s*)$/,
        template: "\nexport * from './{{kebabCase name}}'",
      },
    ],
  })
}
