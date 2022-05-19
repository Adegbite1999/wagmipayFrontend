import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { merkleFactoryAddress } from "../constants";
import {getMerkleContract} from '../contractFactory';
import { getRpcUrl, getChainID } from "../helper";



const useMerkleFactory = () =>{
    const {active, library,chainId} = useWeb3React()
    let  signer = useRef()
    let provider = useRef()
    let merkleFactory = useRef()

    useEffect(() =>{
        if(active){
            signer.current = library.getSigner()
        }else{
            provider.current = new ethers.providers.JsonRpcProvider(getRpcUrl())
        }
        merkleFactory.current = getMerkleContract(
        merkleFactoryAddress, signer.current || provider.current
        )
    })

    const createOrg = useCallback( async() =>{
        if(!active)throw new Error("you are not connected")
        if(!merkleFactory.current)return;
        try {
            merkleFactory.current.createPayroll()
            .then(callback)
            .catch(callback)
        } catch (error) {
            throw new Error ("something went wrong")
        }
    },[active])
return {createOrg}
    
}
export default useMerkleFactory;