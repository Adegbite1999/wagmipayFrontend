import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from './landing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wagmi PayRoll Dapp</title>
        <meta name="description" content="Wagmi PayRoll Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Landing/>
    </div>
  )


  /*
  
  1. convert csv file to json
  2.generate merkle root
  3.start integration
  
  */
}
