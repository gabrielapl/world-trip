import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'

import '../styles/global.css'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
  
}

export default MyApp
