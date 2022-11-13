import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from 'react-bootstrap'

import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from '@web3uikit/core'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const layoutComponent = () => {
    return getLayout(<Component {...pageProps} />)
  }
  return (
    <SSRProvider>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          {layoutComponent()}
        </NotificationProvider>
      </MoralisProvider>
    </SSRProvider>
  )
}

export default MyApp
