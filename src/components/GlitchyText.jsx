import React, { useState, useEffect } from 'react'

const GlitchyText = ({ text, duration = 2000, interval = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(true)

  const glitchChars = '*&^%$#@![]<>?~`'

  useEffect(() => {
    if (!text) return

    let currentIteration = 0
    const totalIterations = Math.floor(duration / interval)

    const glitchInterval = setInterval(() => {
      let scrambledText = ''
      
      for (let i = 0; i < text.length; i++) {
        // Calculate probability of character being resolved
        const resolveProgress = currentIteration / totalIterations
        const charProgress = (i + 1) / text.length
        
        // Characters resolve from left to right over time
        if (resolveProgress > charProgress) {
          scrambledText += text[i]
        } else {
          // Random chance to show correct character early
          if (Math.random() < 0.1) {
            scrambledText += text[i]
          } else {
            scrambledText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
          }
        }
      }

      setDisplayedText(scrambledText)
      currentIteration++

      // Complete the effect
      if (currentIteration >= totalIterations) {
        setDisplayedText(text)
        setIsGlitching(false)
        clearInterval(glitchInterval)
      }
    }, interval)

    return () => clearInterval(glitchInterval)
  }, [text, duration, interval])

  return (
    <span className={`glitchy-text ${isGlitching ? 'is-glitching' : ''}`}>
      {displayedText}
    </span>
  )
}

export default GlitchyText