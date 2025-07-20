import React from 'react'
import useStore from '../store/useStore'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const { openWindow, clearWindows } = useStore()

  const commands = [
    { id: 'whoami', label: 'whoami', component: 'WhoAmI', title: 'System Information' },
    { id: 'skills', label: 'skills', component: 'Skills', title: 'Technical Skills' },
    { id: 'projects', label: 'projects', component: 'Projects', title: 'Portfolio Projects' },
    { id: 'contact', label: 'contact', component: 'Contact', title: 'Contact Information' },
    { id: 'help', label: 'help', component: 'Help', title: 'Available Commands' }
  ]

  const handleCommand = (command) => {
    openWindow(command)
  }

  const handleClear = () => {
    clearWindows()
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="terminal-title">
          Kirati Rattanaporn
        </div>
        
        <div className="command-buttons">
          {commands.map((command) => (
            <button
              key={command.id}
              className="command-button"
              onClick={() => handleCommand(command)}
            >
              {command.label}
            </button>
          ))}
          <button
            className="command-button"
            onClick={handleClear}
          >
            clear
          </button>
        </div>
        
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header