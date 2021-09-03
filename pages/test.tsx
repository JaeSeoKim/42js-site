import Nav from "../component/Nav";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <Nav />
        <div className={styles.landingContent}>
          <div className={styles.landingContentTitle}>
            <h1>42JS</h1>
            <h2>42Seoul의 Javascript 공식 커뮤니티</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
