import OpenbankLogo from '../assets/img/key_openbank.png'
import { Link } from 'react-router-dom'
import Step1 from '../views/ProductInformation'
import Step2 from '../views/Form'
import Step3 from '../views/Feedback'

const TestStatement = () => {
    return (
        <div className="App">
            <Link className="link" to="/wizard">
                Ir a el Wizard
            </Link>
            <main className="App-content">
                <h1>
                    Bienvenid@ al test de{' '}
                    <img
                        src={OpenbankLogo}
                        className="App-header-logo"
                        alt={'openbank-logo'}
                    />
                </h1>
                <h3>Objetivo </h3>
                <p>
                    Lo que pretendemos con la prueba es evaluar las capacidades
                    técnicas respecto a un desarrollador web o front,
                    especialmente en el area de React y aplicaciones SPA. Con
                    esta prueba se pretende valorar muchos aspectos del stack
                    tecnologico de un desarrollador del ambito web, como
                    arquitectura, uso de patrones de diseño, maquetación,
                    técnicas de programación, documentación, conocimentos de
                    Javascript, HTML y CSS, entre otros.{' '}
                </p>
                <h3>¿En que consiste?</h3>
                <p>
                    La prueba consiste en diseñar, maquetar y desarrollar desde
                    cero un pequeño wizard que simule algo tan típico como la
                    creación de una contraseña para un usuario. Lo que queremos
                    que hagas es que plantees un wizard de unos 3 pasos en los
                    que un usuario reciba información de que está a punto de
                    crear una contraseña nueva, un formulario donde se le pidan
                    una serie de datos para la creación de la contraseña y una
                    página final de feedback de la operación.
                </p>
                <h3>Desarrollo</h3>
                <ul>
                    <li>
                        <h4>1º Pantalla de información de la contraseña</h4>
                        <Step1 />
                        <p>
                            En esta pantalla el usuario que entra a la
                            aplicación debe entender que está contratando.
                            Deberias darle la bienvenida al producto
                            &quot;Cuenta Corriente OpenClose&quot; y explicarle
                            que vas a demandarle sus datos en los siguientes
                            pasos. Es una pantalla con una explicación, nombre
                            del producto y botones de wizard de avanzar.
                        </p>
                        <h5>
                            Esta pantalla será el paso numero uno del wizard y
                            tiene que tener un check (que tiene que pulsar) que
                            habilite el boton de avanzar, en el que se le
                            pregunta al usuario si tiene mayoría de edad y que
                            acepta que tratemos sus datos según la politica de
                            protección de datos.
                        </h5>
                    </li>
                    <li>
                        <h4>2º Pantalla de creación de la contraseña</h4>
                        <Step2 />
                        <p>
                            En esta pantalla al usuario se le van a pedir los
                            siguientes datos en un formulario.
                        </p>
                        <ul>
                            <li>
                                Contraseña(Min 8 - Max 24 caracteres)(Al menos 1
                                número y una mayúscula)
                            </li>
                            <li>Pista (Maximo 255 caracteres)</li>
                        </ul>
                        <h5>
                            Aquí para poder avanzar de paso, es necesario que
                            todos los campos del formulario esten correctamente
                            rellenos. Se debe controlar errores de tipo o forma
                            en cada uno de ellos, mostrando un error asociado a
                            cada input. Se debe validar correctamente que sea
                            una contraseña correcta y que coincidan ambas.
                        </h5>
                    </li>
                    <li>
                        <h4>3º Pantalla de feedback</h4>
                        <Step3 success />
                        <Step3 />
                        <p>
                            Esta pantalla unicamente mostrará un icono de Ok/Ko
                            informando al usuario del resultado, además de un
                            boton que reinicie el proceso.
                        </p>
                        <p>
                            Se provee de un mock en el services/api desde el
                            cual se puede imitar el comportamiento de una
                            llamada asíncrona. (Checkear para ver caso de error)
                        </p>
                        <h5>
                            Debe ser una pantalla que cumpla cualquier de los
                            requisitos, tanto un KO como un OK, de manera
                            dinamica, de manera que, sea parametrizable en base
                            al resultado de la creación.
                        </h5>
                    </li>
                </ul>
                <h3>Requisitos</h3>
                <p>
                    Los requisitos que se van a tener en cuenta para la
                    evaluación de la prueba son:
                </p>
                <ul>
                    <li>
                        Tiene que estar maquetada semánticamente correcta, con
                        etiquetas de HTML5 y layouts actuales.
                    </li>
                    <li>
                        Se puede renombrar, quitar o añadir cualquier recurso,
                        fichero, asset que se crea necesario para mejorar o
                        embellecer la prueba.
                    </li>
                    <li>La iconografia puede obtenerse de donde guste</li>
                    <li>
                        Nice to haves a tener en cuenta
                        <ul>
                            <li>Estructura del proyecto</li>
                            <li>
                                Control de la UI durante las llamadas asíncronas
                            </li>
                            <li>Generalización de componentes y utilidades</li>
                            <li>Uso de buenas practicas de programación</li>
                            <li>Metodologias en hojas de estilos</li>
                            <li>Sistema de traducción</li>
                            <li>Rendimiento</li>
                        </ul>
                    </li>
                </ul>
                <h3>Recursos</h3>
                <p>
                    Se provee un proyecto vacío donde se espera que el
                    desarrollador complete la lógica. Ademas se provee de un
                    base.scss con los colores corporativos e imágenes para
                    completar los flujos. Todo esto es de libre disposición para
                    que el destinatario lo use o no si lo cree conveniente.
                </p>
                <h3>Duración</h3>
                <p>
                    No hay una estimación directa ni concreta de la prueba, pero
                    queremos marcar como máximo 1 semana(7 días naturales) desde
                    el recibo de la misma.
                </p>

                <h4 className="bye-bye">
                    Sin más que añadir, ¡mucha suerte! y cualquier duda,
                    mandanos tus dudas al correo que te han dado. =)
                </h4>
            </main>
        </div>
    )
}

export default TestStatement
