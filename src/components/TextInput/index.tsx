import React from "react";
import styles from "./styles.module.css";

interface P {
  value: string | number;
  onChange: (v: string | number) => void;
  placeholder?: string;
  type?: "text" | "number";
  max?: number;
  min?: number;
}

const TextInput: React.FC<P> = ({
  value,
  onChange,
  type = "text",
  max,
  min,
  placeholder,
}) => {
  return (
    <input
      className={styles.component}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      max={max}
      min={min}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
