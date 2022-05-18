import React from 'react'
import classes from './Connected.module.css';
import { utils } from 'ethers';
import { addressShortner } from '../utils/helper';
import { useWeb3React } from '@web3-react/core'

// const { chainId, account, activate, active,library } = useWeb3React()



const Connected = () => {
    const { chainId, account, activate, active, deactivate,library } = useWeb3React()

  return (
      <div className='flex justify-between mr-8'>
    <div className= {classes.root}>
        {/* <div className= {classes.token_bal}>{Number(utils.formatUnits(token_balance, 18)).toFixed(4)} BRT</div> */}
        {/* <div className= {classes.matic_bal}>{Number(utils.formatUnits(eth_balance, 18)).toFixed(4)} ETH</div> */}
        <div className= {classes.address}>{addressShortner(account, true)}</div>
    </div>
        <div>
            <button className='text-white bg-[#23A6F0] px-4 rounded-lg' onClick={() => deactivate()}>Deactivate</button>
        </div>
    </div>
  )
}

export default Connected