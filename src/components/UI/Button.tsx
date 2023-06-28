import { ReactNode, MouseEventHandler, useState } from "react";
import '../../assets/styles/button.css'

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
    const [buttonClass, setButtonClass] = useState(variant)

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
