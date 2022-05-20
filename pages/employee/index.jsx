import React from "react";
import LayOut from "../../layout/LayOut";
import SideBar from "../../components/sideBar";
import styles from "./employee.module.css"
function Employee() {
  return (
    <LayOut>
      <section className="flex">
        <SideBar />
        <main className={styles.main}>
          <section className=" py-6 px-6">
            <div className="flex justify-between">
              <h2 className="text-white font-bold text-2xl font-montserat">
                Welcome
              </h2>
              <h2 className="text-white font-medium font-montserat">
                Receive Payment from Web3Bridge
              </h2>
            </div>

            <div className="flex justify-center">
              <img src="/assets/card.svg" alt="card_svg" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium font-montserrat text-2xl">
                  Transactions
                </h3>
              </div>
              <div>
                <button className="text-white bg-[#23A6F0] px-12 py-2  text-white rounded-lg">
                  Claim
                </button>
              </div>
            </div>
            <table className="table-auto w-full text-center text-white mt-6 border-separate border border-slate-400">
              <thead>
                <tr>
                  <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>
                    Month
                  </th>
                  <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>
                    Status
                  </th>
                  <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>
                    Payment date
                  </th>
                  <th className='border-separate border border-slate-400 className="border-separate border border-slate-400"'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-separate border border-slate-400">
                    January
                  </td>
                  <td className="border-separate border border-slate-400">
                    Done
                  </td>
                  <td className="border-separate border border-slate-400">
                    Jan 27,2022
                  </td>
                  <td className="border-separate border border-slate-400">
                    $500.22
                  </td>
                </tr>
                <tr>
                  <td className="border-separate border border-slate-400">
                    0x99384......789
                  </td>
                  <td className="border-separate border border-slate-400">
                    pending
                  </td>
                  <td className="border-separate border border-slate-400">
                    Jan 27,2022
                  </td>
                  <td className="border-separate border border-slate-400">
                    $500.22
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </section>
    </LayOut>
  );
}

export default Employee;
