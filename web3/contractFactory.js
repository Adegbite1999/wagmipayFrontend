import factory from './abis/merkleSalaryFactory.json'
import {Contract} from "ethers"

export const getMerkleContract = (address,signerOrProvider) =>{
    return new Contract(address,factory,signerOrProvider)
}