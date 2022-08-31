import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface Props{
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalBackground: React.FC<Props> = ({ setIsOpen }) => {
  useEffect(()=>{
    let documentWidth = document.documentElement.clientWidth
    let scrollBarWidth = window.innerWidth - documentWidth
    
    let el = document.getElementsByTagName('body')[0]
    el!.classList.add(`pr-[${scrollBarWidth}px]`)
    el!.classList.add(`overflow-y-hidden`)
    return ()=>{
      el!.classList.remove(`pr-[${scrollBarWidth}px]`)
      el!.classList.remove(`overflow-y-hidden`)
    }
  }, [])

  return (
  <div 
    onClick={()=>setIsOpen(false)} 
    className={`
    w-full 
    h-full 
    fixed 
    left-0 
    top-0 
    bg-black 
    opacity-80 
    overscroll-none
    z-30`}
  >
  </div>
  )
}
  