import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next Stisla </title>
        <meta name="description" content="Next with Stisla Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> with <a href=""> Stisla Admin </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="stisla/dashboard/ecommerce">
            <a  className={styles.card}>
              <h2> See Dashboard &rarr;</h2>
            </a>
          </Link>

          <a
            href="https://github.com/imlana21/next-stisla"
            className={styles.card}
          >
            <h2> NextStisla on Github &rarr;</h2>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2> NextJS Documentation &rarr;</h2>
          </a>

          <a href="https://docs.getstisla.com/#/en/2.2.0" className={styles.card}>
            <h2> Stisla Documentation &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn NextJS &rarr;</h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy on Vercel &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextJS by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://twitter.com/mhdnauvalazhar"
          target="_blank"
          rel="noopener noreferrer"
        >
          StislaAdmin by Muhammad Nauval Azhar
        </a>
      </footer>
    </div>
  )
}
