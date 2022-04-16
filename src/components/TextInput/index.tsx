import React from "react";
import styles from "./styles.module.css";

interface P {
  value: string | number;
  onChange: (v: string | number) => void;
  placeholder?: string;
  type?: "text" | "number";
  max?: number;
  min?: number;
  maxLength?: number;
}

const TextInput: React.FC<P> = ({
  value,
  onChange,
  type = "text",
  max,
  min,
  placeholder,
  maxLength
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
      maxLength={maxLength}
    />
  );
};

export default TextInput;
