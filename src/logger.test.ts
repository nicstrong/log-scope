import { logger, LoggerFn } from './logger'
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest'

describe('logger', () => {
  let originalLog: any
  let originalError: any
  let originalWarn: any
  let originalInfo: any
  let logs: any[]
  let errors: any[]
  let warns: any[]
  let infos: any[]

  beforeEach(() => {
    logs = []
    errors = []
    warns = []
    infos = []
    originalLog = console.log
    originalError = console.error
    originalWarn = console.warn
    originalInfo = console.info
    console.log = (...args: any[]) => logs.push(args)
    console.error = (...args: any[]) => errors.push(args)
    console.warn = (...args: any[]) => warns.push(args)
    console.info = (...args: any[]) => infos.push(args)
  })

  afterEach(() => {
    console.log = originalLog
    console.error = originalError
    console.warn = originalWarn
    console.info = originalInfo
  })

  it('should log with namespace', () => {
    const log = logger('test')
    log('hello', 123)
    expect(logs[0][0]).toBe('[test]')
    expect(logs[0][1]).toBe('hello')
    expect(logs[0][2]).toBe(123)
  })

  it('should log error with namespace', () => {
    const log = logger('err')
    log.error('fail', 42)
    expect(errors[0][0]).toBe('[err]')
    expect(errors[0][1]).toBe('fail')
    expect(errors[0][2]).toBe(42)
  })

  it('should log warn with namespace', () => {
    const log = logger('warn')
    log.warn('warned', 'foo')
    expect(warns[0][0]).toBe('[warn]')
    expect(warns[0][1]).toBe('warned')
    expect(warns[0][2]).toBe('foo')
  })

  it('should log info with namespace', () => {
    const log = logger('info')
    log.info('info', { a: 1 })
    expect(infos[0][0]).toBe('[info]')
    expect(infos[0][1]).toBe('info')
    expect(infos[0][2]).toEqual({ a: 1 })
  })

  it('should log with .log method', () => {
    const log = logger('log')
    log.log('foo', 'bar')
    expect(logs[0][0]).toBe('[log]')
    expect(logs[0][1]).toBe('foo')
    expect(logs[0][2]).toBe('bar')
  })
})
