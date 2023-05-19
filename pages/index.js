import Head from 'next/head'
import Main from '@/components/Main'

export default function Home() {
  return (
    <>
    <Head>
        <title>दैलेखी सेवा समाज</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </>
  )
}
