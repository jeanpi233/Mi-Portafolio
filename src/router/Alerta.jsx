// formHandler.js
import Swal from "sweetalert2";

export const Alerta = (e, formspreeUrl) => {
  e.preventDefault();
  const form = e.target;

  fetch(formspreeUrl, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Gracias por contactarme! 📨",
          text: "Te responderé lo antes posible.",
          timer: 3000,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Hubo un error al enviar el mensaje.",
          confirmButtonColor: "#0077ff",
        });
      }
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Error de red",
        text: "No se pudo enviar el mensaje. Verifica tu conexión.",
        confirmButtonColor: "#0077ff",
      });
    });
};
