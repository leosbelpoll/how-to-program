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
        <meta name="twitter:image" content="/ogp.jpg" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/globals.css" />

        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <title>Como Programar de 0 a 100?</title>

        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:image:secure_url" content="/ogp.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          property="og:image:alt"
          content="Recursos y tutoriales de programación para programadores. Aprende a programar en diversos lenguajes y tecnologías."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
