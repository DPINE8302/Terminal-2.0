import React from 'react'
import Typed from 'react-typed'

const TypedText = ({ strings, typeSpeed = 50, backSpeed = 30, loop = false, showCursor = true }) => {
  return (
    <span className="typed-text">
      <Typed
        strings={strings}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        loop={loop}
        showCursor={showCursor}
        cursorChar="_"
      />
    </span>
  )
}

export default TypedText