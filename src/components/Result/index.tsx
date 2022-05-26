import styles from "./styles.module.scss"
import {motion} from "framer-motion"

interface ResultProps {
    user: User;
}

type User = {
    detailsPersona: {
        name: string,
        id: string,
        description: string,
        conceitos: string,
    }
}

export function Result({user}: ResultProps) {

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -200,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}

            className={styles.background}
        >
            <div className={styles.contentContainer}>
                <div>
                    <p className={styles.title}>Sua personalidade é: <br/> {user.detailsPersona.name}</p>
                    <div className={styles.description}>
                        <p>{user.detailsPersona.description}</p>
                    </div>
                    <div className={styles.box}>
                        <p><span
                            className={styles.destaque}>Seus traços de personalidade são:</span> {user.detailsPersona.conceitos}
                        </p>

                    </div>
                </div>
            </div>
        </motion.div>
    )

}