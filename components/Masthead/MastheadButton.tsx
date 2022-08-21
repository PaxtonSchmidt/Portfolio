import React from 'react'

interface Props {
  title: string,
  navLink: any
}

export const MastheadButton: React.FC<Props> = ({ title, navLink }) => (
  <nav className='h-30 w-fit mr-2 p-1 pl-0 cursor-pointer'>
    <p >{title}</p>
  </nav>
)