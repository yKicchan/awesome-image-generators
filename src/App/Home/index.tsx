import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <h1>Generators</h1>
      <section className={styles.container}>
        <Link to="/super-chat" className={styles.link}>
          Super Chat
        </Link>
      </section>
    </>
  );
};
export default Home;
