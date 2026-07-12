import { beforeEach, describe, expect, it } from 'vitest'
import useStore from './useStore'
describe('window store', () => {
  beforeEach(() => useStore.setState({ windows: [], nextZ: 2, theme: 'dark' }))
  it('opens without duplicates and closes', () => { const item={id:'about',title:'About'}; useStore.getState().openWindow(item); useStore.getState().openWindow(item); expect(useStore.getState().windows).toHaveLength(1); useStore.getState().closeWindow('about'); expect(useStore.getState().windows).toHaveLength(0) })
  it('persists themes', () => { useStore.getState().setTheme('light'); expect(localStorage.getItem('terminal-theme')).toBe('light') })
})
