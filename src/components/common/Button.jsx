const Button = ({ children, onClick }) => {
  return (
    <button className="px-3 py-3 rounded-lg bg-blue-400 text-white" onClick={onClick}>{children}</button>
  );
};

export default Button;
