import React, { useContext, useEffect, useRef } from 'react'
import NavHelper from '../../helpers/NavHelper'
import { ScrollContext } from '../State/Contexts/ScrollContext'
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
    transform: `translateY(${progress*80}vh)`,
  }
  return (
    <section style={parallaxScroll} ref={containerRef} className='min-h-screen w-full max-w-screen-lg md:w-2/3 md:mx-auto flex relative justify-center sticky -z-index-11'>
      <MastheadButtonsContainer>
        <MastheadButton title={'Projects'} navLink={'projects'} isScrollTo={true} />
        <MastheadButton title={'Contact'} navLink={'contact'} isScrollTo={true} />
        <MastheadButton title={'Github'} navLink={'https://github.com/PaxtonSchmidt'} />
        <MastheadButton title={'Resume'} navLink={'asdasdasd'} />
        <MastheadButton title={'LinkedIn'} navLink={'https://linkedin.com/in/paxtonschmidt/'} isScrollTo={false}/>
      </MastheadButtonsContainer>

      <header className='my-auto font-serif font-bold w-full text-center md:text-left text-white'>
        <h2 className='md:text-xl tracking-wider'>HI, I'M</h2>
        <h1 className='text-7xl tracking-tighter font-sans -translate-x-1'>Paxton<span className='text-7xl'>.</span></h1>
        <h2 className='md:text-lg text-lightBlue tracking-widest'>FULL-STACK DEVELOPER</h2>
        <div className='flex mt-2'>
          <button 
            className='bg-white py-1 px-4 font-light text-lightBlue rounded-3xl drop-shadow' 
            onClick={()=>{
              NavHelper('contact', true)
            }}>
              Hire Me
          </button>
        </div>
      </header>

      <MastheadArrow />
    </section>
  )
}

