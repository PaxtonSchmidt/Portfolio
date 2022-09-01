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
    <nav className='h-30 w-full md:w-fit md:mr-4 text-center md:text-left cursor-pointer' onClick={()=>handleSelect()}>
      <p>{title}</p>
    </nav>
  )
}
