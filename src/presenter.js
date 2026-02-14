import saludar from "./saludar.js";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#chat-form");
const chatOutput = document.querySelector("#chat-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const mensaje = saludar(nombre);

  chatOutput.innerHTML = "<p>" + mensaje + "</p>";

  nombreInput.value = "";
});
