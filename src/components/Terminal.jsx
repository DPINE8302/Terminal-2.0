import React from 'react'
import useStore from '../store/useStore'
import CanvasBackground from './CanvasBackground'
import ScanlineOverlay from './ScanlineOverlay'
import Header from './Header'
import Window from './Window'
import Footer from './Footer'

// Window content components
import WhoAmIContent from './content/WhoAmIContent'
import SkillsContent from './content/SkillsContent'
import ProjectsContent from './content/ProjectsContent'
import ContactContent from './content/ContactContent'
import HelpContent from './content/HelpContent'

const Terminal = () => {
  const { windows } = useStore()

  const getWindowComponent = (componentName) => {
    const components = {
      'WhoAmI': WhoAmIContent,
      'Skills': SkillsContent,
      'Projects': ProjectsContent,
      'Contact': ContactContent,
      'Help': HelpContent
    }
    return components[componentName] || (() => <div>Component not found</div>)
  }

  return (
    <div className="terminal">
      <CanvasBackground />
      <ScanlineOverlay />
      <Header />
      
      {/* Windows */}
      {windows.map((window) => {
        const ContentComponent = getWindowComponent(window.component)
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            zIndex={window.zIndex}
          >
            <ContentComponent />
          </Window>
        )
      })}
      
      <Footer />
    </div>
  )
}

export default Terminal