import React, { useContext, useEffect, useRef } from 'react'
import { ScrollContext } from '../Contexts/ScrollContext'
import { MastheadArrow } from './MastheadArrow'
import { MastheadButton } from './MastheadButton'
import { MastheadButtonsContainer } from './MastheadButtonContainer'

export const Masthead: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext)

  let progress: number = 0

  const { current: elContainer } = containerRef
  if(elContainer){
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  
  const parallaxScroll = {  
    transform: `translateY(${progress*50}vh)`,
  }
  return (
    <section style={parallaxScroll} ref={containerRef} className='min-h-screen w-full md:w-2/3 md:mx-auto flex relative justify-center sticky -z-index-1'>

      <header className='my-auto font-serif font-bold w-full text-center md:text-left text-white'>
        <h1 className='md:text-xl tracking-wider'>HI, I'M</h1>
        <h1 className='text-7xl md:text-8xl tracking-tighter font-sans -translate-x-1'>Paxton<span className='text-7xl'>.</span></h1>
        <h1 className='md:text-lg text-lightBlue tracking-widest'>FULL-STACK DEVELOPER</h1>
        <MastheadButtonsContainer>
          <MastheadButton title={'Projects'} navLink={'asdasdasd'} />
          <MastheadButton title={'Contact'} navLink={'asdasdasd'} />
        </MastheadButtonsContainer>
      </header>

      <MastheadArrow />
    </section>
  )
}

