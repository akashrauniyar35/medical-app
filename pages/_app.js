import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <Navbar/>
  <Sidebar/></>

}

export default MyApp
