import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { Echart } from '../components/Chart'
import { Modal } from '../components/Modal'
import { DashboardContext } from '../context/Dashboard'

const Home: NextPage = () => {
  const { isModalOpen } = useContext(DashboardContext);
  
  return (
    <div>
      <Head>
        <title>Pomodoro Dashboard</title>
        <meta name="description" content="Created to see data of pomodoro app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isModalOpen && <Modal />
      }
      <Echart />
    </div>
  )
}

export default Home
