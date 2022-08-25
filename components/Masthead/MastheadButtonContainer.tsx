import React from 'react'

interface Props {
  children: React.ReactNode[]
}

export const MastheadButtonsContainer: React.FC<Props> = ({ children }) => (
  <div className='flex w-fit mx-auto text-sm md:w-full mt-3'>
    {children}  
  </div>
)