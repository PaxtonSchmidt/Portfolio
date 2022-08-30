import React from 'react';
import NavHelper from '../../helpers/NavHelper';

export const Footer: React.FC = () => {
  
  return (
    <footer className='h-fit mt-16 w-full flex text-white font-serif'>
      <div className='flex row w-full justify-around my-auto text-sm mx-auto max-w-[600px]'>
        <button onClick={()=>NavHelper('projects', true)} className='w-[80px] opacity-50'>
          <p className='mt-auto'>Projects</p>
        </button>
        <button onClick={()=>NavHelper('https://github.com/PaxtonSchmidt', false)} className='w-[80px] opacity-50'>
          <p className='mt-auto'>Github</p>
        </button>
        <button onClick={()=>NavHelper('https://www.linkedin.com/in/paxtonschmidt/', false)} className='w-[80px] opacity-50'>
          <p className='mt-auto'>LinkedIn</p>
        </button>
        <button onClick={()=>NavHelper('https://github.com/PaxtonSchmidt', false)} className='w-[80px] opacity-50'>
          <p className='mt-auto'>Resume</p>
        </button>
      </div>
    </footer>
  )
}