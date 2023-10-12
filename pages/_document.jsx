import { Html, Head, Main, NextScript } from "next/document";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
import { app } from "../utils/firebase";

export default function Document() {
  useEffect(() => {
    getAnalytics(app);
  }, []);

  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Recursos y tutoriales de programación para programadores. Aprende a programar en diversos lenguajes y tecnologías."
        />
        <meta
          name="keywords"
          content="programación, programadores, tutoriales, lenguajes de programación, desarrollo web, desarrollo de software, html, css, js, javascript, bootstrap, react, reactjs, node, nodejs"
        />
        <meta name="author" content="Leosbel Poll Sotomayor" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Metatag para enlazar a tu página de inicio de redes sociales */}
        <meta
          property="og:title"
          content="Como Programar - Recursos para Programadores"
        />
        <meta
          property="og:description"
          content="Recursos y tutoriales de programación para programadores. Aprende a programar en diversos lenguajes y tecnologías."
        />
        <meta
          property="og:image"
          content="https://www.comoprogramar.dev/images/logo-light.png"
        />
        <meta property="og:url" content="https://www.comoprogramar.dev" />

        {/* Metatag de Twitter para compartir tu sitio */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Como Programar - Recursos para Programadores"
        />
        <meta
          name="twitter:description"
          content="Recursos y tutoriales de programación para programadores. Aprende a programar en diversos lenguajes y tecnologías."
        />
        <meta
          name="twitter:image"
          content="https://www.comoprogramar.dev/images/logo-light.png"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/styles/globals.css" />

        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <title>Como Programar?</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
