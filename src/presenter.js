import { construirSaludo } from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaInput = document.querySelector("#idioma");
const form = document.querySelector("#chat-form");
const chatOutput = document.querySelector("#chat-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const genero = generoInput.value;
  const edad = parseInt(edadInput.value);
  const idioma = idiomaInput.value;
  const horaActual = new Date().getHours();

  const mensajeFinal = construirSaludo(nombre, genero, edad, horaActual, idioma);

  chatOutput.innerHTML += "<div class='bot-message'>" + mensajeFinal + "</div>";
  chatOutput.scrollTop = chatOutput.scrollHeight;


  nombreInput.value = "";
  generoInput.value = "";
  edadInput.value = "";
});
