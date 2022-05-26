import styles from "../../pages/calc/styles.module.scss";
import {motion} from "framer-motion";
import Link from "next/link";

interface LoadingProps {
    loading: boolean;
    onClick: () => void;
}

export function Loading({ loading, onClick }: LoadingProps) {
    return (
        <div className={styles.background}>

            {!loading ? (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }} className={styles.contentContainer}>
                    <div className={styles.box}>
                        <p className={styles.title}>Pronto, calculamos tudo o que você já ouviu!</p>
                        {/* Espera 5 segundos para exibir o botão */}
                        <motion.button
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            animate={{
                                opacity: 2,
                                y: 0
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}
                            onClick={onClick}
                            className={styles.button}
                        >
                            <span>VER MEU RESULTADO</span>
                        </motion.button>

                    </div>
                </motion.div>
            ) : (
                <div className={styles.loading}>
                    <p>Carregando...</p>
                </div>)}
        </div>
    )
}