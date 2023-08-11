import React, { useState } from "react";
import Blockies from "react-blockies";
import { BiPlus } from "react-icons/bi";
import { useAccount } from "wagmi";
import PageHOC from "~~/components/superhack/PageHOC";
import ConfirmWalletModal from "~~/components/superhack/modals/ConfirmWalletModal";

const Dashboard = () => {
  const { address } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const displayAddress = address?.slice(0, 5) + "..." + address?.slice(-4);
  return (
    <div className="dashboard__container mt-10">
      <div className=" dashboard__container-content ">
        <div className="bg-super-dark p-8 min-h-[246px] rounded">
          <p className="text-xl">Accout 1</p>
          <div className="mt-8 px-3">
            <div className="grid grid-flow-col justify-start gap-4 mb-6">
              <div>
                <Blockies
                  className="mx-auto rounded-xl"
                  size={18}
                  seed={address ? address.toLowerCase() : "0x0000000000"}
                  scale={3}
                />
              </div>
              <div className="grid justify-between">
                <p>Address</p>
                {address ? (
                  <p className="text-[2.2 rem]">{displayAddress}</p>
                ) : (
                  <p className="text-[2.2 rem]">0x000..000</p>
                )}
              </div>
            </div>
            <div className="grid gap-2 items-center justify-between grid-flow-col">
              <div>
                <p>Balance</p>
                <p className="text-[2.2rem] ">$0.00</p>
              </div>
              <div>
                <p>Token Balance</p>
                <p className="text-[2.2rem] ">--</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="bg-super-dark p-8 grid min-h-[256px] cursor-pointer rounded justify-center items-center "
        >
          <div className=" grid gap-3">
            <p className="grid justify-center ">
              {" "}
              <BiPlus size={35} />
            </p>
            <p className="text-xl">Create Wallet</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-8 rounded bg-super-dark ">
          <div className="grid sm:grid-cols-2 ">
            <div className="text-center py-8 border-b-[3px] border-super-gradient">
              <p className="text-[1.2rem] md:text-[1.8rem]">My Tokens</p>
            </div>
            <div className="text-center py-8 border-b-[3px] border-gray-600">
              <p className="md:text-[1.8rem]">All Tokens</p>
            </div>
          </div>
          <div className="grid justify-center  items-center min-h-[485px]">
            <div className="grid gap-8 text-center justify-center">
              <p className="text-[1.2rem] md:text-[1.8rem]">You don’t have any funds on this account</p>
              <button className="px-12 py-5 border-[1px] border-super-gradient rounded-2xl bg-black w-fit mx-auto">
                {" "}
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ConfirmWalletModal
          onClose={() => setIsOpen(false)}
          message="Confirm adding"
          details="You are about to add an nft to be a wallet"
        />
      )}
    </div>
  );
};

export default PageHOC(Dashboard);
