import Head from 'next/head'
import { Roboto_Flex } from 'next/font/google'

import { ReactNode } from 'react'
import Header from '@/components/Header';

interface IProps {
  children: ReactNode;
  title: string;
}

const roboto = Roboto_Flex({ subsets: ['latin'] })

const Default = ({ children, title }: IProps) => {
  return (
    <div className={roboto.className}>
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={roboto.className}>
        { children }
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Default