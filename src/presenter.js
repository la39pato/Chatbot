import { saludar, saludarhora } from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#chat-form");
const chatOutput = document.querySelector("#chat-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();

  const horaActual = new Date().getHours();
  const mensajeSaludo = saludar(nombre);
  const mensajeHora = saludarhora(horaActual);

  chatOutput.innerHTML =
    "<p>" + mensajeHora + " " + mensajeSaludo + "</p>";

  nombreInput.value = "";
});
