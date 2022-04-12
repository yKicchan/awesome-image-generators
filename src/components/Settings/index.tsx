import { SuperChat } from "components/App";
import TextArea from "components/TextArea";
import TextInput from "components/TextInput";
import styles from "./styles.module.css";

interface P {
  superChat: SuperChat;
  onChange: (key: keyof SuperChat, value: string | number) => void;
}

const Settings: React.FC<P> = ({ superChat, onChange }) => {
  return (
    <section className={styles.container}>
      <label className={styles.label}>
        <span className={styles.labelText}>Name</span>
        <TextInput
          value={superChat.name}
          onChange={(value) => onChange("name", value)}
          placeholder="Enter user name."
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Price</span>
        <TextInput
          type="number"
          value={superChat.price}
          onChange={(value) => onChange("price", value)}
          max={50000}
          min={100}
          placeholder="Enter price."
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Icon URL</span>
        <TextInput
          value={superChat.icon}
          onChange={(value) => onChange("icon", value)}
          placeholder="Enter icon URL. ex: Youtube channel icon"
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Message</span>
        <TextArea
          value={superChat.message}
          onChange={(value) => onChange("message", value)}
        />
      </label>
    </section>
  );
};

export default Settings;
