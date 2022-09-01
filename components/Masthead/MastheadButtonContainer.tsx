import React from 'react'

interface Props {
  children: React.ReactNode[]
}

export const MastheadButtonsContainer: React.FC<Props> = ({ children }) => (
  <div className='flex mt-1 text-sm w-full opacity-90 text-white font-serif'>
    {children}  
  </div>
)