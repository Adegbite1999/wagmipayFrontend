import { RPC_URL } from './rpc_url';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { InjectedConnector } from "@web3-react/injected-connector";
export const pollingInterval = 12000;

const  walletConnect = new WalletConnectConnector({supportedChainIds: [80001 ],
    qrcode: true,
    pollingInterval: pollingInterval,
})


const coinbaseConnect = new WalletLinkConnector({
    appName: "payroll",
    supportedChainIds: [80001],
   });
   
  export const injected = new InjectedConnector({
    supportedChainIds: [80001],
   });



export const connector = {
    walletconnect:walletConnect,
    coinbase:coinbaseConnect,
    metamask:injected
}