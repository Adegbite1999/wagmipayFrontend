import React from "react";

function WalletModal({ children, onClose }) {
  return (
    <div onClick={onClose} className="backdrop-blur-xl top-12 fixed w-2/3 right-4 h-48 ">
      <div>{children}</div>
    </div>
  );
}

export default WalletModal;
