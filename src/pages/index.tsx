import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Echart } from '../components/Chart'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro Dashboard</title>
        <meta name="description" content="Created to see data of pomodoro app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Echart />
    </div>
  )
}

export default Home
