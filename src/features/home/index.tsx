import { authUrl } from "@shared/spotify/index";
import styles from "./styles.module.scss";
import spotify from "./assets/spotify.svg";
const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.title}>
            O que o seu
            <br /> Spotify diz sobre você?
          </p>
          <a className={styles.auth} href={authUrl()}>
            <span>
              <img src={spotify} alt="Spotify" className={styles.logo} />
            </span>
            <span className={styles.text}>FAÇA LOGIN COM O SPOTIFY</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
