import React from 'react'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'

export const Contact: React.FC = () => (
  <section id='contact' className='w-full text-white pt-24 min-h-screen bg-black'>
    <header className='w-full flex justify-center mb-16'>
      <h1 className='text-4xl'>Contact</h1>
    </header>
    <div className='w-full flex justify-center'>
      <ContactForm />
    </div>
    <Footer />
  </section>
)