import React from 'react'

interface Props{
  
}

export const Modal: React.FC<Props> = () => (
  <aside className='w-fit fixed md:w-4/5 max-w-[480px] bg-black h-fit text-white z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
    <p>TEXT</p>
  </aside>
)