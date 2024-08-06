import Link from "next/link";
import styles from "./navBar.module.css";

export default function NavBar({ destino = '/', texto = 'Default Text' }) {
  return (
    <header className={styles.navBar}>
      <div>
          <h1>Logo</h1>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navItem}>
            <Link href="portifolio">Portifolio</Link>
          </li>
          <li className={styles.navItem}>
          <Link href={destino}>{texto}</Link>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contact</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
