import React,{useState} from 'react'
import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { merkleFactoryAddress } from "../constants";
import {getMerkleContract} from '../contractFactory';
import useSalaryMerkle from "./useSalaryMerkle";
import { getRpcUrl, RPC_URL } from '../rpc_url';




const useMerkleFactory = () =>{
    const [data, setData] = useState({})
    const {active, library,chainId,account} = useWeb3React()
    let  signer = useRef()
    let provider = useRef()
    let merkleFactory = useRef()
    const {getMerkleData} = useSalaryMerkle()


    useEffect(() =>{
        if(active){
            signer.current = library.getSigner()
        }else{
            provider.current = new ethers.providers.JsonRpcProvider(getRpcUrl())
        }
        merkleFactory.current = getMerkleContract(
        merkleFactoryAddress, signer.current || provider.current
        )
        const exec = async () => {
            const merkle = await merkleFactory.current.allPayrolls();
            console.log('contract address',merkle)
            const merkleDetails = await Promise.all(
                merkle.map((merkleAddress) => {
                    return getMerkleData(merkleAddress);
                })
                );
                const result = merkleDetails.map((item) =>{
                    return {
                        address: item.ContractAddress,
                        owner:item.owner,
                        bizname:item.bizName
                    }
                })
                setData(result)
        };

        exec();
    },[account, chainId])
    
    const createOrg = useCallback(async(text,callback) =>{
        if(!active)throw new Error("you are not connected")
        if(!merkleFactory.current)return;
        try {
            await merkleFactory.current.createPayroll(text,{
            })
            .then(callback)
            .catch(callback)
        } catch (error) {
            console.log("error: ", error);
            throw new Error ("something went wrong")
        }
    },[active])

    // const fetchAllPayroll = useCallback(async() =>{
    //     if(!active)throw new Error("you are not connected")

    //     try {
    //    const data =     await merkleFactory.current.allPayrolls()
    //    return data
    //     } catch (error) {
    //         console.log("error: ", error);
    //         throw new Error ("something went wrong")
    //     }
    // },[account])

return {createOrg,data}
    
}
export default useMerkleFactory;