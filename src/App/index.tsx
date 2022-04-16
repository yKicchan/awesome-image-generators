import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import styles from "./styles.module.css";
import SuperChat from "./SuperChat";

function App() {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="super-chat" element={<SuperChat />} />
      </Routes>
      <footer className={styles.footer}>©︎ 2022 yKicchan</footer>
    </main>
  );
}

export default App;
