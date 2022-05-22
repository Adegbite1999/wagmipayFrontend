import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { getSalaryContract } from "../contractFactory";
import { getRpcUrl } from "../rpc_url";


const useSalaryMerkle = () => {
    const { active, library, account } = useWeb3React();
    let signer = useRef();
    let provider = useRef();
    let merkleSalary = useRef();

    useEffect(() => {
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(getRpcUrl());
        }
        // eslint-disable-next-line
    }, [active]);
    const init = useCallback((merkleAddress) => {
        merkleSalary.current = getSalaryContract(
            merkleAddress,
            signer.current || provider.current
        );
    }, []);
    const getMerkleData = useCallback(
        async (merkleAddress) => {
            init(merkleAddress);
            try {
                const merkleDetails = await merkleSalary.current.contractDetails();
                return merkleDetails;
            } catch (err) {
                console.error(err);
            }
        },
        [init, getSalaryContract]
    );


    return {
getMerkleData
    };
};

export default useSalaryMerkle;
