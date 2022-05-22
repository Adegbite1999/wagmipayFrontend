function InputModal({ children, onClose }) {
    return (
      <div onClick={onClose} className="backdrop-blur-xl top-12 fixed w-full right-4 h-screen ">
        <div>{children}</div>
      </div>
    );
  }
  
  export default InputModal;