import React, { useCallback } from 'react'

interface Props {
  title: string,
  navLink: string,
  scrollTo?: boolean
}

export const MastheadButton: React.FC<Props> = ({ title, navLink, scrollTo }) => {
  const handleSelect = useCallback(()=>{
    if(scrollTo === true){
      const element = document.getElementById(navLink)
      return element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      return window.open(navLink, '_blank')
    }
  }, []);


  return (
    <nav className='h-30 w-fit mr-4 p-1 pl-0 cursor-pointer' onClick={()=>handleSelect()}>
      <p>{title}</p>
    </nav>
  )
}
