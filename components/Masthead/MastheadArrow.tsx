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
    <span onClick={handleClick} className="material-symbols-outlined absolute text-5xl bottom-5 text-white cursor-pointer">
      expand_more
    </span>
  )
}