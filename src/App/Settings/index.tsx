import { SuperChat } from "App";
import FileInput from "components/FileInput";
import { Option } from "components/Select";
import TextArea from "components/TextArea";
import TextInput from "components/TextInput";
import { useState } from "react";
import styles from "./styles.module.css";

interface P {
  superChat: SuperChat;
  onChange: (key: keyof SuperChat, value: string | number) => void;
}

const Settings: React.FC<P> = ({ superChat, onChange }) => {
  const handleChangeFile = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      onChange("icon", reader.result as string);
    });
    reader.readAsDataURL(file);
  };

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
      <div className={styles.iconSection}>
        <span className={styles.labelText}>Icon</span>
        <FileInput onChange={handleChangeFile} />
      </div>
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
