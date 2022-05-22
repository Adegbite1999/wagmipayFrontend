import React,{useRef,useEffect} from 'react';
import { useRouter } from 'next/router';
import LayOut from "../../layout/LayOut"
import useMerkleFactory, {} from "../../web3/hooks/useMerkleFactory";
import {useToasts} from "react-toast-notifications";
import useSalaryMerkle from '../../web3/hooks/useSalaryMerkle';
import { useWeb3React } from '@web3-react/core';
function Register() {
  const router = useRouter()
  const {account} = useWeb3React()
  const {addToast} = useToasts()
  const inputRef = useRef()
  const {createOrg,data} = useMerkleFactory()
  const handleOrgHandler = async() =>{
    const inputfieldRef = inputRef.current.value
await createOrg(inputfieldRef, async(res) => {
  if(!res.hash) 
  return addToast(res.message, {appearance: "error"});
   await res.wait()
   addToast("Payroll created successfully!", {appearance: "success"});
  inputRef.current.value = "";
  router.push(`/admin/${account}`)
}).catch((err) =>{
  return addToast("something went wrong!", {appearance: "error"});
})
  }

  return (
    <LayOut>
    <section className='container translate-x-6  translate-y-44'>
      <div className="bg-[#1389CB] p-4 rounded-lg grid justify-center p-8 w-2/3 mx-auto">
        <p className='text-center text-white mb-4 font-montserrat font-medium'>Company Name</p>
        <label htmlFor='create payroll'></label>
        <div>
        <input ref={inputRef} className="w-full p-2 outline-none border-4 text-align" id='payroll' type="text"/>
        </div>
        <div className='flex justify-center'>
        <button onClick={handleOrgHandler} className='mt-4 p-1 text-white border-2'>Create Payroll</button>
        </div>
      </div>
      
    </section>
    </LayOut>
  )
}

export default Register