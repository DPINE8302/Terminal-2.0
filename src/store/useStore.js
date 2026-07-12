import { create } from 'zustand'

const savedTheme = () => {
  try { return localStorage.getItem('terminal-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') }
  catch { return 'dark' }
}

const useStore = create((set, get) => ({
  theme: savedTheme(), windows: [], nextZ: 2,
  setTheme: (theme) => { try { localStorage.setItem('terminal-theme', theme) } catch { /* storage may be unavailable */ } set({ theme }) },
  openWindow: (window) => {
    const { windows, nextZ } = get()
    const exists = windows.some(({ id }) => id === window.id)
    set({ windows: exists ? windows.map((item) => item.id === window.id ? { ...item, minimized: false, z: nextZ } : item) : [...windows, { ...window, z: nextZ, minimized: false }], nextZ: nextZ + 1 })
  },
  closeWindow: (id) => set((state) => ({ windows: state.windows.filter((window) => window.id !== id) })),
  minimizeWindow: (id) => set((state) => ({ windows: state.windows.map((window) => window.id === id ? { ...window, minimized: !window.minimized } : window) })),
  focusWindow: (id) => { const { nextZ } = get(); set((state) => ({ windows: state.windows.map((window) => window.id === id ? { ...window, z: nextZ } : window), nextZ: nextZ + 1 })) },
  clearWindows: () => set({ windows: [], nextZ: 2 })
}))

export default useStore
