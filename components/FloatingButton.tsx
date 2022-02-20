type Props = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const FloatingButton = ({ children, className = "", onClick }: Props) => {
  return (
    <button
      className={`fixed bottom-20 right-5 bg-orange-400 rounded-full p-4 text-white border-transparent shadow-xl
  hover:bg-orange-500 cursor-pointer transition-colors ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
