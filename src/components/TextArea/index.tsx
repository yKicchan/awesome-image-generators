import styles from "./styles.module.css";

interface P {
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<P> = ({ value, onChange }) => {
  return (
    <textarea
      className={styles.component}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={5}
    ></textarea>
  );
};

export default TextArea;
