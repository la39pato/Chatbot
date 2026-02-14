function saludar(nombre) {
  if (!nombre || nombre.trim() === "") {
    return "Hola ";
  }

  return "Hola, " + nombre.trim();
}

export default saludar;
