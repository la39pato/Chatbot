import { construirSaludo } from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const form = document.querySelector("#chat-form");
const chatOutput = document.querySelector("#chat-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const genero = generoInput.value;
  const horaActual = new Date().getHours();

  const mensajeFinal = construirSaludo(nombre, genero, horaActual);

  chatOutput.innerHTML = "<p>" + mensajeFinal + "</p>";

  nombreInput.value = "";
  generoInput.value = "";
});
