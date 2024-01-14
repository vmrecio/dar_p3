const Modal = ({ open, children }) => {
  return <dialog open={open}>{children}</dialog>;
};

export default Modal;
