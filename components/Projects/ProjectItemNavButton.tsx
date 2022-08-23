import React, { ReactNode } from 'react'

interface Props {
  text: string,
  link: any,
  children: ReactNode
}

export const ProjectItemNavButton: React.FC<Props> = ({ text, link, children }) => (
  <button className='flex font-bold font-serif mr-2'>
    <a href={link} target='_blank' rel='noopener noreferrer' className='flex text-lightBlue'>
      {children}{`\u00a0`}{text}
    </a>
  </button>
)