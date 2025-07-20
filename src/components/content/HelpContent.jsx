import React from 'react'
import TypedText from '../TypedText'
import contentData from '../../data/content.json'

const HelpContent = () => {
  const { commands } = contentData

  return (
    <div className="content-section">
      <div className="content-title">
        <TypedText strings={['$ help --commands']} typeSpeed={100} showCursor={false} />
      </div>

      <div className="content-text" style={{ marginBottom: '20px' }}>
        <TypedText 
          strings={[
            'Welcome to the Terminal Portfolio! Here are the available commands:'
          ]} 
          typeSpeed={30} 
          showCursor={false}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div className="content-title" style={{ fontSize: '16px', marginBottom: '15px' }}>
          Available Commands:
        </div>
        {Object.entries(commands).map(([command, description], index) => (
          <div key={command} style={{ 
            marginBottom: '12px', 
            padding: '10px', 
            border: '1px solid var(--border-color)',
            background: 'var(--background-color-translucent)',
            borderRadius: '4px'
          }}>
            <div style={{ 
              fontWeight: '600', 
              color: 'var(--accent-color)', 
              marginBottom: '4px',
              fontFamily: 'var(--font-family)'
            }}>
              <span style={{ color: 'var(--primary-color)' }}>$</span> {command}
            </div>
            <div style={{ 
              color: 'var(--text-color)', 
              fontSize: '14px',
              paddingLeft: '15px'
            }}>
              {description}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div className="content-title" style={{ fontSize: '16px', marginBottom: '15px' }}>
          Navigation Tips:
        </div>
        <div style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
          Click on command buttons in the header to open windows
        </div>
        <div style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
          Drag windows by their title bar to reposition them
        </div>
        <div style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
          Click on a window to bring it to the front
        </div>
        <div style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
          Use the theme switcher to change visual themes
        </div>
        <div style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
          Close windows using the X button in the title bar
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div className="content-title" style={{ fontSize: '16px', marginBottom: '15px' }}>
          Keyboard Shortcuts:
        </div>
        <div style={{ 
          border: '1px solid var(--border-color)', 
          padding: '15px', 
          background: 'var(--background-color-translucent)',
          borderRadius: '4px',
          fontFamily: 'var(--font-family)',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: 'var(--primary-color)' }}>Ctrl + 1-6</span> - Switch themes
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: 'var(--primary-color)' }}>Esc</span> - Close active window
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: 'var(--primary-color)' }}>Tab</span> - Cycle through windows
          </div>
          <div>
            <span style={{ color: 'var(--primary-color)' }}>Space</span> - Pause/Resume animations
          </div>
        </div>
      </div>

      <div className="content-text">
        <TypedText 
          strings={[
            'System initialized successfully.',
            'All modules loaded and ready.',
            'Welcome to the interactive portfolio experience!',
            'Type any command to get started...'
          ]} 
          typeSpeed={40} 
          backSpeed={30}
          loop={true}
        />
      </div>
    </div>
  )
}

export default HelpContent