export const learningPaths = [
  {
    id: 1,
    title: {
      es: "Frontend",
      en: "Frontend",
    },
    content: {
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
    content: {
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
    content: {
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
    video: {
      es: "https://www.youtube.com/embed/ZwnAuRC1FtA?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
          ¿Quieres adentrarte en el mundo del desarrollo web y crear tus propias páginas HTML? Aquí te guio paso a paso a través del proceso de configuración del entorno de desarrollo HTML utilizando las herramientas escenciales.

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
            Do you want to enter the world of web development and create your own HTML pages? Here I guide you step by step through the process of setting up the HTML development environment using the essential tools.

            We are going to need two tools. A code editor and a browser to view our web pages. As a code editor we will be using Visual Studio Code or better known as VS Code and as a browser you can use one that is already installed on your computer, but currently most web programmers use [Chrome](https://www.google.com/intl/en/chrome/).

            ### VSCode
            ---

            #### What is Visual Studio Code for?

            Visual Studio Code is a versatile tool that can be used to develop a wide variety of applications and projects. Some of its most notable features and uses include:

            1. **Multi-language support**: VS Code supports a wide range of programming languages, from JavaScript and Python to C# and Java. This makes it suitable for a variety of projects.
            2. **Extensions and customization**: VS Code has an extensive library of extensions that allow you to customize your development environment. You can add extensions to improve functionality, such as code debugging, integration with version control systems, and more.
            3. **Integrated Debugging**: Visual Studio Code offers powerful debugging capabilities that will help you identify and fix errors in your code efficiently.
            4. **Version Control**: Easily integrate version control tools like Git into your workflow, making it easy to collaborate and track changes to your projects.
            5. **Built-in Terminal**: VS Code includes a built-in terminal that allows you to run commands directly from the editor, making tasks like installing packages or running scripts easier.

            #### How to install Visual Studio Code

            Visual Studio Code is easy to install and is available for Windows, macOS, and Linux. Follow these steps to install it:

            1. **Download**: Visit the [official website](https://code.visualstudio.com/) of Visual Studio Code and select the appropriate version for your operating system.
            2. **Run installer**: Run the downloaded file and follow the installer instructions.
            3. **Initial setup**: Once installed, when you open Visual Studio Code, you will find a clean and minimalist interface. You can further customize the editor by installing extensions and setting preferences according to your needs.


            To see the first steps, in [this video](https://youtu.be/ZwnAuRC1FtA?t=102) I show you.

            ### Web navigator
            ---

            #### What are web browsers?

            A web browser is an application that allows you to view and access web pages on the Internet. Its main function is to interpret and display the content of web pages, which can contain text, images, videos, forms, and more. Web browsers also allow interaction with links and navigation between pages.

            #### The Main Web Browsers

            There are numerous web browsers available, but some of the most popular ones include:

            1. **Google Chrome**: With a simple interface and high performance, [Google Chrome](https://www.google.com/intl/en/chrome/) is one of the most used browsers in the entire world. world. It offers a wide range of extensions that allow you to personalize your browsing experience.
            2. **Mozilla Firefox**: [Firefox](https://www.mozilla.org/en-US/firefox/new/) is known for its focus on privacy and personalization. It is also open source, meaning its source code is available for anyone to inspect or modify.
            3. **Microsoft Edge**: Edge is Microsoft's web browser and comes preinstalled on Windows. It offers a fast and efficient browsing experience, as well as strong integration with other Microsoft products.
            4. **Safari**: Safari is Apple's exclusive web browser and is found on Mac and iOS devices. It offers fast performance and seamless integration with other Apple products.

            To see the first steps, in [this video](https://youtu.be/ZwnAuRC1FtA?t=256) I show you.
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
    video: {
      es: "https://www.youtube.com/embed/1L_ZrxDami4?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
          ### ¿Qué es HTML?
    
          HTML significa **lenguaje de marcado de hipertexto**. Es la columna vertebral de cada página web que ve en línea. Piense en ello como el lenguaje que los navegadores web entienden para mostrar contenido en su pantalla. HTML le permite estructurar su contenido, como títulos, párrafos, imágenes, enlaces, etc, de una manera que los navegadores puedan interpretar.
    
          ### Estructura de un documento HTML básico
    
          Echemos un vistazo a la estructura básica de un documento HTML. Cada documento HTML comienza con una declaración \`<!DOCTYPE>\`, que le dice al navegador **la versión de HTML** con la que queremos trabajar, en este caso HTML5. Luego, tenemos la etiqueta \`<html>\` que contiene dos secciones principales: \`<head>\` y \`<body>\`. La sección \`<head>\` es para metadata y enlaces a recursos externos, mientras que la sección \`<body>\` contiene el contenido visible de su página web
    
          Agreguemos algo de contenido a nuestra página. Podemos usar etiquetas de encabezado, como \`<h1>\`, \`<h2>\`, etc., para definir encabezados de diferentes niveles. Y para los párrafos, simplemente usamos la etiqueta \`<p>\`. Intente agregar algunos títulos y párrafos a su página
    
          \`\`\`html
          <!DOCTYPE>
          <html>
              <head>
                  <title>Este título aparece en la pestaña del navegador</title>
              </head>
    
              <body>
                  <h1>Hola mundo!</h1>
              </body>
          </html>
          \`\`\`

          ### Recursos utilizados en la clase

          - <a href="https://gist.github.com/leosbelpoll/5f08144a0781ee7cffadc28ab30afaa9" target="_blank">Código HTML</a>
        `,
      en: "",
    },
  },
  {
    id: 3,
    courseId: 1,
    title: {
      es: "Herramienta de desarrolladores",
      en: "Dev Tools",
    },
    content: {
      es: `
        Las **Herramientas de Desarrollador del Navegador** desempeñan un papel crucial en el desarrollo web, proporcionando a los desarrolladores un conjunto potente de funciones para inspeccionar, depurar y optimizar páginas web. Aquí hay varias razones clave que destacan la importancia de las Herramientas de Desarrollador:

        1. Depuración
        - **Inspeccionar y Modificar:** Los desarrolladores pueden inspeccionar HTML, CSS y JavaScript en tiempo real, lo que les permite identificar y solucionar problemas rápidamente.
        - **Consola:** La consola permite a los desarrolladores registrar información, probar fragmentos de código e interactuar dinámicamente con la página.

        2. Optimización del Rendimiento
        - **Pestaña de Red:** Ayuda a analizar y optimizar el rendimiento de la red al monitorear los tiempos de carga de recursos, identificar cuellos de botella y optimizar tamaños de archivos.
        - **Pestaña de Línea de Tiempo:** Proporciona una línea de tiempo de eventos, ayudando a los desarrolladores a identificar áreas donde se puede mejorar el rendimiento.

        3. Diseño Responsivo
        - **Emulación de Dispositivos:** Permite a los desarrolladores simular diferentes dispositivos y tamaños de pantalla, asegurando que los sitios web sean receptivos y amigables para el usuario en diversas plataformas.

        4. Inspección y Modificación del DOM
        - **Pestaña de Elementos:** Facilita la inspección y modificación del Modelo de Objetos del Documento (DOM), permitiendo a los desarrolladores comprender la estructura de una página web y realizar cambios dinámicos.

        5. Depuración de CSS
        - **Pestaña de Estilos:** Permite a los desarrolladores ver y modificar estilos CSS, ayudando a depurar problemas de diseño y estilo en tiempo real.

        6. Depuración de JavaScript
        - **Pestaña del Depurador:** Permite a los desarrolladores establecer puntos de interrupción, avanzar a través del código e inspeccionar variables, facilitando la identificación y corrección de errores de JavaScript.

        7. Análisis de Seguridad
        - **Pestaña de Seguridad:** Proporciona información sobre problemas de seguridad en una página web, ayudando a los desarrolladores a identificar posibles vulnerabilidades y mejorar la seguridad general de un sitio.

        8. Análisis de Red
        - **Pestaña de Red:** Ofrece información sobre las solicitudes y respuestas entre el navegador y el servidor, ayudando en la optimización de los tiempos de carga de la página web.

        9. Consola para Scripting
        - **Consola:** Permite a los desarrolladores ejecutar comandos de JavaScript, probar fragmentos de código e interactuar dinámicamente con la página.

        10. Perfil de Memoria
        - **Pestaña de Memoria:** Ayuda a identificar y abordar fugas de memoria proporcionando información sobre el consumo de memoria de una página web.

        11. Auditoría de Accesibilidad
        - **Pestaña de Accesibilidad:** Ayuda a identificar y solucionar problemas de accesibilidad, asegurando que los sitios web sean utilizables por personas con discapacidades.

        En resumen, las Herramientas de Desarrollador del Navegador son esenciales para los desarrolladores web, ya que proporcionan un conjunto de funciones que simplifican el proceso de desarrollo, desde la depuración y la optimización hasta garantizar la accesibilidad y la seguridad. La familiaridad con estas herramientas mejora la capacidad de un desarrollador para crear aplicaciones web de alta calidad, eficientes y amigables para el usuario.
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/X9ngOAyNjCA?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 4,
    courseId: 1,
    title: {
      es: "Textos",
      en: "Text",
    },
    content: {
      es: `
        ### Comentarios en HTML
        
        En nuestro editor de código, diferenciaremos los elementos que veremos hoy utilizando comentarios en HTML. Para escribir un comentario en HTML, puedes presionar la tecla Control y Slash (o Command Slash en Mac). Los comentarios son útiles para recordatorios futuros, documentación, etc y estos no se muestran en la página.
        
        \`\`\`html
        <!-- Este es un comentario en HTML -->
        \`\`\`
        
        ### Cabeceras en HTML
        
        Las cabeceras son elementos importantes de texto en HTML y tienen un orden jerárquico de h1 a h6, donde h1 es el más importante y h6 el menos importante.
        
        \`\`\`html
        <h1>Hola mundo</h1>
        <h2>Subtítulo</h2>
        <h3>Subtítulo 3</h3>
        <h4>Subtítulo 4</h4>
        <h5>Subtítulo 5</h5>
        <h6>Subtítulo 6</h6>
        \`\`\`
        
        ### Párrafos en HTML
        
        Utilizamos la etiqueta \`<p>\` para párrafos en HTML.
        
        \`\`\`html
        <p>De esta manera se escriben los párrafos.</p>
        <p>Agregamos otra etiqueta en caso queremos agregar algún otro.</p>
        \`\`\`
        
        ### Elementos de Texto Especiales
        
        #### Span
        
        La etiqueta \`<span>\` se utiliza para destacar texto en línea, a primera vista no parece que cambie nada pero luego podemos aplicar estilos diferentes a estos elementos.
        
        \`\`\`html
        <span>Hola mundo</span>
        \`\`\`
        
        #### Strong
        
        La etiqueta \`<strong>\` se utiliza para denotar importancia y muestra el texto en negrita.
        
        \`\`\`html
        <strong>Hola mundo</strong>
        \`\`\`
        
        #### Emphasis
        
        La etiqueta \`<em>\` se utiliza para dar énfasis y muestra el texto en cursiva.
        
        \`\`\`html
        <em>Hola mundo</em>
        \`\`\`
        
        ### Formato de Texto
        
        #### Negrita y Cursiva
        
        Las etiquetas \`<b>\` e \`<i>\` también se utilizan para aplicar formato, mostrando texto en negrita y cursiva, respectivamente.
        
        \`\`\`html
        <b>Soy negrita</b>
        <i>Soy cursiva</i>
        \`\`\`

        Tal parece que hacen lo mismo que \`<strong>\` y \`<em>\`, pero no, las anteriormente mencionadas tienen este formato por defecto, pero podemos personalizarlas para que se visualizen como querramos. Sin embargo \`<b>\` e \`<i>\` si están pensadas exclisivamente para dar formato de negrita y cursiva.
        
        #### Subrayado y Tachado
        
        La etiqueta \`<u>\` se utiliza para subrayar, y \`<s>\` para tachar texto.
        
        \`\`\`html
        <u>Subrayado</u>
        <s>Tachado</s>
        \`\`\`
        
        #### Small
        
        La etiqueta \`<small>\` muestra el texto un poco más pequeño que el tamaño por defecto.
        
        \`\`\`html
        <small>Soy más pequeño</small>
        \`\`\`
        
        ### (Un plus) Contenedor básico en HTML
        
        Utilizamos la etiqueta \`<div>\` como contenedor. Los contenedor se consideran elementos de bloque.
        
        \`\`\`html
        <div>
            <span>Hola mundo</span>
            <span>Otro texto</span>
        </div>
        \`\`\`

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/bd572bc3a0a846ad4c677058c87573d2" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/7cdffa6bb88e966909a0e35d4bc9fa5d" target="_blank">Desarrollo del **Tablero de Tareas**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/Ta7JUgMfcr0?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 5,
    courseId: 1,
    title: {
      es: "Listas",
      en: "List",
    },
    content: {
      es: `
        En HTML podemos tener 3 tipos de listas. Siendo estos las descriptivas, ordenadas y no ordenadas.
        
        ### Lista Descriptiva
        
        Esta lista es bastante útil cuando queremos crear algo parecido a un diccionario, donde tendremos los conceptos y su significado. Para este tipo de lista, utilizamos la etiqueta \`<dl>\` (Description List).
        
        \`\`\`html
        <dl>
            <dt>Lunes</dt>
            <dd>El primer día de la semana.</dd>
            <dt>Martes</dt>
            <dd>El segundo día de la semana.</dd>
            <!-- ... -->
        </dl>
        \`\`\`
        
        ### Listas Ordenadas
        
        Estas listas las utilizamos cuando necesitamos varios elementos que estén ordenados. Utilizamos la etiqueta \`<ol>\` (Ordered List) y la etiqueta \`<li>\` (List Item).
        
        \`\`\`html
        <ol>
            <li>Lunes</li>
            <li>Martes</li>
            <li>Miércoles</li>
            <li>Jueves</li>
            <li>Viernes</li>
            <li>Sábado</li>
            <li>Domingo</li>
        </ol>
        \`\`\`
        
        Podemos especificar el tipo de notación con el atributo \`type\`, por ejemplo:
        
        \`\`\`html
        <ol type="a">
            <li>Lunes</li>
            <li>Martes</li>
            <!-- ... -->
        </ol>
        \`\`\`
        
        También, el atributo \`reversed\` para invertir el orden, como este es **booleano** no lleva valor, es solo especificarlo.

        \`\`\`html
        <ol reversed>
            <li>Lunes</li>
            <li>Martes</li>
            <!-- ... -->
        </ol>
        \`\`\`
        
        ### Listas No Ordenadas
        
        Estas listas las utilizamos cuando los elementos no requieren un orden específico. Utilizamos la etiqueta \`<ul>\` (Unordered List) y la etiqueta \`<li>\` (List Item).
        
        \`\`\`html
        <ul>
            <li>Pepe</li>
            <li>Juan</li>
            <!-- ... -->
        </ul>
        \`\`\`
        
        Podemos personalizar el estilo de la lista cambiando el tipo de viñeta con el atributo \`type\`.

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/93e75450aa77cd967b04949c5c3daf68" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/af502f0e99295f9c34c7ce082ddf1998" target="_blank">Desarrollo del **Menú Lateral**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/0a8kjLjNfh4?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 6,
    courseId: 1,
    title: {
      es: "Navegación",
      en: "Navigation",
    },
    content: {
      es: `
        ### ¿Qué son los hipervínculos?

        Los hipervínculos, también reconocidos como enlaces o links, constituyen elementos interactivos fundamentales en una página web, posibilitando la navegación fluida de un punto a otro. Estos recursos no solo encuentran aplicación dentro de nuestro propio sitio web, sino que también son empleados para vincularse con páginas externas, creando una red de conexiones.
        
        ### Creando un hipervínculo
        
        La creación de un hipervínculo en HTML se lleva a cabo mediante la implementación de la etiqueta \`<a>\`. Tomemos como ejemplo la vinculación con una página de ayuda:
        
        \`\`\`html
        <a href="ayuda.html" title="Ir a la página de ayuda">Acceder a la ayuda</a>
        \`\`\`
        
        En este caso, el atributo \`href\` define la ubicación de destino del enlace, ya sea una página interna de nuestro proyecto HTML o un recurso externo. Adicionalmente, hemos incorporado el atributo \`title\`, que proporciona un texto descriptivo emergente cuando se coloca el cursor sobre el enlace.
        
        ### Enlazando a una página externa
        
        La vinculación a páginas externas, como en el caso de Facebook, requiere la utilización del atributo \`target\` con el valor \`_blank\`, asegurando que la página se abra en una nueva pestaña del navegador y no reemplace la actual.
        
        \`\`\`html
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Ir al Facebook</a>
        \`\`\`
        
        Adicionalmente, hemos incluido los atributos \`rel="noopener noreferrer"\`, recomendados para mejorar la seguridad al abrir enlaces externos desde nuestra página.
        
        ### Contenido dentro de un hipervínculo
        
        Dentro de la etiqueta \`<a>\`, se tiene la flexibilidad de incorporar una variedad de elementos, como texto, imágenes, formularios, etc. Esto posibilita la creación de enlaces visualmente atractivos y dinámicos.
        
        \`\`\`html
        <a href="enlace..." title="Descripción del enlace">
            <!-- Otros elementos HTML, como imágenes, texto, formularios, etc. -->
        </a>
        \`\`\`
        
        Al emplear este enfoque, el contenido dentro del hipervínculo puede abarcar diversos elementos HTML, permitiendo una personalización completa de la apariencia y funcionalidad del enlace.

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/d339fa2e2b6ee60fd7d742565c39a452" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/2274d514c5d7aaef7d20f6af27717639#file-chat-html" target="_blank">Desarrollo de la **Página de Chat**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/4BiyEG_OWsE?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 7,
    courseId: 1,
    title: {
      es: "Imágenes",
      en: "Images",
    },
    content: {
      es: `
        Las imágenes son más que simples elementos visuales; son narradores de historias, expresan emociones y añaden un toque personal a nuestro contenido. En esta clase, aprenderemos a utilizar la etiqueta <img> de HTML para incorporar imágenes de manera efectiva en nuestro sitio web. Desde el control de dimensiones hasta la integración de hipervínculos, exploraremos cada detalle para llevar nuestras habilidades de desarrollo web al siguiente nivel.

        Los atributos más comunes que se usan en la etiqueta \`<img />\` son:

        - **src (source):** Este atributo especifica la dirección de nuestra imagen. Por ejemplo, usaremos la imagen "espacio.png".
        - **alt (contenido alternativo):** Brinda un texto alternativo en caso de que la imagen no se pueda mostrar. Además, es vital para dispositivos que no pueden mostrar imágenes o para personas con problemas visuales. En nuestro caso, estableceremos "Amigos en el espacio" como contenido alternativo.

        \`\`\`html
        <img src="espacio.png" alt="Amigos en el espacio">
        \`\`\`

        ### Controlando Dimensiones

        Para evitar que la imagen ocupe más o menos espacio del esperado, podemos especificar el ancho y el alto utilizando los atributos \`width\` y \`height\`. Esto garantiza una presentación visual agradable sin distorsionar la imagen.

        \`\`\`html
        <img src="espacio.png" alt="Amigos en el espacio" width="40%">
        \`\`\`

        \`\`\`html
        <img src="espacio.png" alt="Amigos en el espacio" height="50%">
        \`\`\`

        Es esencial recordar que forzar dimensiones inapropiadas puede distorsionar la imagen, y resolveremos este problema más adelante cuando exploremos los [estilos](/courses/css/classes/modelo-de-cajas).

        ### Buenas Prácticas

        Es importante destacar que la etiqueta \`<img>\` en HTML no requiere una etiqueta de cierre. Aunque es opcional, una buena práctica es agregar una barra inclinada al final (\`<img ... />\`).

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/96627a44812c2a6a4481ec9c8e458c46" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/32a2fad78e0805a46cadc279878a86e2" target="_blank">Agregando imágenes al Proyecto de Curso</a>
        - Imágenes utilizadas
            - [Amigos del espacio](https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/espacio.png)
            - [Gatito](https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen1.jpg)
            - [Perrito 1](https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen2.jpg)
            - [Perrito 2](https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen3.jpg)
            - [León](https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen4.jpg)
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/5fPZRK6WauE?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 8,
    courseId: 1,
    title: {
      es: "Tablas",
      en: "Tables",
    },
    content: {
      es: `
        ¿Cómo dar vida a tus datos, organizar la información de manera eficiente y mejorar la experiencia del usuario? En esta lección, aprenderemos a crear y gestionar tablas en HTML de una manera efectiva y dinámica.

        ### Creando una tabla básica en HTML

        Utilizamos la etiqueta \`<table>\` para crear nuestra tabla.

        \`\`\`html
        <table>
            <!-- ... -->
        </table>
        \`\`\`

        ### Descripción de la tabla en HTML
        Muchas veces queremos especificar cuál es el objetivo de la tabla y para eso vamos a utilizar la etiquet \`<caption>\`

        \`\`\`html
        <table>
        <caption>Listado de Empleados</caption>
        <!-- ... -->
        </table>
        \`\`\`

        ### Cabecera de la tabla en HTML

        Las tablas HTML suelen dividirse en tres secciones: cabecera, cuerpo y pie. Empezaremos con la cabecera, donde definiremos las **columnas** de nuestra tabla.

        \`\`\`html
        <table>
            <thead>
                <tr>
                    <th>Área</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                </tr>
            </thead>
        </table>
        \`\`\`

        ### Cuerpo de la tabla en HTML

        Ahora, agregaremos filas con información en la sección de cuerpo de la tabla. Utilizaremos las etiquetas \`<tbody>\` para el cuerpo en general, \`<tr>\` para las filas y \`<td>\` para las celdas, en HTML no definimos columnas como tal, sino que la combinación de filas y celdas dan como resultado columnas.

        \`\`\`html
        <table>
            <tbody>
                <tr>
                    <td>Diseño</td>
                    <td>José</td>
                    <td>Mesa Rodríguez</td>
                </tr>
                <!-- Puedes duplicar el <tr> y modificar los datos para agregar mas filas -->
            </tbody>
        </table>
        \`\`\`

        ### Pie de tabla en HTML

        Es poco común, pero algunas veces necesitamos agregar una parte inferior en nuestra tabla para mostrar alguna información consolidada. Por ejemplo totales, promedios, etc. Usamos la etiqueta \`<tfooter>\` para esto

        \`\`\`html
        <table>
            <tbody>
                <!-- ... -->
            </tbody>

            <tfooter>
                <tr>
                    <td>Total:</td>
                    <td>xxx</td>
                </tr>
            </tfooter>
        </table>
        \`\`\`

        ### Personalizando la tabla en HTML

        Para mejorar la visualización, podemos usar atributos como:
        - \`border\` para agregar un borde a la tabla, aunque generalmente esto lo hacemos con [estilos](/courses/css/classes/modelo-de-cajas) y no directamente en el HTML
        - \`colspan\` para fusionar celdas y que ocupen varias columnas
        - \`rowspan\` para fusionar celdas y que ocupen varias filas

        \`\`\`html
        <table border="2">
            <!-- ... -->
            <td colspan="2">Rodríguez</td>
            <!-- ... -->
        </table>
        \`\`\`

        Ejemplo con los elementos vistos:

        \`\`\`html
        <table border="2">
            <caption>Listado de empleados</caption>
            <thead>
            <th>Area</th>
            <th>Nombre</th>
            <th colspan="2">Apellidos</th>
            </thead>
            <tbody>
            <tr>
                <td>Disenno</td>
                <td>Jose</td>
                <td>Mesa</td>
                <td>Rodriguez</td>
            </tr>
            <tr>
                <td rowspan="3">Programacion</td>
                <td>Jose</td>
                <td>Mesa</td>
                <td>Rodriguez</td>
            </tr>
            <tr>
                <td>Jose</td>
                <td>Mesa</td>
                <td>Rodriguez</td>
            </tr>
            <tr>
                <td>Jose</td>
                <td>Mesa</td>
                <td>Rodriguez</td>
            </tr>
            <tr>
                <td>Calidad</td>
                <td>Jose</td>
                <td>Mesa</td>
                <td>Rodriguez</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>Total</td>
                <td colspan="3">5 empleados</td>
            </tr>
            </tfoot>
        </table>
        \`\`\`

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/f7a15618f231124d1ac16dea4b2353b1" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/e0805c6d1077884ede8fb522bb25a301" target="_blank">Agregando **Listado de Miembros**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/l3CLCfyHAWg?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 9,
    courseId: 1,
    title: {
      es: "Formularios",
      en: "Forms",
    },
    content: {
      es: `
        Los formularios son una parte fundamental de la interacción entre usuarios y aplicaciones web. En HTML, la creación y el diseño de formularios es esencial para recopilar datos de manera estructurada y eficiente. En esta clase, exploraremos los elementos asociados a los formularios en HTML.

        ### Creando la Base del Formulario
        
        Comencemos por la etiqueta \`<form>\`, la cual encierra todos los elementos del formulario. El atributo \`action\` indica a qué servidor se enviará la petición una vez completado el formulario, acompañado por el atributo \`method\` que define que [**método** o **verbo** HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) queremos usar para enviar la información, teniendo por defecto el valor \`get\`.
        
        \`\`\`html
        <form action="/ruta-del-servidor" method="post">
            <!-- Contenido del formulario -->
        </form>
        \`\`\`
        
        ### Campos en formularios HTML
        
        La etiqueta \`<input>\` es fundamental. Por defecto, su atributo \`type\` tiene valor \`text\`, pero esta es utilizada para la mayoría de tipos de campos de formularios. Los tipos más comunes serían:
        
        1. **text**: Campo de entrada de texto estándar.
        2. **password**: Campo de entrada de contraseña oculta.
        3. **number**: Campo de entrada numérico para valores.
        4. **checkbox**: Casilla de verificación que permite seleccionar múltiples opciones.
        5. **radio**: Botón de opción que permite seleccionar una opción de un grupo.
        6. **submit**: Botón para enviar el formulario.
        7. **reset**: Botón para restablecer los valores del formulario.
        8. **file**: Campo para seleccionar archivos locales.
        9. **date**: Campo de entrada de fecha.
        10. **email**: Campo de entrada para direcciones de correo electrónico.
        11. **url**: Campo de entrada para direcciones URL.
        12. **search**: Campo de búsqueda interactivo.
        13. **tel**: Campo de entrada para números de teléfono.
        14. **email**: Campo de entrada para correo electrónicos.
        
        
        ### Uso de "Etiquetas", mejorando la Accesibilidad
        
        Mejoramos la accesibilidad asociando etiquetas (no se refiere a etiqueta HTML, sino a una un elemento asociado a un campo de formulario). Para esto usamos la etiqueta \`<label>\` con los elementos del formulario mediante el atributo \`for\`, el valor de éste atributo tiene que ser el mismo que el valor del atributo \`id\` en el campo de formulario, ejemplo: **nombre_usuario**.
        
        \`\`\`html
        <label for="nombre_usuario">Nombre de Usuario:</label>
        <input type="text" id="nombre_usuario" />
        \`\`\`
        
        ### Agrupación de elementos
        
        Para evitar confusiones visuales, agrupamos elementos dentro de contenedores, utilizando la etiqueta \`div\` normalmente.
        
        \`\`\`html
        <div>
            <label for="nombre_usuario">Nombre de Usuario:</label>
            <input type="text" id="nombre_usuario" />
        </div>
        <div>
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" />
        </div>
        \`\`\`
        
        ### Elementos Numéricos, Checkboxes y Radios
        
        Añadimos un elemento de tipo número, checkboxes y radios al formulario
        
        \`\`\`html
        <form>
            <div>
                <label for="edad">Edad:</label>
                <input type="number" id="edad" />
            </div>
            <div>
                <p>Seleccione varias opciones para aprender:</p>
        
                <input type="checkbox" id="check_html" value="html" />
                <label for="check_html">HTML</label>
                <br />
                <input type="checkbox" id="check_html" value="css" />
                <label for="check_html">CSS</label>
                <br />
                <input type="checkbox" id="check_html" value="javascript" />
                <label for="check_html">Javascript</label>
            </div>
            <div>
                <p>Seleccione SOLO UNA opción para aprender:</p>
        
                <input type="radio" name="radio-lenguaje" id="radio-html" value="html" />
                <label for="radio-html">HTML</label>
                <br />
                <input type="radio" name="radio-lenguaje" id="radio-css" value="css"/>
                <label for="radio-css">CSS</label>
                <br />
                <input type="radio" name="radio-lenguaje" id="radio-javascript" value="javascript"/>
                <label for="radio-javascript">JavaScript</label>
            </div>
        </form>
        \`\`\`
        
        ### Campos que tienen su propia etiqueta
        
        Hay algunos campos que tienen su propia etiqueta en vez de usar \`<input>\` con algun \`type\` específico. Las más comunes son:
        
        - \`<select>\`: Agrega un selector con múltiple opciones
        - \`<textarea>\`: Agrega un campo de texto cuando el contenido es más largo que algunas palabras
        
        \`\`\`html
        <form>
            <label for="selector_lenguaje">Seleccione alguna opción a aprender:</label>
            <select id="selector_lenguaje">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">Javascript</option>
            </select>
        </form>
        \`\`\`
        
        \`\`\`html
        <form>
            <label for="parrafo">Escriba su párrafo:</label>
            <textarea  id="parrafo" cols="30" rows="10"></textarea>
        </form>
        \`\`\`
        
        Para todos los elementos que vimos se usa un atributo que va a ser el nombre de la variable que viaja hacia el servidor, este sería \`name\`.
        
        ### Validación de Formularios en HTML
        
        La validación de formularios es esencial para garantizar que los datos ingresados sean correctos y cumplan con los requisitos esperados. HTML proporciona funciones integradas para validar formularios de manera sencilla utilizando atributos como por ejemplo:
        
        - **required**: Especifica que un campo debe ser completado antes de enviar el formulario.
        - **pattern**: Para [expresiones regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions).
        - **min** y **max**: Especifican un valor mínimo y máximo en campos numéricos.
        
        \`\`\`html
        <form>
            <input type="text" name="nombre" required />
        
            <input type="text" name="cedula" pattern="[a-z]{7,10}" />
        
            <input type="number" name="edad" min="18" max="150" />
        </form>
        \`\`\`

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/5ba95703562050e5e9ed72c6060b1f31" target="_blank">Parte teórica</a>
        - <a href="https://gist.github.com/leosbelpoll/d9b3964e1efa89806f2f7a673864f9f0" target="_blank">Agregando formulario de **Búsqueda dinámica** y **Eliminar múltiple**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/-Il58AlPvs0?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 10,
    courseId: 1,
    title: {
      es: "HTML 5",
      en: "HTML 5",
    },
    content: {
      es: `
        Hasta hace algunos años, reinaba un contenedor omnipresente en el mundo web: la etiqueta \`<div>\`. En el pasado, para diseñar una página web, dividíamos sus partes con \`<div>\`s, y la identificación de cada sección se volvía un desafío para los desarrolladores. Sin embargo, HTML5 llegó para cambiar esto, con nuevas etiquetas con significado semántico para estructurar nuestra web.

        ### Nueva jerarquía de contenedores
        HTML5 trajo consigo una gama de elementos para facilitar la identificación y navegación en las páginas web. Vamos a sumergirnos en la estructura y descubrir cómo estos elementos mejoran la indexación de contenido por parte de los motores de búsqueda.

        #### Navegación
        En lugar de depender solo de \`<div>\`s, ahora utilizamos \`<nav>\` para definir áreas de navegación. Esto proporciona claridad sobre el propósito del contenido y su relación con la navegación.

        #### Cabecera
        La etiqueta \`<header>\` reemplaza a las \`<div>\`s que solíamos usar para la parte superior de la página. Ahora, el contenido del encabezado no solo es más semántico sino también más fácil de identificar.

        #### Contenido Principal
        La etiqueta \`<main>\` se convierte en el contenedor principal para todo el contenido importante de la página. Esto mejora la indexación y claridad en la jerarquía de la página.

        #### Secciones Específicas
        Dentro de \`<main>\`, utilizamos la etiqueta \`<section>\` para dividir el contenido en secciones más específicas. Esto hace que la estructura sea más organizada y comprensible.

        #### Artículos
        Los elementos específicos dentro de las secciones se representan con la etiqueta \`<article>\`. Esto es especialmente útil para contenidos repetitivos o similares.

        #### Pie de Página
        La etiqueta \`<footer>\` engloba la información del pie de página. Es el lugar adecuado para ubicar elementos relacionados con el cierre de la página.

        HTML5 no solo ha revolucionado la forma en que estructuramos nuestras páginas web, sino que también ha introducido características avanzadas, como imágenes responsivas y una mejor integración con el almacenamiento del navegador. Estos temas avanzados los exploraremos en cursos futuros.

        ### Recursos utilizados en la clase

        - <a href="https://www.w3.org/TR/html5-diff/" target="_blank">Profundizar mucho más en HTML 5</a>
        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-tareas-html" target="_blank">Modificación del **Tablero de tareas**</a> - Proyecto de Curso
        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-miembros-html" target="_blank">Modificación del **Listado de miembros**</a> - Proyecto de Curso
        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-chat-html" target="_blank">Modificación de la **Página de Chat**</a> - Proyecto de Curso
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/1YoGeG7ikuY?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 11,
    courseId: 1,
    title: {
      es: "Proyecto de Curso",
      en: "Course Project",
    },
    content: {
      es: `

        Los videos van a reproducir solo la parte relacionada con el proyecto de curso. Si tienes duda en algo puedes ir a la clase específica.

        <br/>

        ### Presentación del proyecto de curso

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/1L_ZrxDami4?&theme=dark&autohide=2&start=9&end=90"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        <br/>
        
        - [Figma link con el diseño](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa092cU1hbzJRZ242UWM4ckE5VkEyQnV6UjRLZ3xBQ3Jtc0tscUU3ZmJlcXFfeEJqM2Y2UE44REdzMmEyeHBEV0lwUWZKa3l4OXBBT2FEbUtkUHlTZDlPWmJjWTVtUkItbFNkMHlWOGZpSWhqTHJEaUk0MllGd3B2bnlkUkpBalRxa2FLMnEwM18wdlhmWDFQb0ZWWQ&q=https%3A%2F%2Fwww.figma.com%2Fproto%2F5awPw6MrqyLpvVNdLy3lag%2FCurso-de-HTML-para-principiantes%3Ftype%3Ddesign%26node-id%3D1-2%26t%3D2CUAijwcGwTxTUAi-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign&v=1L_ZrxDami4)
        
        <br/>
        <br/>

        ### Tablero de tareas

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/Ta7JUgMfcr0?&theme=dark&autohide=2&start=776&end=1439"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/7cdffa6bb88e966909a0e35d4bc9fa5d" target="_blank">Código del **Tablero de Tareas**</a>

        <br/>
        <br/>

        ### Menú Lateral

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/0a8kjLjNfh4?&theme=dark&autohide=2&start=401&end=592"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/af502f0e99295f9c34c7ce082ddf1998" target="_blank">Código del **Menú Lateral**</a>

        <br/>
        <br/>

        ### Agregando Navegación

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/4BiyEG_OWsE?&theme=dark&autohide=2&start=357&end=516"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/2274d514c5d7aaef7d20f6af27717639#file-chat-html" target="_blank">Código de la **Página de Chat**</a>

        <br/>
        <br/>

        ### Agregando Imágenes

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/5fPZRK6WauE?&theme=dark&autohide=2&start=185&end=425"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/32a2fad78e0805a46cadc279878a86e2" target="_blank">Código agregando imágenes al Proyecto de Curso</a>
        - Imágenes utilizadas
            - <a target="_blank" href="https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen1.jpg">Gatito</a>
            - <a target="_blank" href="https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen2.jpg">Perrito 1</a>
            - <a target="_blank" href="https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen3.jpg">Perrito 2</a>
            - <a target="_blank" href="https://como-programar-resources.vercel.app/spanish/courses/html-beginners/images/imagen4.jpg">León</a>

        <br/>
        <br/>

        ### Agregando Listado de Miembros

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/l3CLCfyHAWg?&theme=dark&autohide=2&start=466&end=795"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/e0805c6d1077884ede8fb522bb25a301" target="_blank">Código del **Listado de Miembros**</a>

        <br/>
        <br/>

        ### Formulario para búsqueda y eliminar elementos

        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/-Il58AlPvs0?&theme=dark&autohide=2&start=1110&end=1436"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/d9b3964e1efa89806f2f7a673864f9f0" target="_blank">Código con formulario de **Búsqueda dinámica** y **Eliminar múltiple**</a>

        <br/>
        <br/>
        
        ### Agregando los elementos de HTML 5
        
        <style>.youtube-iframe{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.youtube-iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="youtube-iframe"><iframe width='500' height='294' src="https://www.youtube.com/embed/1YoGeG7ikuY?&theme=dark&autohide=2&start=321&end=654"frameborder="0"></iframe></div><div style='font-size: 0.8em'></div>
        
        <br/>

        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-tareas-html" target="_blank">Código actualizando el **Tablero de tareas**</a>
        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-miembros-html" target="_blank">Código actualizando el **Listado de miembros**</a>
        - <a href="https://gist.github.com/leosbelpoll/3fdb85c5a5fb26fee9011ccbc108f920#file-chat-html" target="_blank">Código actualizando la **Página de Chat**</a>
      `,
      en: "",
    },
  },
  {
    id: 12,
    courseId: 1,
    title: {
      es: "Que sigue?",
      en: "What's next?",
    },
    content: {
      es: `
        En este episodio de despedida, descubrirás dos atributos cruciales que no exploramos intencionalmente durante el curso, pero que se convertirán en herramientas fundamentales en tus futuros proyectos: \`id\` y \`class\`. Estos no solo te permitirán identificar elementos de manera única (\`id\`) sino también agrupar varios elementos bajo un mismo concepto (\`class\`), brindándote un control más preciso y eficiente sobre el comportamiento y estilo de tus elementos. Éstos los estaremos analizando a profundidad en los cursos de [CSS](/courses/css) y Javascript (Curso en progreso).

        ### Documentación Oficial

        El sitio de [desarrolladores de Mozilla](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML) y también [W3 Schools](https://www.w3schools.com/html/default.asp) se erigen como una fuente invaluable de tutoriales, referencias y guías que te acompañarán en tu trayecto de programación.

        ### Siguiente Paso: Explorando Caminos

        Ahora que has dominado la esencia de HTML, es el momento de reflexionar sobre tu futuro en el desarrollo web. Te ofrezco un consejo: visualiza cinco o seis páginas web que desearías crear y ¡manos a la obra! No te obsesiones con la estética en este punto, recuerda que HTML se centra en el contenido.

        Después de HTML, el horizonte se abre en varias direcciones:

        ##### 1. CSS: Estilo Personalizado

        Si eres un diseñador gráfico experimentado o posees ideas claras sobre el diseño de tu sitio, adéntrate en [CSS](/courses/css). Dedica unas semanas a aprender este lenguaje para dotar a tus páginas web con estilos únicos y personalizados.

        ##### 2. Librerías de CSS: Resultados Rápidos y Atractivos

        Si buscas un camino más rápido para lograr páginas visualmente atractivas con poco esfuerzo, las librerías de CSS son tu mejor aliado. Recomiendo especialmente Bootstrap (Curso en progreso), una librería popular que ofrece recursos abundantes y componentes predefinidos para agilizar tu proceso de desarrollo.

        ##### 3. Javascript

        Si ya sabes cómo dar estilos a tu página, o si no es algo que necesitas ahora mismo sino que quieres aprender a darle vida a tus páginas para que éstas sean interactivas, te recomiendo el curso de Javascript (Curso en progreso)

        ---
        **¡Gracias por acompañarme en este curso HTML!**
        
        ¡Nos vemos en el próximo desafío de programación!
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/9KF4ZzL4_qw?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 12,
    courseId: 2,
    title: {
      es: "Incluyendo estilos",
      en: "Including styles",
    },
    content: {
      es: `
        Vamos a explorar las tres formas de incorporar CSS en nuestras páginas web. Descubriremos las ventajas y desventajas de cada método para que puedas tomar decisiones informadas en tu desarrollo web.

        ## Método 1: Estilos en Línea

        La primera técnica que exploraremos es la asignación de estilos en línea. Al agregar el atributo \`style\` a un elemento, podemos personalizar su apariencia de manera rápida y directa. Sin embargo, esta metodología presenta limitaciones cuando lidiamos con múltiples elementos similares. Imagina tener que copiar y pegar estilos repetitivos en cada uno, ¡un trabajo tedioso y propenso a errores!

        \`\`\`html
        <p style="color: red; background: yellow">Este párrafo va a tener el fondo amarillo con el color rojo</p>
        \`\`\`

        ## Método 2: Estilos Internos

        El segundo enfoque es la aplicación de estilos internos. Mediante la etiqueta \`<style>\` dentro del elemento \`<head>\`, podemos especificar estilos para elementos específicos. Aunque más organizado que el método en línea, este enfoque puede volverse engorroso en proyectos extensos, donde la mezcla de estilos y contenido puede dificultar el mantenimiento y la comprensión del código. Además de imposibilitar reutilizar estilos de un fichero HTML a otro.

        \`\`\`html
        <html>
            <head>
                <style>
                    p {
                        color: red;
                        background: yellow;
                    }
                </style>
            </head>

            <body>
                <p>Este párrafo va a tener el fondo amarillo con el color rojo</p>
                <p>Este otro párrafo también va a tener los mismos estilos</p>
            </body>
        </html>
        \`\`\`

        ## Método 3: Estilos Externos

        Finalmente, llegamos al método externo, una práctica que revoluciona la eficiencia en el desarrollo web. Crearemos un archivo CSS independiente, en este caso, llamado \`index.css\`. Luego, mediante la etiqueta \`<link>\` en el \`<head>\`, vincularemos este archivo a nuestro HTML. Esto no solo organiza nuestro código de manera más clara, sino que también facilita la reutilización de estilos en múltiples páginas, evitando duplicaciones innecesarias.

        \`\`\`css
        /* Fichero index.css */

        p {
            color: red;
            background: yellow;
        }
        \`\`\`

        \`\`\`html
        <html>
            <head>
                <link rel="stylesheet" href="index.css" />
            </head>

            <body>
                <p>Este párrafo va a tener el fondo amarillo con el color rojo</p>
                <p>Este otro párrafo también va a tener los mismos estilos</p>
            </body>
        </html>
        \`\`\`

        ### Cascada de Estilos

        CSS, que significa Cascading Style Sheets (Hojas de Estilo en Cascada), opera de arriba hacia abajo. Cada instrucción sobrescribe a la anterior si se refiere al mismo elemento y estilo. Este principio de cascada nos permite controlar la apariencia de nuestros elementos de manera efectiva.

        Los párrafos van a ser de color verde en este caso:

        \`\`\`css
        p {
            color: red;
            background: yellow;
        }

        p {
            color: green;
        }
        \`\`\`
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/ELvgd1jAHvs?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 13,
    courseId: 2,
    title: {
      es: "Selectores CSS",
      en: "CSS Selectors",
    },
    content: {
      es: `
        Vamos a explorar los **selectores** en CSS de manera detallada, permitiéndote acceder y estilizar cada elemento de tu página de una manera que transformará la apariencia y comportamiento de tus componentes. Prepárate para descubrir nuevas formas de acceder a tus elementos que nunca imaginaste.

        ### 1. Selectores Simples

        Comenzaremos nuestro viaje explorando los selectores simples, permitiéndonos darle estilo a todos los elementos de la misma etiqueta. Veremos cómo, con tan solo especificar la etiqueta, podemos transformar la apariencia de nuestros componentes.

        \`\`\`css
        li {
            color: red;
        }
        \`\`\`

        También podemos especificar todos los elementos que tienen una determinada clase o un elemento específico por su identificador.

        \`\`\`css
        /* Todos los elementos que tengan clase activo, no importa la etiqueta que sean */
        .activo {
            color: green;
        }

        /* Todos los elementos de tipo p que tengan clase activo */
        p.activo {
            color: yellow;
        }

        /* El único elemento que tenga como identificador cabecera */
        #cabecera {
            color: orange;
        }
        \`\`\`

        ### 2. Selectores Combinadores

        Avanzaremos hacia los selectores combinadores, aprendiendo a especificar estilos para los descendientes de un elemento. Descubriremos cómo utilizar el espacio y los símbolos \`>\`, \`+\`, y \`~\` para afectar únicamente a ciertos elementos relacionados.

        \`\`\`css
        /* index.css */

        /* Afecta a todos los <li> dentro de cualquier <ul> */
        ul li {
            color: grey;
        }

        /* Afecta a todos los <li> que sean hijos inmediatos de cualquier <ul> que tenga clase en-progreso */
        ul.en-progreso > li {
            color: green;
        }

        /* Afecta a todos los <li> hermanos, que estan después de cualquier <li> con clase siendo-atendido */
        li.siendo-atendido ~ li {
            color: blue;
        }

        /* Afecta solo al próximo <li> hermano, que estan después de cualquier <li> con clase siendo-atendido */
        li.siendo-atendido + li {
            color: orange;
        }
        \`\`\`

        \`\`\`html
        <html>
            <head>
                <link rel="stylesheet" href="index.css" />
            </head>

            <body>
                <ul class="lista-principal">
                    <li>Sala A</li> <!-- grey -->
                    <ul>
                        <li>Tomás</li> <!-- grey -->
                        <li>Luisi</li> <!-- grey -->
                    </ul>
                    <li>Sala B</li> <!-- grey -->
                    <ul class="en-progreso">
                        <li>Juan</li> <!-- green -->
                        <li class="siendo-atendido">Carlos</li> <!-- green -->
                        <li>Manuel</li> <!-- orange -->
                        <li>Pepe</li> <!-- blue -->
                        <li>Joaquin</li> <!-- blue -->
                    </ul>
                </ul>
            </body>
        </html>
        \`\`\`

        ### 3. Selectores de Pseudo Elementos: Partes de un elemento

        Estos nos permiten dar estilos específicos a partes de nuestros elementos, utilizando \`::before\`,  \`::after\`, \`::first-line\`, \`::first-letter\`, etc

        \`\`\`css
        /* 
            Agregar algun contenido con estilos sin tener que tocar el HTML
            A los <li class="proxima-persona">, se le va a agregar automáticamente algún contenido con estilos
        */
        li.proxima-persona::after {
            content: "➡️ Vaya preparándose ";
            background: yellow;
            color: red;
        }
        \`\`\`

        \`\`\`css
        /* Hacer la primera letra de todos los párrafos más grande */
        p::first-letter {
            font-size: 3em;
        }
        \`\`\`

        ### 4. Pseudo Clases: Estados de un elemento

        Las pseudo clases nos van a permitir acceder a elementos en estados específicos, como \`:hover\`, \`:focus\`, \`:invalid\`, etc.

        \`\`\`css
        /* Modificar el background de los botones cuando le pase el mouse por encima */
        button:hover {
            background: green;
        }

        /* Cambiar el estilo del elemento de formulario mientras esté enfocado */
        input:focus {
            background: yellow;
            color: red;
        }

        /*
            Cambiar el estilo del elemento de formulario mientras sea inválido
            Ejemplo:
            - Está vacio cuando es requerido
            - El valor numérico es menor a mayor al mínimo o máximo requerido
        */
        input:invalid {
            border: 2px dashed red;
        }

        /* Cambiar el estilo de las filas pares dentro de una tabla */
        table tr:nth-child(2n) {
            background: grey;
        }
        \`\`\`

        ### 5. Selectores de Atributos

        Nos permite seleccionar elementos basados en la presencia o valor de sus atributos

        \`\`\`css
        /* Modificar el estilo de los links que contengan el atributo target */
        a[target] {
            color: green;
        }

        /* Modificar el estilo de los links que contengan el atributo target con valor _blank */
        a[target="_blank"] {
            color: violet;
        }

        /* Modificar el estilo de los links que contengan el atributo href y que el valor comience por https:// */
        a[href^="https://"] {
            color: blue;
        }
        \`\`\`

        ### 6. Selector Universal y Agrupación de Selectores

        Finalmente, exploraremos el poder del selector universal, afectando a todos los elementos de la página. Además, descubriremos cómo agrupar selectores, aplicando estilos similares a varios elementos de manera eficiente.

        \`\`\`css
        /* A todos los elementos de la página aplica margen 0 */
        * {
            margin: 0;
        }

        /* Aplicar estilos a varios tipos de selectores separandolos por coma, en este caso a todos los <p> pero también a todos los <h3> */
        p, h3 {
            color: red;
        }
        \`\`\`

        Solo te mostré algunos de los ejemplos por cada categoría de selectores, pero puedes profundizar en <a target="_blank" href="https://www.w3schools.com/css/css_selectors.asp">la documentación</a>.
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/rXuB6a56DR8?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 14,
    courseId: 2,
    title: {
      es: "Colores",
      en: "Colors",
    },
    content: {
      es: `
        Vamos a explorar cómo transformar el diseño de una página web, centrándonos específicamente en la manipulación de colores. Descubriremos las propiedades más utilizadas y los diferentes tipos de valores que podemos asignar a estas propiedades para dar vida a nuestros elementos.

        ### Propiedades relacionadas con colores más comunes

        #### Color del texto

        Comencemos por cambiar el color del texto en nuestra página. Utilizaremos la propiedad \`color\`

        \`\`\`css
        body {
            color: red;
        }
        \`\`\`

        #### Color de fondo

        La propiedad \`background\` nos permite modificar el fondo de los elementos. Experimentaremos con colores sólidos y, como un extra, exploraremos los elegantes degradados.

        \`\`\`css
        body {
            background: red;
        }
        \`\`\`

        \`\`\`css
        body {
            background: linear-gradient(#e66465, #9198e5);
        }
        \`\`\`

        #### Bordes

        Otra de las propiedades comunes es \`border\`, esta nos permite agregarle un borde a los contenedores. Su valor está compuesto por el tamaño, el estilo y el color del borde.

        \`\`\`css
        .button {
            border: 2px solid white;
        }
        \`\`\`

        #### Añadiendo Sombras y Efectos

        Demos un toque de profundidad a nuestros elementos. La propiedad \`box-shadow\` nos permitirá crear sombras con diferentes desplazamientos y difuminaciones a los cajas contenedoras. Su valor se compone por desplazamiento en el eje de las X, luego el eje de las Y, difuminación y por último color.

        \`\`\`css
        .activo {
            box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
        }
        \`\`\`

        También podemos añadirle sombra a los textos con la propiedad \`text-shadow\`. Su valor esta compuesto de la misma manera que \`box-shadow\`

        \`\`\`css
        .super-texto {
            text-shadow: 5px 5px 0px red;
        }
        \`\`\`

        ### Tipos de valores que pueden generar color

        Seguramente cuando viste en los ejemplos anteriores te quedó la duda que significaba \`#e66465\` o \`rgba(0, 0, 0, 0.2)\`. Y es que en CSS tenemos varias maneras de lograr algún color específico.

        #### Colores nombrados

        Existe una gran variedad de <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">colores nombrados</a>. Básicamente el valor seria como su significado en Inglés. Con algunas variaciones cuando es más claro u oscuro. Por ejemplo: \`blue\`, \`lightblue\` y \`darkblue\`.

        Hay un valor nombrado en específico que es bastante especial, y estamos hablando de \`transparent\`. Cuando este valor está asignado simplemente será invisible. Es bastante útil para algunas técnicas con bordes, degradados, etc.

        #### Valores hexadecimales

        El <a target="_blank" href="https://es.wikipedia.org/wiki/Sistema_hexadecimal">sistema hexadecimal</a> es bastante común usado en los colores CSS. Este se puede usar de varias maneras pero básicamente representa la combinación de los colores primarios RGB (Red, Green and Blue) además de el canal alpha (A) para lograr cierto nivel de transparencia. Podemos encontrarnos con las siguientes sintaxis:

        \`\`\`text
        #RGB        // 3 valores
        #RGBA       // 4 valores
        #RRGGBB     // 6 valores
        #RRGGBBAA   // 8 valores
        \`\`\`

        #### Funciones RGB y RGBA

        Algo parecido a lo de arriba pero esta vez se usa específicamente las funciones pasándoles los valores desde 0 a 255. En el caso de \`rgb(25, 70, 87)\` le estamos pasando desde el rango de 0 a 255, 25 de rojo, 70 de verde y 87 de azul. Si queremos pasarle transparencia usamos la función \`rgba(25, 70, 87, 0.5)\`, el último valor significa un 50% de transparencia.

        Hay muchísimos más tipos de propiedades y valores para los colores, pero los mencionados son los que utilizarán la mayoría del tiempo. Pueden usar <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">la documentación</a> en caso quieran profundizar.
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/bI4Zc9dDRMI?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 15,
    courseId: 2,
    title: {
      es: "Modelo de Cajas",
      en: "Box Model",
    },
    content: {
      es: `
        El conocimiento del Modelo de Cajas en CSS (Box Model) es esencial para crear diseños web atractivos, funcionales y compatibles. Permite a los desarrolladores tener un control granular sobre el diseño y resolver eficientemente problemas relacionados con el espacio y la presentación visual en diferentes contextos de navegación.

        ### Conceptos Fundamentales

        El Modelo de Cajas se basa en cuatro elementos clave: **contenido**, **padding**, **border**, y **margen**. Comprender estos elementos es esencial para lograr diseños limpios y atractivos, ya que el espacio entre nuestros elementos juega un papel crucial.

        #### Espacios y Direcciones

        Cuando hablamos del Modelo de Cajas, nos referimos a dos direcciones desde el borde. Hacia adentro, encontramos el **padding**, que es el espacio entre el borde y el contenido. Hacia afuera, tenemos el **margen**, que afecta la relación con otros elementos.

        ### Atributos relacionados

        #### Ancho y Alto

        Cuando éstos no se definen los contenedores van a crecer según el contenido, pero una vez definidos se restringe a que un contenedor se comporte con cierto ancho (\`width\`) y alto (\`height\`).

        \`\`\`css
        .tarjeta {
            width: 250px;
            height: 400px;
        }
        \`\`\`

        #### Borde

        \`\`\`css
        .tarjeta {
            border: 5px solid white;
        }
        \`\`\`

        #### Padding

        La mayoría de las veces vamos a querer cierto espacio entre el borde y el contenido para que no aparezca todo pegado.

        \`\`\`css
        .tarjeta {
            padding: 20px;
        }
        \`\`\`

        #### Margin

        Otras veces vamos a querer cierto espacio entre el borde de nuestro contenedor y el borde de los otros contenedores que lo rodean.

        \`\`\`css
        .tarjeta {
            margin: 20px;
        }
        \`\`\`

        Para asignarle el valor del \`padding\` y \`margin\` podemos hacerlo de varias maneras.

        \`\`\`text
        padding: 10px; // Significa 10px arriba, a la derecha, abajo y a la izquierda

        padding: 5px 10px; // Significa 5px arriba y abajo y 10px a la izquierda y derecha

        margin: 5px 10px 0 10px; // Significa 5px arriba, 10px a la derecha, 0 abajo y 10px a la izquierda
        \`\`\`

        Tambien existen propiedades específicas para referirse a que lado queremos asignarle el valor, siendo estas \`padding-top\`, \`padding-left\`, \`padding-right\`, y \`padding-bottom\`. Los mismos prefijos aplican para el \`border\` y \`margin\`.

        ### Tamaño total

        El tamaño total de un contenedor está dado por \`contenido + padding + border + margin\`, algunas veces queremos que si le damos un ancho fijo a nuestras cajas que este no se vea afectado por alguna otra propiedad de espaciado. Para lograr esto usamos la propiedad \`box-sizing: border-box\`.
      `,
      en: "",
    },
    video: {
      es: "https://www.youtube.com/embed/vBC0O7R-ge0?si=utm_source=comoprogramar.dev",
    },
  },
  {
    id: 16,
    courseId: 2,
    title: {
      es: "Textos",
      en: "Text",
    },
    video: {
      es: "https://www.youtube.com/embed/wULdNNzm4EU?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
        Cuando se trata de aplicar estilo al texto en CSS, existen varias propiedades que puedes usar para controlar la fuente, el tamaño, el color, el espaciado y otros aspectos del texto. A continuación te dejo una descripción general de las propiedades clave relacionadas con el texto en CSS:

        1. **Propiedades Básicas de Texto:**
          - \`font-family\`: Define la fuente del texto.
          - \`font-size\`: Establece el tamaño del texto.
          - \`font-weight\`: Define el grosor del texto (por ejemplo, normal, negrita).
          - \`font-style\`: Especifica el estilo del texto (por ejemplo, normal, italic).

            \`\`\`css
            body {
              font-family: 'Arial', sans-serif;
              font-size: 16px;
              font-weight: normal;
              font-style: italic;
            }
            \`\`\`

        2. **Sombra de Texto:**
          - \`text-shadow\`: Agrega sombra al texto.

            \`\`\`css
            h1 {
              text-shadow: 2px 2px 4px #000;
            }
            \`\`\`

        3. **Decoraciones de Texto:**
          - \`text-decoration\`: Puede ser usado para agregar o quitar decoraciones como subrayado.
          - \`text-transform\`: Cambia el caso del texto (mayúsculas, minúsculas, capitalización).

            \`\`\`css
            a {
              text-decoration: none; /* Elimina el subrayado en los enlaces */
            }

            h2 {
              text-transform: uppercase; /* Convierte el texto a mayúsculas */
            }
            \`\`\`

        4. **Espaciado y Alineación:**
          - \`line-height\`: Establece la altura de línea del texto.
          - \`letter-spacing\`: Controla el espaciado entre caracteres.
          - \`word-spacing\`: Controla el espaciado entre caracteres.
          - \`text-align\`: Define la alineación del texto (izquierda, derecha, centrado, justificado).

            \`\`\`css
            p {
              line-height: 1.5;
              letter-spacing: 1px;
              text-align: justify;
            }
            \`\`\`



        Estos son solo algunos ejemplos básicos. CSS ofrece muchas más propiedades y opciones para estilizar el texto. Además, ten en cuenta que las propiedades pueden ser combinadas para lograr efectos más complejos.

        ### Recursos utilizados en la clase

        - <a href="https://gist.github.com/leosbelpoll/6aa65282166cb26dff0616af9af275a9#file-index-css" target="_blank">Fichero CSS</a>
        - <a href="https://gist.github.com/leosbelpoll/6aa65282166cb26dff0616af9af275a9#file-index-html" target="_blank">Fichero HTML</a>
      `,
    },
  },
  {
    id: 17,
    courseId: 2,
    title: {
      es: "Hipervínculos",
      en: "Links",
    },
    video: {
      es: "https://www.youtube.com/embed/fv3Bo_WVyaw?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
        Los hipervínculos en CSS (Cascading Style Sheets) son utilizados para estilizar y dar formato a los enlaces en una página web. Aquí hay algunos conceptos clave que debes conocer sobre hipervínculos en CSS:

        1. **Selección de enlaces:**
          Puedes seleccionar y aplicar estilos a diferentes estados de un enlace, como enlace no visitado, enlace visitado, enlace activo y enlace al pasar el mouse. Puedes hacer esto utilizando pseudo-clases:
        
          \`\`\`css
          /* Enlace no visitado */
          a:link {
            color: #0077cc;
          }
        
          /* Enlace visitado */
          a:visited {
            color: #551a8b;
          }
        
          /* Enlace al pasar el mouse */
          a:hover {
            color: #ff0000;
          }
        
          /* Enlace activo (cuando se hace clic) */
          a:active {
            color: #00ff00;
          }
          \`\`\`
        
        2. **Estilos de texto:**
          Puedes aplicar estilos específicos de texto a los enlaces, como el color, la decoración y el tamaño de fuente:
        
          \`\`\`css
          /* Cambiar color de texto y quitar subrayado */
          a {
            color: #333;
            text-decoration: none;
          }
        
          /* Agregar subrayado al pasar el mouse */
          a:hover {
            text-decoration: underline;
          }
          \`\`\`
        
        3. **Estilos de fondo:**
          Además de los estilos de texto, también puedes aplicar estilos de fondo a los enlaces. Por ejemplo, puedes cambiar el color de fondo cuando se pasa el mouse sobre el enlace:
        
          \`\`\`css
          /* Cambiar color de fondo al pasar el mouse */
          a:hover {
            background-color: #f0f0f0;
          }
          \`\`\`
        
        4. **Estilos de borde:**
          Puedes aplicar estilos de borde a los enlaces para darles un aspecto más visual:
        
          \`\`\`css
          /* Agregar borde al pasar el mouse */
          a:hover {
            border: 1px solid #333;
          }
          \`\`\`
        
        5. **Otros estilos:**
          Puedes experimentar con otros estilos, como márgenes, rellenos y sombras, para personalizar aún más la apariencia de los enlaces.
        
          \`\`\`css
          /* Agregar sombra al pasar el mouse */
          a:hover {
            box-shadow: 2px 2px 5px #888888;
          }
          \`\`\`
        
        Recuerda que estos son solo ejemplos y puedes ajustar los valores según tus preferencias de diseño. Además, es importante considerar la accesibilidad al aplicar estilos a los enlaces para garantizar una buena experiencia para todos los usuarios.
        
        ### Recursos utilizados en la clase
        
        - <a href="https://gist.github.com/leosbelpoll/3696a05f71c82f3909169a1de5bc342b#file-index-css" target="_blank">Fichero CSS</a>
        - <a href="https://gist.github.com/leosbelpoll/3696a05f71c82f3909169a1de5bc342b#file-index-html" target="_blank">Fichero HTML</a>
      `,
    },
  },
  {
    id: 18,
    courseId: 2,
    title: {
      es: "Listas",
      en: "Lists",
    },
    video: {
      es: "https://www.youtube.com/embed/Py1nZxPJ9ec?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
        En HTML, hay dos tipos principales de listas: listas ordenadas (\`<ol>\`) y listas no ordenadas (\`<ul>\`). Dentro de estas listas, tienes elementos de lista (\`<li>\`). Aquí tienes un breve resumen de cómo puedes dar estilo a las listas con CSS:

        1. **Estilizando Listas:**
          - **Listas Ordenadas (\`<ol>\`):**
            \`\`\`css
            ol {
              /* Estilos para el contenedor de la lista ordenada */
            }

            ol li {
              /* Estilos para cada elemento de lista en la lista ordenada */
            }
            \`\`\`

          - **Listas No Ordenadas (\`<ul>\`):**
            \`\`\`css
            ul {
              /* Estilos para el contenedor de la lista no ordenada */
            }

            ul li {
              /* Estilos para cada elemento de lista en la lista no ordenada */
            }
            \`\`\`

        2. **Estilos de Elementos de Lista:**
          - Puedes dar estilo a elementos de lista específicos (\`li\`) de manera diferente o aplicar estilos a todos los elementos de lista (\`ul\` o \`ol\`).

            \`\`\`css
            li {
              /* Estilos para todos los elementos de lista */
            }

            /* Estilizando elementos de lista específicos */
            li:nth-child(odd) {
              /* Estilos para elementos de lista con número impar */
            }

            li:nth-child(even) {
              /* Estilos para elementos de lista con número par */
            }
            \`\`\`

        3. **Estilos de Listas:**
          - Puedes personalizar la apariencia de los marcadores de lista tanto para listas ordenadas como para listas no ordenadas.

            \`\`\`css
            /* Personalizando marcadores de lista ordenada */
            ol {
              list-style-type: decimal; /* o lower-alpha, lower-roman, etc. */
            }

            /* Personalizando marcadores de lista no ordenada */
            ul {
              list-style-type: square; /* o circle, disc, etc. */
            }
            \`\`\`

          - Mover los marcadores afuera o dentro del contenedor de la lista

            \`\`\`css
              ul {
                list-style-position: inside; /* o outside. */
              }
            \`\`\`

          - Usar una imágen como marcador

            \`\`\`css
              ul {
                list-style-image: url('ruta-imagen');
              }
            \`\`\`

        4. **Eliminar Estilos Predeterminados de Lista:**
          - Si deseas eliminar los estilos predeterminados de la lista (como viñetas o números), puedes hacerlo.

            \`\`\`css
            /* Eliminar estilos predeterminados de listas ordenadas y no ordenadas */
            ul, ol {
              list-style: none;
            }
            \`\`\`

        5. **Personalizar Estilos Predeterminados de Lista:**
          - Si deseas personalizar los estilos predeterminados de la lista, puedes hacerlo.

            \`\`\`css
            /* Eliminar estilos predeterminados de listas ordenadas y no ordenadas */
            ul, ol {
              list-style-type: "<VALOR> ";
            }
            \`\`\`

            Donde \`<VALOR>\` puede ser casi cualquier cosa, podemos poner un unicode como estos 📬, podemos poner el unicode de alguna fuente específica como <a target="_blank" href="https://fontawesome.com/search?o=r&m=free&s=solid">FontAwesome</a> comenzando con \`\\\`

            Si usamos algún unicode desde una alguna fuente tenemos que especificarlo con la propiedad \`font-family\`

            \`\`\`css
            ul {
              list-style-type: "\\f005 ";
              font-family: FontAwesome
            }
            \`\`\`
            Si ves que no sale la estrella, es que la página no conoce aún esta fuente, podemos incluirla en el \`head\` de nuestra página \`html\`

            \`\`\`html
              <html>
                <head>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
                </head>

                <body>
                  .....
                </body>
              </html>
            \`\`\`

        6. **Usar el pseudo elemento ::marker**:
        - Tambien podemos usar el pseudo elemento \`::marker\` para personalizar tus elementos de lista, este debe ser aplicado a los \`li\`s

          \`\`\`css
          li::marker {
            content: "<VALOR> ";
          }
          \`\`\`
      `,
    },
  },
  {
    id: 19,
    courseId: 2,
    title: {
      es: "Posiciones",
      en: "Positions",
    },
    video: {
      es: "https://www.youtube.com/embed/MQuGqzuCkuA?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
        En CSS (Hojas de Estilo en Cascada), la posición es un aspecto crucial del diseño de la maquetación. Permite controlar la ubicación de los elementos en una página web. Hay varias propiedades de posicionamiento en CSS, cada una con un propósito específico. Aquí tienes un resumen de las principales propiedades de posicionamiento:

        1. **Posicionamiento Estático:**
          - Esta es la posición predeterminada para todos los elementos.
          - Los elementos se posicionan según el flujo normal del documento (es decir, el orden en el que aparecen en el HTML).

          \`\`\`css
          .ejemplo {
            position: static;
          }
          \`\`\`

        2. **Posicionamiento Relativo:**
          - Se posiciona en relación con su posición normal en el flujo del documento.
          - Usa las propiedades \`top\`, \`right\`, \`bottom\` e \`left\` para desplazar el elemento desde su posición normal.

          \`\`\`css
          .ejemplo {
            position: relative;
            top: 10px;
            left: 20px;
          }
          \`\`\`

        3. **Posicionamiento Absoluto:**
          - Se elimina del flujo normal del documento y se posiciona en relación con su ancestro posicionado más cercano (si lo hay) con una \`position\` diferente de \`static\`.
          - Si no se encuentra un ancestro posicionado, se posiciona en relación con el bloque contenedor inicial (por lo general, el elemento \`<html>\`).

          \`\`\`css
          .ejemplo {
            position: absolute;
            top: 50px;
            left: 100px;
          }
          \`\`\`

        4. **Posicionamiento Fijo:**
          - Se posiciona en relación con la ventana del navegador.
          - No se mueve aunque se haga scroll en la página.

          \`\`\`css
          .ejemplo {
            position: fixed;
            top: 0;
            right: 0;
          }
          \`\`\`

        5. **Posicionamiento Adhesivo (Sticky):**
          - Actúa como posicionamiento \`relative\` hasta que un elemento cruza un punto especificado durante el desplazamiento, luego se vuelve \`fixed\`.
          - Requiere la propiedad \`top\`, \`right\`, \`bottom\` o \`left\` para determinar el punto de adherencia.

          \`\`\`css
          .ejemplo {
            position: sticky;
            top: 20px;
          }
          \`\`\`

        6. **Índice Z:**
          - Determina el orden de apilamiento de elementos posicionados.
          - Los elementos con un valor de \`z-index\` más alto se apilan sobre aquellos con un valor más bajo.

          \`\`\`css
          .ejemplo {
            position: absolute;
            z-index: 2;
          }
          \`\`\`

        Entender estas propiedades de posicionamiento y técnicas de maquetación te dará las herramientas para crear diseños de página complejos y receptivos en CSS. Ten en cuenta que a menudo se utiliza una combinación de estas técnicas para lograr la maquetación deseada.
      `,
    },
  },
  {
    id: 20,
    courseId: 2,
    title: {
      es: "Unidades de medida",
      en: "Measure Units",
    },
    video: {
      es: "https://www.youtube.com/embed/dxB4Ue67dD8?si=utm_source=comoprogramar.dev",
    },
    content: {
      es: `
        En CSS, las unidades de medida se utilizan para definir el tamaño, la longitud y el espaciado de varios elementos en una página web. Hay varios tipos de unidades en CSS, y entenderlas es crucial para fines de estilo y diseño. Aquí hay una descripción general de las unidades de medida más comunes en CSS, junto con ejemplos adicionales y problemas comunes que podrías encontrar:

        1. **Unidades de Longitud Absoluta:**
          - **\`px\` (píxeles):** Un píxel es un punto único en una pantalla de computadora. Es una unidad de tamaño fijo y se utiliza comúnmente para especificar medidas precisas.
          - **\`in\` (pulgadas), \`cm\` (centímetros), \`mm\` (milímetros), \`pt\` (puntos), \`pc\` (picas):** Estas unidades son longitudes absolutas utilizadas típicamente para estilos de impresión. Ten en cuenta que su representación en una pantalla puede variar según el dispositivo del usuario.

        2. **Unidades de Longitud Relativa:**
          - **\`em\`:** La unidad \`em\` es relativa al tamaño de fuente del propio elemento. Si el tamaño de fuente de un elemento es de 16px, \`1em\` es igual a 16px.
          - **\`rem\`:** Similar a \`em\`, pero es relativo al tamaño de fuente del elemento raíz (generalmente el elemento \`<html>\`).
          - **\`%\` (porcentaje):** Relativo al elemento padre. Por ejemplo, si el ancho del elemento padre es de 200px y un elemento hijo tiene un ancho del 50%, el elemento hijo tendrá un ancho de 100px.

        3. **Longitudes en Porcentaje del Visor:**
          - **\`vw\` (ancho del visor):** 1vw es igual al 1% del ancho del visor. Por ejemplo, \`50vw\` sería la mitad del ancho del visor.
          - **\`vh\` (altura del visor):** Similar a \`vw\`, pero basado en la altura del visor en lugar del ancho.

        4. **Unidades de Posicionamiento Absoluto:**
          - **\`ex\`:** Representa la altura x de la fuente actual. Un \`ex\` suele ser la altura de una 'x' minúscula.
          - **\`ch\`:** Representa el ancho de 0 de la fuente actual. Un \`ch\` suele ser el ancho de un '0' (cero).

        Ejemplos adicionales:

        \`\`\`css
        /* Píxeles */
        div {
          width: 100px;
        }

        /* Em */
        p {
          font-size: 16px;
          margin-bottom: 1em; /* equivalente a 16px */
        }

        /* Porcentaje */
        section {
          width: 50%; /* 50% del ancho del elemento padre */
        }

        /* Ancho del Visor */
        header {
          width: 80vw; /* 80% del ancho del visor */
        }

        /* Flexbox */
        .container {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        \`\`\`

        Entender y utilizar estas unidades de manera efectiva te permite crear diseños flexibles y responsivos en CSS. Ten en cuenta que diferentes unidades son adecuadas para diferentes situaciones, y elegir la unidad correcta depende del contexto y los requisitos de diseño. 

        **Problemas Comunes:**
        1. **No entender la diferencia entre unidades absolutas y relativas.**
        2. **No considerar la accesibilidad al elegir tamaños de fuente y unidades.**
        3. **No tener en cuenta la variabilidad de las pantallas al usar unidades fijas.**
        4. **Sobrecargar el uso de píxeles en diseños responsivos.**
        5. **No tener cuidado al usar porcentajes en contextos de diseño complejos.**
        6. **Ignorar la importancia de las unidades relativas al diseño adaptable.**

        Recuerda ajustar tus elecciones de unidades según las necesidades específicas de tu diseño y considerar las mejores prácticas para garantizar una experiencia de usuario consistente y efectiva.
      `,
    },
  },
  {
    id: 21,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Variables",
      en: "Variables",
    },
  },
  {
    id: 22,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Transición y Animación",
      en: "Transition and Animation",
    },
  },
  {
    id: 23,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Flexbox",
      en: "Flexbox",
    },
  },
  {
    id: 24,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Diseño Responsivo",
      en: "Responsive Design",
    },
  },
  {
    id: 25,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Estilos compuestos",
      en: "Compound styles",
    },
  },
  {
    id: 26,
    courseId: 2,
    showSubscription: true,
    title: {
      es: "Proyecto de Curso",
      en: "Course project",
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
    content: {
      es: `
        ¡Aprende los fundamentos esenciales de HTML en nuestro curso introductorio! HTML, o HyperText Markup Language, es el lenguaje de marcado fundamental para crear páginas web. En este curso, te guiaremos a través de los conceptos básicos de HTML, desde la estructura de un documento HTML hasta la creación de enlaces y la inserción de imágenes. Desarrolla las habilidades necesarias para construir tus propias páginas web y da tus primeros pasos en el emocionante mundo del desarrollo web.
      `,
      en: "Learn the essential fundamentals of HTML in our introductory course! HTML, or HyperText Markup Language, is the fundamental markup language for creating web pages. In this course, we will guide you through the basics of HTML, from the structure of an HTML document to creating links and inserting images. Develop the skills needed to build your own web pages and take your first steps into the exciting world of web development.",
    },
    video: {
      es: "https://www.youtube.com/embed/zJTjsLCKzio?si=utm_source=comoprogramar.dev",
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
      es: "https://www.youtube.com/embed/D5VzGWgF_zk?si=utm_source=comoprogramar.dev",
    },
    content: {
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
      es: "Bootstrap",
      en: "Bootstrap",
    },
    thumbnail: "bootstrap",
    content: {
      es: "Domina el arte del diseño web responsivo con nuestro curso de Bootstrap. Bootstrap es un popular framework de desarrollo web que simplifica la creación de sitios web modernos y adaptables. En este curso, aprenderás a utilizar Bootstrap para crear diseños atractivos y funcionales de manera rápida y eficiente. Explorarás componentes preestablecidos, grillas responsivas y mucho más. Prepárate para perfeccionar tus habilidades de diseño web y ofrecer experiencias excepcionales en dispositivos de todos los tamaños con Bootstrap.",
      en: "Master the art of responsive web design with our Bootstrap course. Bootstrap is a popular web development framework that simplifies the creation of modern and adaptable websites. In this course, you will learn how to use Bootstrap to quickly and efficiently create attractive and functional designs. You will explore pre-built components, responsive grids, and much more. Get ready to hone your web design skills and deliver exceptional experiences on devices of all sizes with Bootstrap.",
    },
    background: "#7011f5",
    textColor: "white",
    tags: ["bootstrap", "css", "framework", "libreria", "frontend"],
    showSubscription: true,
  },
  {
    id: 4,
    title: {
      es: "JavaScript",
      en: "JavaScript",
    },
    thumbnail: "javascript",
    content: {
      es: "Descubre el poder de la programación web con nuestro curso de JavaScript. JavaScript es el lenguaje de programación que impulsa la interactividad en sitios web modernos. En este curso, te enseñaremos desde los conceptos básicos hasta las técnicas avanzadas de JavaScript. Aprenderás a crear funciones dinámicas, manipular elementos HTML, y desarrollar aplicaciones web interactivas. Prepárate para desbloquear nuevas posibilidades en el mundo de la programación web con JavaScript como tu herramienta principal.",
      en: "Discover the power of web programming with our JavaScript course. JavaScript is the programming language that drives interactivity on modern websites. In this course, we will teach you from the basics to advanced JavaScript techniques. You will learn how to create dynamic functions, manipulate HTML elements, and develop interactive web applications. Get ready to unlock new possibilities in the world of web programming with JavaScript as your primary tool.",
    },
    background: "#f7df1e",
    textColor: "black",
    tags: ["javascript", "js", "frontend"],
    showSubscription: true,
  },
  {
    id: 5,
    title: {
      es: "React",
      en: "React",
    },
    thumbnail: "react",
    content: {
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
    content: {
      es: "Explora el fascinante mundo del desarrollo de aplicaciones en el lado del servidor con nuestro curso de Node.js. Node.js es un entorno de tiempo de ejecución de JavaScript que te permite crear aplicaciones escalables y de alto rendimiento. En este curso, te sumergirás en los fundamentos de Node.js, aprenderás a construir servidores web, manipular bases de datos y desarrollar aplicaciones en tiempo real. Prepárate para adquirir las habilidades necesarias para construir aplicaciones robustas y eficientes en el lado del servidor con Node.js.",
      en: "Explore the fascinating world of server-side application development with our Node.js course. Node.js is a JavaScript runtime environment that allows you to create scalable and high-performance applications. In this course, you will delve into the fundamentals of Node.js, learn to build web servers, manipulate databases, and develop real-time applications. Get ready to acquire the skills needed to build robust and efficient server-side applications with Node.js.",
    },
    tags: ["nodejs", "runtime", "javascript", "js", "backend"],
    showSubscription: true,
  },
];
