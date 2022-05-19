import React, { useState } from "react";
import Link from "next/link";
import { MerkleTree } from "merkletreejs";
// import K  from "keccak256";
// import SHA256 from 'crypto-js/sha256'
import Keccak256 from "keccak256";

function Main() {
  const [merkle, setMerkle] = useState([]);


  const whitelistAddresses = [
  {
    address:"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    amount :"2000000000000000000",
  },

  {
    address:"0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
    amount:"2000000000000000000"}
]

  console.log(merkle);
  const merkleGeneratorHandler = () => {
    const leaves = Object.keys( whitelistAddresses).map(addr => Keccak256(addr));
    const tree = new MerkleTree(leaves, Keccak256, {  sortLeaves: true,sortPairs: true});
    const buf2Hex = x => '0x' + x.toString('hex')
    const root = buf2Hex(tree.getRoot());
    // const leaf = buf2Hex(Keccak256(whitelistAddresses[3]))
    // const proof = tree.getProof(leaf).map(x => buf2Hex(x.data))
    setMerkle(root)
  };
  return (
    <main>
      <section className="grid grid-cols-2 items-center">
        <div>
          <h2 className="text-white font-montserrat font-bold text-4xl leading-2	">
            Your On- Demand Payroll Streaming Service Protocol
          </h2>
          <button onClick={merkleGeneratorHandler}>Generate merkle</button>
          <p className="text-white font-montserrat font-medium">
            Reduce the hassles associated with workers payment to have more time
            to do what to your love.
          </p>
          <div className="mt-4">
            <button className="bg-[#23A6F0] text-white rounded-full px-6 py-2 mr-4">
              Get started
            </button>
            <Link href="#">
              <button className="rounded-full text-white px-6 py-2 border-2">
                Launch App
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src="/assets/payroll.svg" alt="mockup" />
        </div>
      </section>
      {/* strategies */}
      <section className="mt-24">
        <h3 className="text-white font-montserrat font-semibold text-2xl">
          Better Strategies
        </h3>
        <p className="text-white font-montserrat font-normal">
          Automate your paymennt processes to
        </p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">
                  Transparent
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">
                  Time Saving
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">Secured</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">
                  Saving time and money
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">Scalable</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div>
              <div className="flex items-center">
                <img src="/assets/circle.svg" alt="icon" />
                <p className="font-montserrat text-gray-400 ml-4">
                  Decentralized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get in touch */}
      <section className="grid grid-cols-2 mt-32 items-center ">
        <div>
          <h3 className="capitalize text-white font-semibold font-montserrat">
            Get in touch
          </h3>
          <p className="text-white  font-montserrat">
            The gradual accumulation of information about atomic and small-scale
            behaviour during the first quarter of the 20th{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center relative">
            <input
              placeholder="Your email"
              className="w-2/3  mx-auto p-2"
              type="text"
            />
            <button className="absolute text-white bg-[#23A6F0] text-white outline-none p-2 right-14">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
