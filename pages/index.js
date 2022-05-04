import Head from 'next/head'
import styles from '../styles/index.css'

export default function Home() {
  return (
    <div className={styles.div}>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>TEAC882  Final Project</title>
        </Head>

        <header className={styles.banner}>
            <h1 className={styles.title}>TEAC882 Final</h1>
        </header>
        <main className={styles.main}></main>

    </div>
  )
}
