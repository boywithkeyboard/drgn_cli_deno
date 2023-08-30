import {
  brightGreen,
  brightRed,
  brightYellow,
  gray,
} from 'https://deno.land/std@0.200.0/fmt/colors.ts'

export class Logger {
  constructor() {}

  error(message: string) {
    console.clear()
    console.error(`${brightRed('error')} ${gray(`- ${message}`)}`)

    Deno.exit()
  }

  success(message: string) {
    console.clear()
    console.log(`${brightGreen('success')} ${gray(`- ${message}`)}`)
  }

  wait(message: string) {
    console.clear()
    console.log(`${brightYellow('wait')} ${gray(`- ${message}...`)}`)
  }

  // task() ✗ ✓
}

export const logger = new Logger()
