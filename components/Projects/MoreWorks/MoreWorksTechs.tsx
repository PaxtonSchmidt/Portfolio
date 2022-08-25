import React from 'react'

interface Props {
  children: React.ReactNode
}

export const MoreWorksTechs: React.FC<Props> = ({ children }) => (
  <div className='absolute bg-white -bottom-[102px] md:-bottom-[48px] mx-auto my-1 w-fit left-0 right-0 h-fit p-2 shadow rounded'>
    <div className='h-fit w-full bottom-0 rounded'>
      {children}
    </div>
  </div>
)