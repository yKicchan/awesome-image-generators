import { Route, Routes } from "react-router-dom";
import DiscordRankCard from "./DiscordRankCard";
import Home from "./Home";
import styles from "./styles.module.css";
import SuperChat from "./SuperChat";
import WasWarned from "./WasWarned";

function App() {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-chat" element={<SuperChat />} />
        <Route path="/discord-rank-card" element={<DiscordRankCard />} />
        <Route path="/was-warned" element={<WasWarned />} />
      </Routes>
      <footer className={styles.footer}>
        ©︎ 2022 yKicchan・
        <a
          href="https://github.com/yKicchan/awesome-image-generators"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          Repository
        </a>
      </footer>
    </main>
  );
}

export default App;
