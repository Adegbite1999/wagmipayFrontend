export const RPC_URL = {
    // 137: `https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_MORALIS_KEY}/polygon/mainnet/archive`,
    80001: `https://speedy-nodes-nyc.moralis.io/${process.env.NEXT_APP_MORALIS_KEY}/polygon/mumbai/archive`,
    1337: "http://localhost:8545",
};

export const getRpcUrl = () => {
    const env = process.env.NEXT_APP_ENV;
    switch (env) {
        case "testnet":
            return RPC_URL[80001];
        default:
            return RPC_URL[137];
    }
};