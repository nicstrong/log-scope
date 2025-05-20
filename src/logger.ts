export type LoggerFn = {
  (message: any, ...args: any[]): void
  error: (...args: any[]) => void
  warn: (...args: any[]) => void
  info: (...args: any[]) => void
  log: (...args: any[]) => void
}

export function logger(namespace: string): LoggerFn {
  const base = (message: any, ...args: any[]) => {
    console.log(`[${namespace}]`, message, ...args)
  }
  base.error = (...args: any[]) => {
    console.error(`[${namespace}]`, ...args)
  }
  base.warn = (...args: any[]) => {
    console.warn(`[${namespace}]`, ...args)
  }
  base.info = (...args: any[]) => {
    console.info(`[${namespace}]`, ...args)
  }
  base.log = (...args: any[]) => {
    console.log(`[${namespace}]`, ...args)
  }
  return base
}
