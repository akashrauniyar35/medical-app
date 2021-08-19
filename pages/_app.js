import '../styles/globals.css'
import Sidebar from '../components/Sidebar'


function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <Sidebar/></>

}

export default MyApp
