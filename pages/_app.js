import '@/styles/globals.css'
import Head from "next/head";
import "@/styles/LoadingSpinner.css";
import NavBar from '@/components/NavBar'
import FooterSection from '@/components/FooterSection'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <AlwaysInDisplay/> */}
      <Head>
        <title>दैलेखी सेवा समाज</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}
