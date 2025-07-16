import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBook, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ tema, setTema }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);


  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={`barra-navegacion tema-${tema}`}>
      <div className="marca">
        <span className="icono">&lt;/&gt;</span>
        <Link to="/" className="nombre-link">
          <strong>
            <span className="azul">JeanpierryMoreno</span>
          </strong>
        </Link>
      </div>

      <button className="hamburguesa" onClick={toggleMenu}>
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`menu ${menuAbierto ? "activo" : ""}`}>
        <li>
          <Link to="/info" onClick={cerrarMenu}>
            <FaUser /> Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/proyecto" onClick={cerrarMenu}>
            <FaBook /> Proyectos
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={cerrarMenu}>
            <FaEnvelope /> Contáctame
          </Link>
        </li>

        <li className="temas-mobile">
          <button
            className={tema === "light" ? "activo" : ""}
            onClick={() => {setTema("light"); cerrarMenu()}}
          >
            🌞 <span>LIGHT</span>
          </button>
          <button
            className={tema === "dark" ? "activo" : ""}
            onClick={() => {setTema("dark"); cerrarMenu()}}
          >
            🌙 <span>DARK</span>
          </button>
        </li>
      </ul>

      <div className="temas-vertical">
        <button
          className={tema === "light" ? "activo" : ""}
          onClick={() => setTema("light")}
        >
          🌞 <span>LIGHT</span>
        </button>
        <button
          className={tema === "dark" ? "activo" : ""}
          onClick={() => setTema("dark")}
        >
          🌙 <span>DARK</span>
        </button>
      </div>
    </header>
  );
}
