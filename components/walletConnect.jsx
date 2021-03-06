import React, { useState,useEffect } from "react";
import { header } from "../static/data";
import WalletModal from "./modal";
import { connector } from "../web3/walletConnect";
import { useWeb3React } from '@web3-react/core'
import Connected from "./connected";
import { useEagerConnect } from "../web3/walletHook";
import {getConnectionError} from "../web3/helper"
import {useToasts} from "react-toast-notifications"




function WalletConnect() {
  const [show, setShow] = useState(false);
  const walletHandler = () => {
    setShow(!show);
  };
useEagerConnect()
  const {account, activate, active,} = useWeb3React()
  const {addToast} = useToasts()

  
  const handleError = (err) => {
    const errorString = getConnectionError(err);
    addToast(errorString, { appearance: "error" });
}




  useEffect(() => {
    if (active) {
        addToast("Wallet connected", {
            appearance: "success",
        });
        // onClose();

    }
    // eslint-disable-next-line
}, [active]);

  const CoinBaseConnect = () => {
    // console.log(2345);
    activate(connector.coinbase,handleError)
  }

  const metamaskConnect = () => {
    // console.log(2345);
    activate(connector.metamask,handleError)
  }

  const WalletConnect = () => {
    activate(connector.walletconnect,handleError)
  }

  

  return (
    <div className="bg-white h-12 flex justify-evenly p-4">
      <div className="flex">
        {header.map((item, idx) => {
          return (
            <li key={idx} className="capitalize list-none mr-8">
              <a href={item.link}>{item.value}</a>
            </li>
          );
        })}
      </div>

      <div>
        {active? <Connected/> :
        
        <button
          onClick={walletHandler}
          className="text-white bg-[#23A6F0] text-white rounded-lg px-6 "
        >
          Connect wallet
        </button>
        }
     
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
              <div>
              <button onClick={metamaskConnect}>
                <div className="mr-6 flex flex-col items-center">
                  <span>
                  <svg
            viewBox="0 0 40 40"
            width={"40px"}
            color="text"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z"
                fill="#E17726"
            ></path>
            <path
                d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z"
                fill="#E27625"
            ></path>
            <path
                d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z"
                fill="#E27625"
            ></path>
            <path
                d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z"
                fill="#E27625"
            ></path>
            <path
                d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z"
                fill="#E27625"
            ></path>
            <path
                d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z"
                fill="#E27625"
            ></path>
            <path
                d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z"
                fill="#E27625"
            ></path>
            <path
                d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z"
                fill="#E27625"
            ></path>
            <path
                d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z"
                fill="#D5BFB2"
            ></path>
            <path
                d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z"
                fill="#D5BFB2"
            ></path>
            <path
                d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z"
                fill="#233447"
            ></path>
            <path
                d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z"
                fill="#233447"
            ></path>
            <path
                d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z"
                fill="#CC6228"
            ></path>
            <path
                d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z"
                fill="#CC6228"
            ></path>
            <path
                d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z"
                fill="#CC6228"
            ></path>
            <path
                d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z"
                fill="#CC6228"
            ></path>
            <path
                d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z"
                fill="#E27525"
            ></path>
            <path
                d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z"
                fill="#E27525"
            ></path>
            <path
                d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z"
                fill="#E27525"
            ></path>
            <path
                d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z"
                fill="#E27525"
            ></path>
            <path
                d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z"
                fill="#F5841F"
            ></path>
            <path
                d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z"
                fill="#F5841F"
            ></path>
            <path
                d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z"
                fill="#C0AC9D"
            ></path>
            <path
                d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z"
                fill="#161616"
            ></path>
            <path
                d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z"
                fill="#763E1A"
            ></path>
            <path
                d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z"
                fill="#763E1A"
            ></path>
            <path
                d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z"
                fill="#F5841F"
            ></path>
            <path
                d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z"
                fill="#F5841F"
            ></path>
            <path
                d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z"
                fill="#F5841F"
            ></path>
        </svg>
                  </span>
                  <p className="text-white capitalize font-medium">metamask</p>
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
