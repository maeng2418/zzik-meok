import { omit } from '@zzik-meok/utils'
import type { Config } from 'tailwindcss/types/config'
import tailwindConfig from '../../tailwind.config'

export type ZzikmeokUIConfig = Config

export default omit(tailwindConfig, 'content') satisfies Omit<Config, 'content'>
