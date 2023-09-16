import React from 'react'
import Nav from '../components/nav'
import Layout from '../components/layout'

function PrivatePolicy() {
    return (
        <Layout>
            <div className='container'>
                <h1 class="text-center mt-5">Políticas de privacidad</h1>
                <hr />

                <p>
                    Gracias por visitar Como programar ("nosotros", "nuestro", "sitio web"). Acá, nos tomamos en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información personal que pueda proporcionarnos a través de nuestro sitio web.

                    Al usar nuestro sitio web, aceptas las prácticas descritas en esta política de privacidad.
                </p>
                <h4 className='mt-4'>Recopilación de Información Personal</h4>
                <p>
                    Información que nos proporcionas:
                    Cuando visitas nuestro sitio web, es posible que te pidamos que proporciones cierta información personal identificable que pueda usarse para contactarte o identificarte. La información personal puede incluir, pero no se limita a:

                    Nombre
                    Dirección de correo electrónico
                    Información de contacto
                    Otros datos de identificación
                    Información recopilada automáticamente:
                    También podemos recopilar información sobre tu visita al sitio web automáticamente a través de cookies y tecnologías similares. Esta información puede incluir tu dirección IP, tipo de navegador, páginas visitadas y otra información de seguimiento.
                </p>

                <h4 className='mt-4'>Uso de la Información</h4>
                <p>
                    Utilizamos la información que recopilamos para los siguientes fines:

                    Proporcionar y mantener nuestro sitio web.
                    Personalizar tu experiencia en nuestro sitio web.
                    Enviar actualizaciones y comunicaciones relacionadas con nuestro sitio web.
                    Realizar análisis y estudios para mejorar nuestro sitio web.
                    Cumplir con las obligaciones legales y reglamentarias.
                </p>
                <h4 className='mt-4'>Compartir Información</h4>
                <p>
                    No compartiremos tu información personal con terceros, excepto en las siguientes circunstancias:

                    Cuando tengamos tu consentimiento para hacerlo.
                    Cuando sea necesario para cumplir con una obligación legal.
                    Cuando sea necesario para proteger nuestros derechos, privacidad, seguridad o propiedad.
                </p>
                <h4 className='mt-4'>Enlaces a Sitios Web Externos</h4>

                <p>
                    Nuestro sitio web puede contener enlaces a otros sitios web de terceros que no están bajo nuestro control. No somos responsables de las prácticas de privacidad de estos sitios web externos. Te recomendamos revisar las políticas de privacidad de esos sitios web antes de proporcionarles información personal.
                </p>
                <h4 className='mt-4'>Seguridad de la Información</h4>
                <p>
                    Tomamos medidas razonables para proteger la información personal que recopilamos y almacenamos, pero no podemos garantizar la seguridad absoluta. Utilizamos medidas de seguridad estándar de la industria para proteger tus datos.
                </p>
                <h4 className='mt-4'>Cambios en la Política de Privacidad</h4>
                <p>
                    Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Cualquier cambio en esta política de privacidad será efectivo cuando se publique en el sitio web. Te recomendamos revisar periódicamente esta página para estar informado sobre las actualizaciones.
                </p>
                <h4 className='mt-4'>Contacto</h4>
                <p>
                    Si tienes alguna pregunta o preocupación sobre esta política de privacidad, por favor contáctanos en [tu dirección de correo electrónico de contacto].
                </p>

                <p class="text-center">Última actualización: Septiembre de 2023</p>
            </div>
        </Layout>
    )
}

export default PrivatePolicy