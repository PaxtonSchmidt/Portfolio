import type { NextPage } from 'next'
import Head from 'next/head'
import { Masthead } from '../components/Masthead/Masthead'
import { Projects } from '../components/Projects/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paxton Schmidt</title>
        <meta name="description" content="A portfolio of web development works by Paxton Schmidt" />
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75,517;100,300;100,400;100,500;100,600;100,700&family=IM+Fell+DW+Pica&family=Montserrat:wght@800&display=swap')</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@75,517;100,300;100,400;100,500;100,600;100,700&family=IM+Fell+DW+Pica&family=Lato&display=swap')</style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

      <main className='overflowY-scroll scroll-smooth bg-black'>
        <Masthead />
        <Projects />
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className='text-black'>
          Get started by editing{' '}
          <code>pages/index.tsx</code>
        </p>

        
      </main>
    </>
  )
}

export default Home
