import React, { useRef, useEffect } from 'react'

const CanvasBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Matrix rain variables
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)
    
    // Characters for the rain effect
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
    
    const draw = () => {
      // Get current theme color from CSS variables
      const computedStyle = getComputedStyle(canvas)
      const primaryColor = computedStyle.getPropertyValue('--primary-color').trim()
      
      // Semi-transparent background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Set text properties
      ctx.fillStyle = primaryColor
      ctx.font = `${fontSize}px monospace`
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        ctx.fillText(char, x, y)
        
        // Reset drop with random probability
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }
    
    // Animation loop
    const animationId = setInterval(draw, 50)
    
    return () => {
      clearInterval(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="canvas-background"
    />
  )
}

export default CanvasBackground