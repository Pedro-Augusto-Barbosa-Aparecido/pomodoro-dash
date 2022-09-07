import type { NextPage } from 'next'
import Head from 'next/head'
import { Echart } from '../components/Chart'

const Home: NextPage = () => {
  return (
    <div>
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
