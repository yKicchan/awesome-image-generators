import { Route, Routes } from "react-router-dom";
import DiscordRankCard from "./DiscordRankCard";
import Home from "./Home";
import styles from "./styles.module.css";
import SuperChat from "./SuperChat";

function App() {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-chat" element={<SuperChat />} />
        <Route path="/discord-rank-card" element={<DiscordRankCard />} />
      </Routes>
      <footer className={styles.footer}>©︎ 2022 yKicchan</footer>
    </main>
  );
}

export default App;
