
import Sidebar from '@/components/Sidebar/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <Sidebar>
       <Component {...pageProps} />
    </Sidebar>
  )
}
