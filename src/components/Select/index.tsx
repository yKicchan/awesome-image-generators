import styles from './styles.module.css'

export interface Option {
  label: string;
  value: string;
}

interface P {
  options: Option[];
}

const Select: React.FC<P> = ({ options }) => {
  return (
    <select className={styles.component}>
      {options.map(o => (
        <option value={o.value}>{o.label}</option>
      ))}
    </select>
  )
};

export default Select;
