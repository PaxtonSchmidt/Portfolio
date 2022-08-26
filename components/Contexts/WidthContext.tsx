import React, {useCallback, useEffect, useState} from 'react'

interface WindowWidth{
  width: number
}

export const WidthContext = React.createContext<WindowWidth>(
  {width: 0}
)

interface Props {
  children: React.ReactNode
}

export const WidthObserver: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const handleResize = useCallback(()=>{
    setWidth(window.innerWidth)
  }, [])
  
  useEffect(()=> {
    window.addEventListener('resize', handleResize)
    return ()=>window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <WidthContext.Provider value={{ width }}>
      { children }
    </WidthContext.Provider>
  )
}