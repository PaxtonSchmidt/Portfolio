import React, {useCallback, useContext, useEffect, useState} from 'react'

interface scrollDepth {
  scrollY: number
}
export const ScrollContext = React.createContext<scrollDepth>({
  scrollY: 0
})

interface Props {
  children: React.ReactNode
}
const ScrollObserver: React.FC<Props> = ({children}) => {
  const [scrollY, setScrollY] = useState<number>(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])
  
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollObserver