import Preview from "./Preview";
import Settings from "./Settings";
import Button from "components/Button";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import { useDownload } from "hooks/useDownload";
import { DiscordStatus } from "./enums";

const DiscordRankCard = () => {
  const [discordRank, setDiscordRank] = useState<DiscordRank>({
    name: "",
    tag: "0000",
    rank: 1,
    exp: 0,
    status: DiscordStatus.Online,
    icon: "",
    color: "#80D0F1"
  });

  const handleChange = (key: keyof DiscordRank, value: string | number) => {
    setDiscordRank({
      ...discordRank,
      [key]: value,
    });
  };
  const ref = useRef(null);
  const download = useDownload(ref, `${discordRank.name}#${discordRank.tag}_card`);
  return (
    <>
      <h1>Discord Rank Card Generator</h1>
      <Settings discordRank={discordRank} onChange={handleChange} />
      <h2>Preview</h2>
      <Preview ref={ref} {...discordRank} />
      <Button className={styles.download} onClick={download}>
        Download
      </Button>
    </>
  );
};

export default DiscordRankCard;
