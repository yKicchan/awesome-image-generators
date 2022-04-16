import FileInput from "components/FileInput";
import Select from "components/Select";
import TextInput from "components/TextInput";
import { DiscordStatus } from "../enums";
import { ChromePicker } from 'react-color';
import styles from "./styles.module.css";

interface P {
  discordRank: DiscordRank;
  onChange: (key: keyof DiscordRank, value: string | number) => void;
}

const statusOptions: Option[] = [
  { label: "Online", value: DiscordStatus.Online },
  { label: "Idle", value: DiscordStatus.Idle },
  { label: "Do Not Disturb", value: DiscordStatus.DoNotDisturb },
  { label: "Offline / Invisible", value: DiscordStatus.Offline },
];

const Settings: React.FC<P> = ({ discordRank, onChange }) => {
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
        <span className={styles.labelText}>User Name</span>
        <div className={styles.username}>
          <TextInput
            value={discordRank.name}
            onChange={(value) => onChange("name", value)}
            placeholder="Enter user name."
          />
          #
          <TextInput
            value={discordRank.tag}
            onChange={(value) => onChange("tag", value)}
            placeholder="Enter numbers."
            maxLength={4}
          />
        </div>
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Status</span>
        <Select
          options={statusOptions}
          value={discordRank.status}
          onChange={(value) => onChange("status", value as string)}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Rank</span>
        <TextInput
          type="number"
          value={discordRank.rank}
          onChange={(value) => onChange("rank", value)}
          min={1}
          placeholder="Enter rank."
        />
      </label>
      <div className={styles.iconSection}>
        <span className={styles.labelText}>Icon</span>
        <FileInput onChange={handleChangeFile} />
      </div>
      <div className={styles.label}>
        <span className={styles.labelText}>Thema Color</span>
        <ChromePicker color={discordRank.color} onChange={color => onChange('color', color.hex)} />
      </div>
      <label className={styles.label}>
        <span className={styles.labelText}>Total Exp</span>
        <TextInput
          type="number"
          value={discordRank.exp}
          onChange={(value) => onChange("exp", value)}
          placeholder="Enter exp."
        />
      </label>
    </section>
  );
};

export default Settings;
