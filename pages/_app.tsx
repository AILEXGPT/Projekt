// pages/_app.tsx

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import 'styles/globals.css' // Hier wurde das Semikolon entfernt;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
