import React from 'react'

interface Props {
  children: React.ReactNode[]
}

export const MastheadButtonsContainer: React.FC<Props> = ({ children }) => (
  <div className='flex w-fit mx-auto text-sm w-full absolute top-4 opacity-90 right-0 text-white font-serif'>
    {children}  
  </div>
)