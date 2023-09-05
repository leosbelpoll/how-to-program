import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Bienvenido!</h1>

        <p className={styles.description}>
          En este blog vas a aprender a programar desde 0. No te prometo que
          serán 10 días como los gurús hacen. Pero aprenderás de la forma
          correcta y en poco tiempo verás los resultados.
          <br />
          Acá puedes acceder a{" "}
          <a href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ">
            mis cursos en Youtube
          </a>
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
