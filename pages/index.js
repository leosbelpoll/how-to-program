import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";

import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      />

      <div className="container">
        <nav class="navbar-transparent navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">
              <h1 className="fw-bold mb-0 fs-3">COMO PROGRAMAR?</h1>
            </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ/playlists"
                    target="_blank"
                  >
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span className="ms-2">Cursos (En progreso ...)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ"
                    target="_blank"
                  >
                    <i class="bi bi-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#" role="button">
                      Es
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" role="button">
                      <i class="bi bi-brightness-high-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="p-5 mb-4">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">¿Cómo Programar?</h1>
            <p class="col-md-8 fs-4">
              Si te pasó por la cabeza que te gustaría aprender a programar, o
              si ya sabes pero te gustaría profundizar en algunos temas ... este
              canal es para ti.
            </p>
            <p class="col-md-8 fs-4">
              Soy Leo y llevo más de 13 años programando. He pasado por
              diferentes tipos de empresas y proyectos, por lo que tengo lo
              necesario para enseñarte en mucho menos tiempo de lo que a mi me
              costó poder obtener los mismos resultados.
            </p>
            <a
              class="btn btn-danger btn-lg"
              type="button"
              href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ"
              target="_blank"
            >
              <i class="bi bi-youtube"></i> Youtube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
