import Button from "components/Button";
import React, { useRef } from "react";
import styles from "./styles.module.css";

interface P {
  onChange: (file: File) => void;
}

const FileInput: React.FC<P> = ({ onChange }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    onChange(files[0]);
  };
  return (
    <>
      <input
        hidden
        ref={ref}
        className={styles.component}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <Button onClick={() => ref.current?.click()}>Upload Image</Button>
    </>
  );
};

export default FileInput;
