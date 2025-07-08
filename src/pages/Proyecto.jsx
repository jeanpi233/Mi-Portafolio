
import './Proyecto.css';
import Navbar from '../componentes/Navbar.jsx';
export default function Proyecto() {
  return (
    <>
    <section className="proyecto_seccion">
      <h2 className="proyecto_titulo">Proyectos Destacados</h2>
      <div className="proyecto_grid">
        <div className="tarjeta">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
        <div className="tarjeta">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
        <div className="tarjeta">
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </div>
    </section>
    </>
  );
}
