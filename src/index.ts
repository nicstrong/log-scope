export {
  RootNamespace,
  DEFAULT_ROOT_LEVEL,
  WILDCARD_NAMESPACE_TOKEN,
  ROOT_NAMESPACE_KEY,
  reset,
  shouldLog,
  setLogLevel,
} from './logger.js'
export type { RootNamespaceType } from './logger.js'

export type { Outputter } from './types.js'
export { LogLevel } from './types.js'

export { ConsoleOutputter } from './console-outputter.js'
