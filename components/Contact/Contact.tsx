import React from 'react'
import { ContactForm } from './ContactForm'

export const Contact: React.FC = () => (
  <section id='contact' className='w-full text-white pt-48 pb-16 min-h-screen bg-black'>
    <header className='w-full flex justify-center mb-16'>
      <h1 className='text-4xl'>Contact</h1>
    </header>
    <div className='w-full flex justify-center'>
      <ContactForm />
    </div>
  </section>
)