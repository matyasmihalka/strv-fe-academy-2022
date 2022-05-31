import '~/features/ui/theme/globals.css'
import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadDefault />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
