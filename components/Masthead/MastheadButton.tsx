import React, { useCallback } from 'react'
import NavHelper from '../../helpers/NavHelper';

interface Props {
  title: string,
  navLink: string,
  isScrollTo?: boolean
}

export const MastheadButton: React.FC<Props> = ({ title, navLink, isScrollTo = false }) => {
  const handleSelect = useCallback(()=>{
    NavHelper(navLink, isScrollTo)
  }, []);


  return (
    <nav className='h-30 w-fit mx-1 md:ml-0 md:mr-4 p-1 pl-0 cursor-pointer' onClick={()=>handleSelect()}>
      <p>{title}</p>
    </nav>
  )
}
