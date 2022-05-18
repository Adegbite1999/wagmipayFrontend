import React, { useState,useEffect } from "react";
import { header } from "../static/data";
import WalletModal from "./modal";



import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import Connected from "./connected";






function WalletConnect() {
  const [show, setShow] = useState(false);
  const walletHandler = () => {
    setShow(!show);
  };


  const  walletConnect = new WalletConnectConnector({supportedChainIds: [1,3, 4, 5, 42, ],})
  const  coinbaseConnect = new WalletLinkConnector({supportedChainIds: [1, 3, 4, 5, 42 ],})

  const { chainId, account, activate, active,library } = useWeb3React()
  console.log(account)
  console.log(active);

  
  const WalletConnect = () => {
    activate(walletConnect)
  }

  const CoinBaseConnect = () => {
    activate(coinbaseConnect)
  }

  return (
    <div className="bg-white h-12 flex justify-evenly p-4">
      <div className="flex">
        {header.map((item, idx) => {
          return (
            <li key={idx} className="list-none mr-8">
              <a href={item.link}>{item.value}</a>
            </li>
          );
        })}
      </div>

      <div>
        {!active?    <button
          onClick={walletHandler}
          className="text-white bg-[#23A6F0] text-white rounded-lg px-6 "
        >
          Connect wallet
        </button> : <Connected/> }
     
        {show && (
          <WalletModal onClose={walletHandler}>
            <div className="p-6 flex justify-between">
              <div>
              <button onClick={WalletConnect}>
                <div className="mr-6 flex flex-col items-center">
                  <span>
                    <svg
                      viewBox="0 0 40 40"
                      width={"40px"}
                      color="text"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z"
                        fill="#3389FB"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-white font-medium">Wallet Connect</p>
                </div>
              </button>
              </div>
              <div>
              <button onClick={CoinBaseConnect}>
                <div className="mr-6 flex flex-col items-center">
                  <span>
                    <svg
                      width="40px"
                      viewBox="0 0 1024 1024"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="1024"
                        height="1024"
                        rx="512"
                        fill="#0052FF"
                      />
                      <path
                        d="M512.147 692C412.697 692 332.146 611.45 332.146 512C332.146 412.55 412.697 332 512.147 332C601.247 332 675.197 396.95 689.447 482H870.797C855.497 297.2 700.846 152 512.147 152C313.396 152 152.146 313.25 152.146 512C152.146 710.75 313.396 872 512.147 872C700.846 872 855.497 726.8 870.797 542H689.297C675.047 627.05 601.247 692 512.147 692Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="text-white capitalize font-medium">Coinbase</p>
                </div>
              </button>
              </div>
            </div>
          </WalletModal>
        )}
      </div>
    </div>
  );
}

export default WalletConnect;
