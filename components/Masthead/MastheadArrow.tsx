import React from 'react'
import { Masthead } from './Masthead'

export const MastheadArrow: React.FC = () => {
  function handleClick(){
    if (typeof window !== 'undefined') {
      const projects = document.getElementById('projects')
      projects?.scrollIntoView({ behavior: 'smooth' })  
    } else {
      console.log('You are on the server')
    }
    
  }
  
  return (
    <div onClick={handleClick} className="material-symbols-outlined w-fit absolute text-5xl bottom-5 left-[50%] -translate-x-[50%] text-white cursor-pointer">
      expand_more
    </div>
  )
}