import "./Proyecto.css";

export default function Proyecto() {
  return (
    <>
      <h2 className="proyecto_titulo">Proyectos Destacados</h2>
      <section className="proyecto_seccion">
        <div className="proyecto_tarjeta">
          <a
            href="https://conocimiento-lovat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/LURY_CARS.jpg"
              alt="LUXURY_CARS desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>🚗 Luxury Cars</h3>
            <p>
              Plataforma de exhibición de autos de lujo, diseñada para brindar
              una experiencia premium. Ideal para concesionarios exclusivos.
              Desarrollado con <strong>HTML, CSS y JavaScript</strong> y
              desplegado en <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://conocimiento-lovat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>

        <div className="proyecto_tarjeta">
          <a
            href="https://web-sabor-y-alma-woad.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/WEB_SABOR_ALMA.jpg"
              alt="WEB_SABOR_ALMA desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>🍲 Sabor y Alma</h3>
            <p>
              Sitio web gastronómico con recetas caseras, diseño cálido y
              enfocado en la cocina tradicional y emocional. Creado con{" "}
              <strong>React</strong> y desplegado en <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://web-sabor-y-alma-woad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto_tarjeta">
          <a
            href="https://app-inscripcion.vercel.app/" // ← reemplaza con tu link real
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/sistemas_inscripciones.jpg" // ← asegúrate que esta imagen esté en /public
              alt="INSCRIPCIONES desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>🗂️ Sistema de Inscripciones</h3>
            <p>
              Portal escolar para gestionar suscripciones digitales como
              Netflix, Spotify, Amazon y más. Permite iniciar inscripción y
              consultar historial. Construido con{" "}
              <strong>HTML, CSS y JavaScript</strong> y desplegado en{" "}
              <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://app-inscripcion.vercel.app/" // ← reemplaza aquí también
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>

        <div className="proyecto_tarjeta">
          <a
            href="https://demo-seven-green.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/MEDICION_HABILIDADES_LECTURA.jpg"
              alt="MEDICION_HABILIDADES_LECTURA desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>📊 Sistema de Evaluaciones</h3>
            <p>
              Aplicación de gestión académica con seguimiento del rendimiento y
              visualización clara. Desarrollada en <strong>React</strong> y
              desplegada con <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://demo-seven-green.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>

        <div className="proyecto_tarjeta">
          <a
            href="https://eamensegunmomen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/PRIMER_EVALUACION.jpg"
              alt="PRIMER_EVALUACION desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>🔧 Mecánico de Confianza</h3>
            <p>
              Página de servicios mecánicos con catálogo visual, descripciones
              detalladas y llamadas a la acción efectivas. Hecho con{" "}
              <strong>HTML, CSS y JavaScript</strong> y desplegado en{" "}
              <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://eamensegunmomen.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>

        <div className="proyecto_tarjeta">
          <a
            href="https://semana-7-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/PRIMER_FORMULARIO.jpg"
              alt="PRIMERO_FORMULARIO desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>📝 Formulario Estudiantil</h3>
            <p>
              Formulario de inscripción con validación de datos y selección
              dinámica. Desarrollado con <strong>JavaScript</strong> y alojado
              en <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://semana-7-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>

        <div className="proyecto_tarjeta">
          <a
            href="https://formregi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img_tarjeta"
              src="/SEGUNDO_FORMU.jpg"
              alt="SEGUNDO_FORMU desde public"
            />
          </a>
          <div className="descripcion_pro">
            <h3>👤 Registro de Usuarios</h3>
            <p>
              Módulo responsivo de registro enfocado en simplicidad y
              usabilidad. Hecho en <strong>React</strong> y desplegado vía{" "}
              <strong>Vercel</strong>.
            </p>
            <div className="button_tarjeta">
              <a
                href="https://formregi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>ver más</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
