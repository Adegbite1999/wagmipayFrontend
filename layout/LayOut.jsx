import React from 'react'
import SideBar from '../components/sideBar';
import WalletConnect from '../components/walletConnect';
import styles from './layout.module.css'

function LayOut({children}) {
  return (
    <section>
      {/* <SideBar/> */}
      <WalletConnect/>
      <main>
      {children}
      </main>
      </section>
        
      )
}

export default LayOut