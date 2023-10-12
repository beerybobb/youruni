import Link from "next/link";
import styles from "./nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>YourUni</div>
      <div className={styles.navLinks}>
        <Link href="" className={styles.activeLink}>Product</Link>
        <Link href="">Download</Link>
        <Link href="">Pricing</Link>
      </div>
    </nav>
  );
};
