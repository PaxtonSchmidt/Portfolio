//https://stackoverflow.com/a/65008608
import React, { useEffect, useState } from 'react'

export default function useOnScreen(ref: React.MutableRefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}