import React from "react";
import styles from "./styles.module.css";

interface P {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

const Button: React.FC<P> = ({ children, onClick, className }) => {
  return (
    <button type="button" className={`${styles.component} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
