import { RPC_URL } from './rpc_url';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
export const pollingInterval = 12000;

const  walletConnect = new WalletConnectConnector({supportedChainIds: [80001 ],
    qrcode: true,
    pollingInterval: pollingInterval,
})
// const  coinbaseConnect = new WalletLinkConnector({
//     supportedChainIds: [80001],
//     url:`https://speedy-nodes-nyc.moralis.io/${process.env.NEXT_APP_MORALIS_KEY}/polygon/mumbai/archive`,
//     appName:"payroll"

// })

const coinbaseConnect = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/036f4d121e1d46a6932f189caaaf2bed`,
    appName: "payroll",
    supportedChainIds: [1, 3, 4, 5, 42],
   });
   



export const connector = {
    walletconnect:walletConnect,
    coinbase:coinbaseConnect
}