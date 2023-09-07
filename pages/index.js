import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div class="p-5 mb-4">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">¿Cómo Programar?</h1>
                    <p class="col-md-8 fs-4">
                        Si te pasó por la cabeza que te gustaría aprender a programar, o
                        si ya sabes pero te gustaría profundizar en algunos temas ...
                        este canal es para ti.
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
        </Layout>
    );
}
