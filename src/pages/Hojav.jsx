import React, { useState } from "react";
import "./Hojav.css";

const Hojav = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const imagenesPDF = [
    "/HOJAV/primera.jpg",
    "/HOJAV/segunda.jpg",
    "/HOJAV/tercera.jpg",
  ];

  const rutaPDF = "/HOJAV/HOJA-VIDA.pdf";

  return (
    <section className="seccion-hoja">
      <h2 className="titulo-hv">📄 Hoja de Vida</h2>

      <div className="contenedor-hv">
        <p>
          Aquí puedes ver o descargar mi hoja de vida completa. Está diseñada
          con enfoque profesional y orientada a desarrollo de software.
        </p>

        <div className="contenedor-botones">
          <button
            className="btn-ver"
            onClick={() => setMostrarModal(true)}
          >
            Ver vista previa
          </button>

          <a
            href={rutaPDF}
            download
            className="btn-descargar"
          >
            Descargar PDF
          </a>
        </div>
      </div>

      {mostrarModal && (
        <div className="modal-pdf">
          <div className="modal-contenido imagenes-scroll">
            <button
              className="cerrar-modal"
              onClick={() => setMostrarModal(false)}
            >
              ✖
            </button>
            {imagenesPDF.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Sección ${index + 1} de la hoja de vida`}
                className="img-hoja"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hojav;
