import React from 'react'
import Layout from '../components/layout'

function TermsOfUse() {
    return (
        <Layout>
            <div className="container">
                <h1 className="text-center mt-5">Términos de Uso</h1>
                <hr />

                <h4 className='mt-4'>Introducción</h4>
                <p>Bienvenido a nuestro sitio web de tutoriales y guías de programación, donde ofrecemos contenido educativo relacionado con la programación y el desarrollo de software.</p>

                <h4 className='mt-4'>Aceptación de Términos</h4>
                <p>Al utilizar nuestro sitio web, aceptas los siguientes términos y Si no estás de acuerdo con estos términos, por favor, no utilices nuestro sitio.</p>

                <h4 className='mt-4'>Uso del Contenido</h4>
                <p>Todos los materiales y recursos disponibles en nuestro sitio son para fines educativos y de Puedes utilizarlos con fines personales y educativos, pero no puedes copiar, distribuir o vender nuestro contenido sin nuestro permiso.</p>

                <h4 className='mt-4'>Enlaces a YouTube</h4>
                <p>En nuestro sitio web, promocionamos listas de reproducción y cursos disponibles en Ten en cuenta que estos enlaces te llevarán a plataformas externas, y estamos sujetos a los términos y condiciones de YouTube.</p>

                <h4 className='mt-4'>Cambios en los Términos</h4>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier Te recomendamos revisar esta página periódicamente para estar al tanto de las actualizaciones.</p>

                <h4 className='mt-4'>Contacto</h4>
                <p>Si tienes alguna pregunta o comentario sobre nuestros términos de uso, por favor, contáctanos en <a href="mailto:info@tusitio.com">info@tusitio.com</a>.</p>

                <p className="text-center">Última actualización: Septiembre de 2023</p>
            </div>
        </Layout>
    )
}

export default TermsOfUse