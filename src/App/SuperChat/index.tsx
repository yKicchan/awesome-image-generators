import Button from "components/Button";
import Preview from "./Preview";
import Settings from "./Settings";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { useDownload } from "hooks/useDownload";

const SuperChat = () => {
  const [superChat, setSuperChat] = useState<SuperChat>({
    name: "",
    message: "",
    price: 100,
    icon: "",
  });

  const handleChange = (key: keyof SuperChat, value: string | number) => {
    setSuperChat({
      ...superChat,
      [key]: value,
    });
  };

  const ref = useRef<HTMLElement>(null);

  const download = useDownload(ref, `${superChat.name}_chat`)

  return (
    <>
      <h1>Super Chat Image Generator</h1>
      <Settings superChat={superChat} onChange={handleChange} />
      <h2>Preview</h2>
      <Preview ref={ref} {...superChat} />
      <Button className={styles.download} onClick={download}>
        Download
      </Button>
    </>
  );
}

export default SuperChat;
