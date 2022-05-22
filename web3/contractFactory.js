import factory from './abis/merkleSalaryFactory.json'
import {Contract} from "ethers";
import salary from "./abis/merkleSalary.json"

export const getMerkleContract = (address,signerOrProvider) =>{
    return new Contract(address,factory,signerOrProvider)
}

export const getSalaryContract = (address,signerOrProvider) =>{
    return new Contract(address,salary,signerOrProvider)
}