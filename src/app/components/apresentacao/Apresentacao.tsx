import styles from "./apresentacao.module.css";

export default function Apresentacao() {
  return (
    <main className={styles.main}>
      <div className={styles.presentation}>
        <div className={styles.positionleft}>
          <h3>Olá, eu sou </h3>
          <h1>Marco Antonio D Agostino</h1>
          <h3>Programador & Designer</h3>
          <ul className={styles.actionButtons}>
            <li className={styles.actionButtonList}>
              <button className={styles.contactButton}>Fale Comigo</button>
              <button className={styles.downloadButton}>Download Currículo</button>
            </li>
          </ul>
          <ul className={styles.socialMedia}>
            <li className={styles.socialMediaList}>
              <button className={styles.socialButton}>
                F
              </button>
              <button className={styles.socialButton}>
                F
              </button>
              <button className={styles.socialButton}>
              <img src="#" alt="" />F
              </button>
              <button className={styles.socialButton}>
                F
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.profileImage}>
          
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <ul className={styles.statsContainer}>
            <li className={styles.statItem}>
              <h2>111111</h2>       
              <h3>22222</h3>
            </li>
            <li className={styles.statItem}>
              <h2>111111</h2>       
              <h3>22222</h3>
            </li>
            <li className={styles.statItem}>
              <h2>333333</h2>       
              <h3>444444</h3>
            </li>
          </ul>
        </div>
        <div className={styles.divider}></div>
      </div>
    </main>
  );
}
