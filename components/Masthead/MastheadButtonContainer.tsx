import React from 'react'

interface Props {
  children: React.ReactNode[]
}

export const MastheadButtonsContainer: React.FC<Props> = ({ children }) => (
  <div className='flex justify-left mx-auto w-full mt-3'>
    {children}  
  </div>
)