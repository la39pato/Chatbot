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

function obtenerTratamiento(genero, edad) {
  if (genero === "m") {
    return edad > 30 ? "Sr." : "caballero";
  } else if (genero === "f") {
    return edad > 30 ? "Sra." : "señorita";
  } else {
    return "";
  }
}

function construirSaludo(nombre, genero, edad, hora) {
  const saludoHora = saludarhora(hora);
  const tratamiento = obtenerTratamiento(genero, edad);

  return "Hola " + saludoHora + " " + tratamiento + ", " + nombre;
}

export { saludar, saludarhora, construirSaludo };
