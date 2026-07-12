import { describe, expect, it } from 'vitest'
import { parseCommand } from './commands'
describe('command parser', () => {
  it('parses known commands', () => expect(parseCommand('projects').window.id).toBe('projects'))
  it('returns help for unknown commands', () => expect(parseCommand('nope').type).toBe('unknown'))
  it('clears', () => expect(parseCommand('clear').type).toBe('clear'))
  it('switches valid themes', () => expect(parseCommand('theme light')).toMatchObject({ type: 'theme', theme: 'light' }))
})
