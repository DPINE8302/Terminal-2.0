import React from 'react'
import clsx from 'clsx'
import useStore from './store/useStore'
import Terminal from './components/Terminal'

function App() {
  const { theme, isGlitching } = useStore()

  return (
    <div className={clsx(
      'app-container',
      `theme-${theme}`,
      { 'is-glitching': isGlitching }
    )}>
      <Terminal />
    </div>
  )
}

export default App