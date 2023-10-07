export const learningPaths = [
  {
    id: 1,
    title: {
      es: "Frontend",
      en: "Frontend",
    },
    description: {
      es: "¡Aprende los fundamentos esenciales de HTML en nuestro curso introductorio! HTML, o HyperText Markup Language, es el lenguaje de marcado fundamental para crear páginas web. En este curso, te guiaremos a través de los conceptos básicos de HTML, desde la estructura de un documento HTML hasta la creación de enlaces y la inserción de imágenes. Desarrolla las habilidades necesarias para construir tus propias páginas web y da tus primeros pasos en el emocionante mundo del desarrollo web.",
      en: "Learn the essential fundamentals of HTML in our introductory course! HTML, or HyperText Markup Language, is the fundamental markup language for creating web pages. In this course, we will guide you through the basics of HTML, from the structure of an HTML document to creating links and inserting images. Develop the skills needed to build your own web pages and take your first steps into the exciting world of web development.",
    },
    thumbnail: "react",
    courses: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: {
      es: "Backend",
      en: "Backend",
    },
    description: {
      es: "¡Aprende los fundamentos esenciales de HTML en nuestro curso introductorio! HTML, o HyperText Markup Language, es el lenguaje de marcado fundamental para crear páginas web. En este curso, te guiaremos a través de los conceptos básicos de HTML, desde la estructura de un documento HTML hasta la creación de enlaces y la inserción de imágenes. Desarrolla las habilidades necesarias para construir tus propias páginas web y da tus primeros pasos en el emocionante mundo del desarrollo web.",
      en: "Learn the essential fundamentals of HTML in our introductory course! HTML, or HyperText Markup Language, is the fundamental markup language for creating web pages. In this course, we will guide you through the basics of HTML, from the structure of an HTML document to creating links and inserting images. Develop the skills needed to build your own web pages and take your first steps into the exciting world of web development.",
    },
    thumbnail: "node",
    courses: [6],
    showSubscription: true,
  },
  {
    id: 3,
    title: {
      es: "DevOps",
      en: "DevOps",
    },
    description: {
      es: "Domina la cultura, prácticas y herramientas de DevOps. Aprende a acelerar el desarrollo de software, mejorar la colaboración entre equipos y automatizar despliegues. Obtén las habilidades clave para llevar tus proyectos al siguiente nivel y alcanzar la eficiencia operativa que tu empresa necesita. ¡Únete a nosotros y conviértete en un experto en DevOps!",
      en: "Master the culture, practices, and tools of DevOps. Learn to accelerate software development, enhance team collaboration, and automate deployments. Gain the key skills to take your projects to the next level and achieve the operational efficiency your company needs. Join us and become a DevOps expert!",
    },
    thumbnail: "devops",
    courses: [],
    showSubscription: true,
  },
];

export const classes = [
  {
    id: 1,
    courseId: 1,
    title: {
      es: "Entorno de desarrollo",
      en: "Development environment",
    },
    description: {
      es: "¿Quieres adentrarte en el mundo del desarrollo web y crear tus propias páginas HTML? Aquí te guio paso a paso a través del proceso de configuración del entorno de desarrollo HTML utilizando las herramientas escenciales.",
      en: "Do you want to enter the world of web development and create your own HTML pages? Here I guide you step by step through the process of setting up the HTML development environment using the essential tools.",
    },
    video: {
      es: "https://www.youtube.com/embed/ZwnAuRC1FtA?si=opSz5IRSdNsV43mT",
    },
    content: {
      es: `
          Vamos a necesitar dos herramientas. Un editor de código y un navegador para visualizar nuestras páginas web. Como editor de código vamos a estar usand Visual Studio Code o más conocido como VS Code y como navegador puedes usar alguno que ya esté instalado en tu computadora, pero actualmente la mayoría de programadores web usan el [Chrome](https://www.google.com/intl/es_es/chrome/).

          ### VS Code
          ---

          #### ¿Para qué sirve Visual Studio Code?

          Visual Studio Code es una herramienta versátil que puede utilizarse para desarrollar una amplia variedad de aplicaciones y proyectos. Algunas de sus características y usos más destacados incluyen:

          1. **Soporte para múltiples lenguajes**: VS Code es compatible con una amplia gama de lenguajes de programación, desde JavaScript y Python hasta C# y Java. Esto lo hace adecuado para una variedad de proyectos.
          2. **Extensiones y personalización**: VS Code cuenta con una amplia biblioteca de extensiones que te permiten personalizar tu entorno de desarrollo. Puedes agregar extensiones para mejorar la funcionalidad, como la depuración de código, la integración con sistemas de control de versiones y mucho más.
          3. **Depuración integrada**: Visual Studio Code ofrece potentes capacidades de depuración que te ayudarán a identificar y corregir errores en tu código de manera eficiente.
          4. **Control de versiones**: Integra fácilmente herramientas de control de versiones como Git en tu flujo de trabajo, lo que facilita la colaboración y el seguimiento de cambios en tus proyectos.
          5. **Terminal integrada**: VS Code incluye una terminal integrada que te permite ejecutar comandos directamente desde el editor, lo que facilita tareas como la instalación de paquetes o la ejecución de scripts.

          #### Cómo instalar Visual Studio Code

          La instalación de Visual Studio Code es sencilla y está disponible para Windows, macOS y Linux. Sigue estos pasos para instalarlo:

          1. **Descarga**: Visita el [sitio web oficial](https://code.visualstudio.com/) de Visual Studio Code y selecciona la versión adecuada para tu sistema operativo.
          2. **Ejecución de instalador**: Ejecuta el archivo descargado y sigue las instrucciones del instalador.
          3. **Configuración inicial**: Una vez instalado, al abrir Visual Studio Code, encontrarás una interfaz limpia y minimalista. Puedes personalizar aún más el editor instalando extensiones y configurando preferencias según tus necesidades.


          Para ver los primeros pasos, en [este video](https://youtu.be/ZwnAuRC1FtA?t=102) te muestro.

          ### Navegador WEB
          ---

          #### ¿Qué son los navegadores web?

          Un navegador web es una aplicación que te permite visualizar y acceder a páginas web en Internet. Su función principal es interpretar y mostrar el contenido de las páginas web, que pueden contener texto, imágenes, videos, formularios y más. Los navegadores web también permiten la interacción con enlaces y la navegación entre páginas.

          #### Los Principales Navegadores Web

          Existen numerosos navegadores web disponibles, pero algunos de los más populares incluyen:

          1. **Google Chrome**:  Con una interfaz sencilla y un alto rendimiento, [Google Chrome](https://www.google.com/intl/es_es/chrome/) es uno de los navegadores más utilizados en todo el mundo. Ofrece una amplia gama de extensiones que permiten personalizar tu experiencia de navegación.
          2. **Mozilla Firefox**: [Firefox](https://www.mozilla.org/es-ES/firefox/new/) es conocido por su enfoque en la privacidad y la personalización. También es de código abierto, lo que significa que su código fuente está disponible para que cualquiera lo inspeccione o modifique.
          3. **Microsoft Edge**: Edge es el navegador web de Microsoft y viene preinstalado en Windows. Ofrece una experiencia de navegación rápida y eficiente, así como una integración sólida con otros productos de Microsoft.
          4. **Safari**: Safari es el navegador web exclusivo de Apple y se encuentra en dispositivos Mac y iOS. Ofrece un rendimiento rápido y una integración perfecta con otros productos de Apple.

          Para ver los primeros pasos, en [este video](https://youtu.be/ZwnAuRC1FtA?t=256) te muestro.
        `,

      en: `
         Hello

          - what's up 1
          - [this link](https://www.google.com)

          \`\`\`ts
              const name = "leo";
          \`\`\`
        `,
    },
  },
  {
    id: 2,
    courseId: 1,
    title: {
      es: "Estructura básica",
      en: "Basic structure",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/1L_ZrxDami4?si=paaLhJzGi-408Oqr",
    },
  },
  {
    id: 3,
    courseId: 1,
    title: {
      es: "Herramienta de desarrolladores",
      en: "DevOps tools",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/X9ngOAyNjCA?si=TxUgRznxaPeMJInV",
    },
  },
  {
    id: 4,
    courseId: 1,
    title: {
      es: "Textos",
      en: "Text",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/Ta7JUgMfcr0?si=bF-SPd73IV3mXlc6",
    },
  },
  {
    id: 5,
    courseId: 1,
    title: {
      es: "Listas",
      en: "List",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/0a8kjLjNfh4?si=Q9GODj7ncU3RhPuX",
    },
  },
  {
    id: 6,
    courseId: 1,
    title: {
      es: "Navegación",
      en: "Navigation",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/4BiyEG_OWsE?si=jITsFhhGh5sit5OP",
    },
  },
  {
    id: 7,
    courseId: 1,
    title: {
      es: "Imágenes",
      en: "Images",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/5fPZRK6WauE?si=OH89Fd4supajTdxC",
    },
  },
  {
    id: 8,
    courseId: 1,
    title: {
      es: "Tablas",
      en: "Tables",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/l3CLCfyHAWg?si=9dwcA-ddjHo6_Ur",
    },
  },
  {
    id: 9,
    courseId: 1,
    title: {
      es: "Formularios",
      en: "Forms",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/-Il58AlPvs0?si=2rlmZ-p6s6OrvtmQ",
    },
  },
  {
    id: 10,
    courseId: 1,
    title: {
      es: "HTML 5",
      en: "HTML 5",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/1YoGeG7ikuY?si=_4YyAlrXszGadwiu",
    },
  },
  {
    id: 11,
    courseId: 1,
    title: {
      es: "Que sigue?",
      en: "What's next?",
    },
    description: {
      es: "Esta es mi descripcion",
      en: "This is my description",
    },
    video: {
      es: "https://www.youtube.com/embed/9KF4ZzL4_qw?si=Qt01b39_Mvfk5qah",
    },
  },
];

export const courses = [
  {
    id: 1,
    title: {
      es: "HTML",
      en: "HTML",
    },
    thumbnail: "html",
    description: {
      es: "¡Aprende los fundamentos esenciales de HTML en nuestro curso introductorio! HTML, o HyperText Markup Language, es el lenguaje de marcado fundamental para crear páginas web. En este curso, te guiaremos a través de los conceptos básicos de HTML, desde la estructura de un documento HTML hasta la creación de enlaces y la inserción de imágenes. Desarrolla las habilidades necesarias para construir tus propias páginas web y da tus primeros pasos en el emocionante mundo del desarrollo web.",
      en: "Learn the essential fundamentals of HTML in our introductory course! HTML, or HyperText Markup Language, is the fundamental markup language for creating web pages. In this course, we will guide you through the basics of HTML, from the structure of an HTML document to creating links and inserting images. Develop the skills needed to build your own web pages and take your first steps into the exciting world of web development.",
    },
    video: {
      es: "https://www.youtube.com/embed/zJTjsLCKzio?si=3nIfoX0-kad7mbL3",
    },
    background: "#ff6633",
    textColor: "white",
    tags: ["html", "frontend"],
  },
  {
    id: 2,
    title: {
      es: "CSS",
      en: "CSS",
    },
    thumbnail: "css",
    video: {
      es: "https://www.youtube.com/embed/D5VzGWgF_zk?si=aynQktIMxDzRpbM3",
    },
    description: {
      es: "Explora el mundo del diseño web con nuestro curso de CSS. CSS, o Cascading Style Sheets, es la herramienta esencial para dar vida a tus páginas web y hacerlas visualmente atractivas. En este curso, aprenderás a controlar la presentación y el estilo de tus sitios web, desde la selección de colores y fuentes hasta el diseño de diseños responsivos. Adquiere las habilidades necesarias para convertir tus proyectos web en experiencias visuales cautivadoras y profesionales.",
      en: "Explore the world of web design with our CSS course. CSS, or Cascading Style Sheets, is the essential tool to bring your web pages to life and make them visually appealing. In this course, you will learn how to control the presentation and style of your websites, from selecting colors and fonts to designing responsive layouts. Gain the skills needed to turn your web projects into captivating and professional visual experiences.",
    },
    background: "#3399cc",
    textColor: "white",
    tags: ["css", "frontend"],
  },
  {
    id: 3,
    title: {
      es: "JavaScript",
      en: "JavaScript",
    },
    thumbnail: "javascript",
    description: {
      es: "Descubre el poder de la programación web con nuestro curso de JavaScript. JavaScript es el lenguaje de programación que impulsa la interactividad en sitios web modernos. En este curso, te enseñaremos desde los conceptos básicos hasta las técnicas avanzadas de JavaScript. Aprenderás a crear funciones dinámicas, manipular elementos HTML, y desarrollar aplicaciones web interactivas. Prepárate para desbloquear nuevas posibilidades en el mundo de la programación web con JavaScript como tu herramienta principal.",
      en: "Discover the power of web programming with our JavaScript course. JavaScript is the programming language that drives interactivity on modern websites. In this course, we will teach you from the basics to advanced JavaScript techniques. You will learn how to create dynamic functions, manipulate HTML elements, and develop interactive web applications. Get ready to unlock new possibilities in the world of web programming with JavaScript as your primary tool.",
    },
    background: "#f7df1e",
    textColor: "black",
    tags: ["javascript", "js", "frontend"],
    showSubscription: true,
  },
  {
    id: 4,
    title: {
      es: "Bootstrap",
      en: "Bootstrap",
    },
    thumbnail: "bootstrap",
    description: {
      es: "Domina el arte del diseño web responsivo con nuestro curso de Bootstrap. Bootstrap es un popular framework de desarrollo web que simplifica la creación de sitios web modernos y adaptables. En este curso, aprenderás a utilizar Bootstrap para crear diseños atractivos y funcionales de manera rápida y eficiente. Explorarás componentes preestablecidos, grillas responsivas y mucho más. Prepárate para perfeccionar tus habilidades de diseño web y ofrecer experiencias excepcionales en dispositivos de todos los tamaños con Bootstrap.",
      en: "Master the art of responsive web design with our Bootstrap course. Bootstrap is a popular web development framework that simplifies the creation of modern and adaptable websites. In this course, you will learn how to use Bootstrap to quickly and efficiently create attractive and functional designs. You will explore pre-built components, responsive grids, and much more. Get ready to hone your web design skills and deliver exceptional experiences on devices of all sizes with Bootstrap.",
    },
    background: "#7011f5",
    textColor: "white",
    tags: ["bootstrap", "css", "framework", "libreria", "frontend"],
    showSubscription: true,
  },
  {
    id: 5,
    title: {
      es: "React",
      en: "React",
    },
    thumbnail: "react",
    description: {
      es: "Embárcate en un emocionante viaje hacia el desarrollo de aplicaciones web modernas con nuestro curso de React. React, desarrollada por Facebook, es una biblioteca de JavaScript ampliamente utilizada para construir interfaces de usuario dinámicas y eficientes. En este curso, te sumergirás en los conceptos fundamentales de React, aprenderás a crear componentes reutilizables y a gestionar el estado de la aplicación. Prepárate para dominar esta potente herramienta y construir aplicaciones web interactivas y de alto rendimiento con React.",
      en: "Embark on an exciting journey into modern web application development with our React course. Developed by Facebook, React is a widely used JavaScript library for building dynamic and efficient user interfaces. In this course, you'll dive into the fundamental concepts of React, learn to create reusable components, and manage application state. Get ready to master this powerful tool and build interactive, high-performance web applications with React.",
    },
    background: "#03c3f3",
    textColor: "white",
    tags: ["react", "framework", "libreria", "frontend"],
    showSubscription: true,
  },
  {
    id: 6,
    title: {
      es: "Node",
      en: "Node",
    },
    thumbnail: "node",
    description: {
      es: "Explora el fascinante mundo del desarrollo de aplicaciones en el lado del servidor con nuestro curso de Node.js. Node.js es un entorno de tiempo de ejecución de JavaScript que te permite crear aplicaciones escalables y de alto rendimiento. En este curso, te sumergirás en los fundamentos de Node.js, aprenderás a construir servidores web, manipular bases de datos y desarrollar aplicaciones en tiempo real. Prepárate para adquirir las habilidades necesarias para construir aplicaciones robustas y eficientes en el lado del servidor con Node.js.",
      en: "Explore the fascinating world of server-side application development with our Node.js course. Node.js is a JavaScript runtime environment that allows you to create scalable and high-performance applications. In this course, you will delve into the fundamentals of Node.js, learn to build web servers, manipulate databases, and develop real-time applications. Get ready to acquire the skills needed to build robust and efficient server-side applications with Node.js.",
    },
    tags: ["nodejs", "runtime", "javascript", "js", "backend"],
    showSubscription: true,
  },
];
