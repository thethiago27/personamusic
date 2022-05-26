import styles from "../styles/Home.module.scss";
import Link from "next/link";
import {GetServerSideProps} from "next";
import {api} from "../services/api";

interface HomeProps {
    url: string;
}

export default function Home({url}: HomeProps) {

    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <div className={styles.box}>
                    <p className={styles.title}>O que o seu<br/> Spotify diz sobre você?</p>
                    <Link href={url}>
                        <a className={styles.button}>
                            <img src="/logo.svg" alt="Spotify" className={styles.logo}/>
                            <span className={styles.buttonText}>FAÇA LOGIN COM O SPOTIFY</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}: any) => {

    const response = await api.get("/login")

    const {url} = response.data

    return {
        props: {
            url: url
        }
    }

}
