export {
  RootNamespace,
  DEFAULT_ROOT_LEVEL,
  WILDCARD_NAMESPACE_TOKEN,
  ROOT_NAMESPACE_KEY,
  reset,
  scopedLog,
  getNamespaces,
  shouldLog,
  setLogLevel,
} from './scopedLog.js'
export type { RootNamespaceType } from './scopedLog.js'

export type { Outputter } from './types.js'
export { LogLevel } from './types.js'

export { ConsoleOutputter } from './console-outputter.js'
