import React from 'react'
import Draggable from 'react-draggable'
import { IoClose, IoRemove } from 'react-icons/io5'
import useStore from '../store/useStore'

const Window = ({ id, title, position, zIndex, children }) => {
  const { closeWindow, bringToFront, updateWindowPosition } = useStore()

  const handleDragStart = () => {
    bringToFront(id)
  }

  const handleDragStop = (e, data) => {
    updateWindowPosition(id, { x: data.x, y: data.y })
  }

  const handleClose = () => {
    closeWindow(id)
  }

  const handleMinimize = () => {
    // For now, just bring to front. Could implement minimize functionality later
    bringToFront(id)
  }

  const handleClick = () => {
    bringToFront(id)
  }

  return (
    <Draggable
      handle=".window-header"
      defaultPosition={position}
      onStart={handleDragStart}
      onStop={handleDragStop}
      bounds="parent"
    >
      <div
        className="window"
        style={{ zIndex }}
        onClick={handleClick}
      >
        <div className="window-header">
          <div className="window-title">
            {title}
          </div>
          <div className="window-controls">
            <button
              className="window-control"
              onClick={handleMinimize}
              title="Minimize"
            >
              <IoRemove />
            </button>
            <button
              className="window-control"
              onClick={handleClose}
              title="Close"
            >
              <IoClose />
            </button>
          </div>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Window