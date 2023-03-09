import Head from 'next/head'
import Image from 'next/image'
import { Roboto_Flex } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Home from '@/templates/home'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  )
}
