import { gray, white } from 'https://deno.land/std@0.200.0/fmt/colors.ts'
import { Config } from './types.ts'

export function printVersion(config: Config) {
  console.info(gray(white(config.name) + ' ' + (config.version ?? '?.?.?')))
}