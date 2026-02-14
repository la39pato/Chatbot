function saludar(nombre) {
  if (!nombre || nombre.trim() === "") {
    return "Hola";
  }

  return "Hola, " + nombre.trim();
}

function saludarhora(hora) {
  if (hora >= 5 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function obtenerTratamiento(genero) {
  if (genero === "m") {
    return "señor";
  } else if (genero === "f") {
    return "señora";
  } else {
    return "";
  }
}

function construirSaludo(nombre, genero, hora) {
  const saludoHora = saludarhora(hora);
  const tratamiento = obtenerTratamiento(genero);

  return "Hola " + saludoHora + " " + tratamiento + " " + nombre;
}

export { saludar, saludarhora, construirSaludo };
