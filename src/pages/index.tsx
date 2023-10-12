import styles from "../styles/index.module.scss";
import { Nav } from "../components/nav/Nav";
import { Header } from "../components/header/Header";
import { UniSearch } from "../components/itemSearch/UniSearch";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Header />
      <UniSearch />
    </main>
  );
}
