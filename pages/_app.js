import '@/styles/globals.css'
import AlwaysInDisplay from '@/components/AlwaysInDisplay'
import NavBar from '@/components/NavBar'
import FooterSection from '@/components/FooterSection'

export default function App({ Component, pageProps }) {
  return <>
    {/* <AlwaysInDisplay/> */}
    <NavBar/>
    <Component {...pageProps}/> 
    <FooterSection/>
    </>
}
