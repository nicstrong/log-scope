import { LogLevel, type Outputter } from './types'

export const ConsoleOutputter: Outputter = (
  level: LogLevel,
  message?: any,
  ...optionalArgs: any[]
) => {
  switch (level) {
    case LogLevel.ERROR:
      console.error(message, ...optionalArgs)
      break
    case LogLevel.WARN:
      console.warn(message, ...optionalArgs)
      break
    case LogLevel.INFO:
      console.info(message, ...optionalArgs)
      break
    case LogLevel.LOG:
      console.log(message, ...optionalArgs)
      break
    case LogLevel.DEBUG:
      console.debug(message, ...optionalArgs)
      break
  }
}
