export const RPC_URL = {
    // 137: `https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_MORALIS_KEY}/polygon/mainnet/archive`,
    // 3: `https://speedy-nodes-nyc.moralis.io/${process.env.NEXT_APP_MORALIS_KEY}/eth/ropsten`,
    80001:`https://speedy-nodes-nyc.moralis.io/${process.env.NEXT_PUBLIC_MORALIS_KEY}/polygon/mumbai/archive`,
    // 1337: "http://localhost:8545",
};

export const getRpcUrl = () => {

            return RPC_URL[80001];
};

