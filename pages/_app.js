import '../styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import { ToastProvider } from 'react-toast-notifications';




function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}



function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider newestOnTop={true} autoDismiss={true}>
  <Web3ReactProvider getLibrary={getLibrary}>
  <Component {...pageProps} />
  </Web3ReactProvider>
  </ToastProvider>
  )
}

export default MyApp
