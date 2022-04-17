import FileInput from 'components/FileInput';
import TextInput from 'components/TextInput';
import styles from './styles.module.css';

interface P {
  warn: Warn;
  onChange: (key: keyof Warn, value: string) => void;
}

const Settings: React.FC<P> = ({ warn, onChange }) => {
  const handleChangeFile = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      onChange("icon", reader.result as string);
    });
    reader.readAsDataURL(file);
  };

  return (
    <section>
    <label className={styles.label}>
      <span className={styles.labelText}>User Name</span>
      <div className={styles.username}>
        <TextInput
          value={warn.name}
          onChange={(value) => onChange("name", value as string)}
          placeholder="Enter user name."
        />
        #
        <TextInput
          value={warn.tag}
          onChange={(value) => onChange("tag", value as string)}
          placeholder="Enter numbers."
          maxLength={4}
        />
      </div>
    </label>
    <div className={styles.iconSection}>
      <span className={styles.labelText}>Icon</span>
      <FileInput onChange={handleChangeFile} />
    </div>
    <label className={styles.label}>
      <span className={styles.labelText}>Reason</span>
      <TextInput
        value={warn.reason}
        onChange={(value) => onChange("reason", value as string)}
        placeholder="Enter reason."
      />
    </label>
    </section>
  )
}

export default Settings;
