import styles from './works.module.css';


export default function Works() {
  return (
    <div>
      <div className={styles.square}>
        <div className={styles.topleft}>
          <img src={"/man.svg"} alt="Top Left" />
        </div>
        <div className={styles.topleft}>
          <img src={"/man.svg"} alt="Top Left" />
        </div>
        <div className={styles.topleft}>
          <img src={"/man.svg"} alt="Top Left" />
        </div>
        <div className={styles.topleft}>
          <img src={"/man.svg"} alt="Top Left" />
        </div>
      </div>
    </div>
  );
}
