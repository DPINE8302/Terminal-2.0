import { create } from 'zustand'

const useStore = create((set, get) => ({
  // Theme management
  theme: 'matrix',
  isGlitching: false,
  
  // Window management
  windows: [],
  nextZIndex: 1,
  
  // Actions
  setTheme: (newTheme) => {
    set({ isGlitching: true })
    
    // Update CSS variables dynamically for glitch effect
    const updateGlitchVariables = () => {
      const root = document.documentElement
      const randomX = (Math.random() - 0.5) * 10
      const randomY = (Math.random() - 0.5) * 10
      root.style.setProperty('--glitch-x', `${randomX}px`)
      root.style.setProperty('--glitch-y', `${randomY}px`)
    }
    
    const glitchInterval = setInterval(updateGlitchVariables, 50)
    
    setTimeout(() => {
      clearInterval(glitchInterval)
      set({ theme: newTheme, isGlitching: false })
      
      // Reset glitch variables
      const root = document.documentElement
      root.style.setProperty('--glitch-x', '0px')
      root.style.setProperty('--glitch-y', '0px')
    }, 300)
  },
  
  openWindow: (windowData) => {
    const { windows, nextZIndex } = get()
    
    // Check if window already exists
    const existingWindow = windows.find(w => w.id === windowData.id)
    if (existingWindow) {
      // Bring existing window to front
      set({
        windows: windows.map(w => 
          w.id === windowData.id 
            ? { ...w, zIndex: nextZIndex }
            : w
        ),
        nextZIndex: nextZIndex + 1
      })
      return
    }
    
    // Create new window
    const newWindow = {
      id: windowData.id,
      component: windowData.component,
      title: windowData.title,
      position: windowData.position || { x: 50 + windows.length * 30, y: 50 + windows.length * 30 },
      zIndex: nextZIndex,
      ...windowData
    }
    
    set({
      windows: [...windows, newWindow],
      nextZIndex: nextZIndex + 1
    })
  },
  
  closeWindow: (windowId) => {
    set(state => ({
      windows: state.windows.filter(w => w.id !== windowId)
    }))
  },
  
  bringToFront: (windowId) => {
    const { windows, nextZIndex } = get()
    set({
      windows: windows.map(w => 
        w.id === windowId 
          ? { ...w, zIndex: nextZIndex }
          : w
      ),
      nextZIndex: nextZIndex + 1
    })
  },
  
  updateWindowPosition: (windowId, position) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === windowId 
          ? { ...w, position }
          : w
      )
    }))
  },
  
  clearWindows: () => {
    set({ windows: [], nextZIndex: 1 })
  }
}))

export default useStore