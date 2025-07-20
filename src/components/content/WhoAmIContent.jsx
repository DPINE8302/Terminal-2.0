import React, { useState, useEffect } from 'react'
import TypedText from '../TypedText'
import GlitchyText from '../GlitchyText'
import contentData from '../../data/content.json'

const WhoAmIContent = () => {
  const [showGlitch, setShowGlitch] = useState(true)
  const { personal, about } = contentData

  useEffect(() => {
    // Show glitch effect for first 3 seconds, then show typed text
    const timer = setTimeout(() => {
      setShowGlitch(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="content-section">
      <div className="content-title">
        {showGlitch ? (
          <GlitchyText text="$ whoami" duration={2000} />
        ) : (
          <TypedText strings={['$ whoami']} typeSpeed={100} showCursor={false} />
        )}
      </div>

      <div className="content-text">
        <div style={{ marginBottom: '20px' }}>
          {showGlitch ? (
            <>
              <div><GlitchyText text={`"name": "${personal.name} (${personal.nickname})"`} duration={2500} /></div>
              <div><GlitchyText text={`"title": "${personal.title}"`} duration={2800} /></div>
              <div><GlitchyText text={`"location": "${personal.location}"`} duration={3000} /></div>
              <div><GlitchyText text={`"email": "${personal.email}"`} duration={3200} /></div>
            </>
          ) : (
            <>
              <div><strong>Name:</strong> {personal.name} ({personal.nickname})</div>
              <div><strong>Title:</strong> {personal.title}</div>
              <div><strong>Location:</strong> {personal.location}</div>
              <div><strong>Email:</strong> {personal.email}</div>
            </>
          )}
        </div>

        {!showGlitch && (
          <>
            <div className="content-title">About</div>
            <div className="content-text">
              <TypedText 
                strings={[about.introduction]} 
                typeSpeed={30} 
                showCursor={false}
              />
            </div>

            <div style={{ marginTop: '20px' }}>
              {about.details.map((detail, index) => (
                <div key={index} style={{ marginBottom: '8px', paddingLeft: '10px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>></span>
                  {detail}
                </div>
              ))}
            </div>

            <div className="content-title" style={{ marginTop: '30px' }}>System Information</div>
            <div className="content-text">
              <div><strong>OS:</strong> {about.systemInfo.os}</div>
              <div><strong>Terminal:</strong> {about.systemInfo.terminal}</div>
              <div><strong>Editor:</strong> {about.systemInfo.editor}</div>
              <div><strong>Languages:</strong> {about.systemInfo.languages.join(', ')}</div>
              <div><strong>Databases:</strong> {about.systemInfo.databases.join(', ')}</div>
              <div><strong>Tools:</strong> {about.systemInfo.tools.join(', ')}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WhoAmIContent