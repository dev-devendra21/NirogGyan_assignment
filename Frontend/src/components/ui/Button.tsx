type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded cursor-pointer text-sm ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
