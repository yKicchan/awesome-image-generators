import styles from './styles.module.css';

interface P {
  options: Option[];
  value: Option['value'];
  onChange: (v: Option['value']) => void;
}

const Select: React.FC<P> = ({ options, value, onChange }) => {
  return (
    <div className={styles.container}>
    <select className={styles.component} value={value} onChange={e => onChange(e.target.value)} >
      {options.map((o) => (
        <option key={JSON.stringify(o.value)} value={o.value}>{o.label}</option>
      ))}
    </select>
    </div>
  );
};

export default Select;
