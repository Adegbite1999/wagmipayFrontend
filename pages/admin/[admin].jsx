import { useWeb3React } from '@web3-react/core'
import React,{useState} from 'react'
import LayOut from "../../layout/LayOut"
import SideBar from '../../components/sideBar'
import styles from "./admin.module.css"
import InputModal from '../../components/inputModal'
// import useMerkleFactory from '../../web3/hooks/useMerkleFactory'
function Admin() {
  // const{createOrg} = useMerkleFactory()
const [show, setShow] =  useState(false)
const showHandler = () =>{
  setShow(!show)
}
  return (
    <LayOut>
         <section className='flex'>
      <SideBar/>
      <main className={styles.main}>
      <section className=' py-6 px-6'>
      <div className='flex justify-between'>
        <h2 className='text-white font-bold text-2xl font-montserat'>Welcome</h2>
        <h2 className='text-white font-medium font-montserat'>Web3Bridge</h2>
      </div>

      <div className='flex justify-center'>
        <img src="/assets/card.svg" alt="card_svg"  />
      </div>

      <div className='flex justify-end'>
        <div>
          <button  onClick={showHandler}  className='text-white border-2 pl-2 pr-2  mr-4 text-white rounded-lg'>Add Employee</button>
          <button className='text-white bg-[#23A6F0] pr-2 pl-2  text-white rounded-lg'>Approve Payment</button>
          {show &&           <InputModal>
          <div className='w-full flex justify-center translate-y-48'>
            <div>
              <input
              type="file"
              classname="w-full"
              />
            </div>
            <button className='text-white bg-[#23A6F0] pr-2 pl-2 rounded-lg' onClick={showHandler}>Update Employee Payroll</button>
          </div>
          </InputModal> }

        </div>
      </div>
      <table className="table-auto w-full text-center text-white mt-6 border-separate border border-slate-400">
  <thead>
    <tr>
      <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>Address</th>
      <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>Amount Paid</th>
      <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>Payment Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border-separate border border-slate-400">0x99384......789</td>
      <td className="border-separate border border-slate-400">$500.22</td>
      <td className="border-separate border border-slate-400">Jan 27,2022</td>
    </tr>
    <tr>
    <td className="border-separate border border-slate-400">0x99384......789</td>
      <td className="border-separate border border-slate-400">$500.22</td>
      <td className="border-separate border border-slate-400">Jan 27,2022</td>
    </tr>
    <tr>
    <td className='border-seperate border border-slate-400'>0x99384......789</td>
      <td className='border-seperate border border-slate-400'>$500.22</td>
      <td className='border-seperate border border-slate-400'>Jan 27,2022</td>
    </tr>
  </tbody>
</table>
      </section>
      </main>
      </section>
    </LayOut>
  )
}

export default Admin