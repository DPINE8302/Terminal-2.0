import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="footer">
      <span className="role">technology and creative enthusiast</span>
      <span className="time">{currentTime}</span>
      <div className="footer-info">
        <span className="version">Version 1.5.2</span>
        <span className="copyright">© 2025 Wiqnnc_. All Rights Reserved.</span>
        <span className="author">Made with love by Win.</span>
      </div>
    </footer>
  )
}

export default Footer