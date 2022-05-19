import { RPC_URL } from "./rpc_url";
export const getRpcUrl = () => {
    const env = process.env.NEXT_APP_ENV;
    switch (env) {
        case "testnet":
            return RPC_URL[80001];
        default:
            return RPC_URL[137];
    }
};

export const getChainID = () => {
    const env = process.env.NEXT_APP_ENV;
    switch (env) {
        case "testnet":
            return 80001;
        default:
            return 137;
    }
};