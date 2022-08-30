import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/State/Contexts/ScrollContext'
import { WidthObserver } from '../components/State/Contexts/WidthContext'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <WidthObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </WidthObserver>
  ) 
}

export default MyApp
