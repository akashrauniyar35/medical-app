import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

import Login from '../components/Authentication/Login';


function MyApp({ Component, pageProps }) {
  return <>
    <Login />
    {/* <Component {...pageProps} />
    <Navbar />
    <Sidebar /> */}

  </>

}

export default MyApp
