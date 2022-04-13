import Button from "components/Button";
import Preview from "App/Preview";
import Settings from "App/Settings";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { useDownload } from "hooks/useDownload";

export interface SuperChat {
  icon: string;
  name: string;
  price: number;
  message: string;
}

function App() {
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
    <div className={styles.container}>
      <h1 className={styles.h1}>Super Chat Image Generator</h1>
      <Settings superChat={superChat} onChange={handleChange} />
      <h2 className={styles.h2}>Preview</h2>
      <Preview ref={ref} {...superChat} />
      <Button className={styles.download} onClick={download}>
        Download
      </Button>
      <footer className={styles.footer}>©︎ 2022 yKicchan</footer>
    </div>
  );
}

export default App;
