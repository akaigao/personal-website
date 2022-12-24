import Head from 'next/head'
import Image from 'next/image'
import myLogo from '../../public/akaigao.svg'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Navbar } from '../Navbar'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>akaigão</title>
      </Head>

      <Header>
        <Image src={myLogo} alt="My Logo" width={300} />
        <Navbar />
      </Header>

      <main>{children}</main>

      <Footer />
    </>
  )
}
