'use client'

import React, { useState } from 'react'

const shuffleString = (str: string) => {
  return str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
}

export default function ShuffleText({ children }: { children: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [shuffledText, setShuffledText] = useState(children)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setShuffledText(shuffleString(children))
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setShuffledText(children)
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? shuffledText : children}
    </span>
  )
}