import React from "react";

function WalletModal({ children, onClose }) {
  return (
    <div onClick={onClose} className="backdrop-blur-xl fixed w-1/3 right-4 h-48 ">
      <div>{children}</div>
    </div>
  );
}

export default WalletModal;
