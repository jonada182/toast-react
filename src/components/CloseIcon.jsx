import React from 'react'

const CloseIcon = () => {
  return (
    <svg viewBox="0 0 20 20">
        <line
        x1={0.75}
        y1={0.75}
        x2={19.25}
        y2={19.25}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        />
        <line
        x1={19.25}
        y1={0.75}
        x2={0.75}
        y2={19.25}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        />
    </svg>
  )
}

export default CloseIcon