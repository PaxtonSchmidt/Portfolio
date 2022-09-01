import React, { useContext } from 'react'
import { WidthContext } from '../../State/Contexts/WidthContext'

interface Props {
  children: React.ReactNode
}

export const MoreWorksTechs: React.FC<Props> = ({ children }) => {
  const { width } = useContext(WidthContext)
  
  return (
    <div className={`absolute align-bottom bg-white ${width >= 768 ? '' : '-top-[48px]' } mx-auto my-1 w-fit left-0 right-0 h-fit p-2 drop-shadow-sm rounded`}>
      <div className='h-fit w-full bottom-0 rounded'>
        {children}
      </div>
    </div>
  )
}
