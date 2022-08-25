import React, { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  children: ReactNode |  ReactNode[]
}

export const MoreWorksSidebar: React.FC<Props> = ({ children }) => {

  return (
    <div className='flex flex-col w-content mx-auto md:justify-start order-2 mt-1 md:mt-0 md:mr-1 mx-auto md:order-1 md:w-[50px]'>
      {children}
    </div>
  )
}
