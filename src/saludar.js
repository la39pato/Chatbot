function saludar(nombre) {
  if (!nombre || nombre.trim() === "") {
    return "Hola";
  }

  return "Hola, " + nombre.trim();
}

function saludarhora(hora, idioma) {
  if (idioma === "en") {
    if (hora >= 5 && hora < 12) {
      return "Good morning";
    } else if (hora >= 12 && hora < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  } else {
    if (hora >= 5 && hora < 12) {
      return "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  }
}

function obtenerTratamiento(genero, edad, idioma) {
  if (idioma === "en") {
    if (genero === "m") {
      return edad > 30 ? "Mr." : "young gentleman";
    } else if (genero === "f") {
      return edad > 30 ? "Mrs." : "young lady";
    }
  } else {
    if (genero === "m") {
      return edad > 30 ? "Sr." : "caballero";
    } else if (genero === "f") {
      return edad > 30 ? "Sra." : "señorita";
    }
  }
  return "";
}

function construirSaludo(nombre, genero, edad, hora, idioma) {
  const saludoHora = saludarhora(hora, idioma);
  const tratamiento = obtenerTratamiento(genero, edad, idioma);

  if (idioma === "en") {
    return saludoHora + " " + tratamiento + " " + nombre;
  } else {
    return "Hola " + saludoHora + " " + tratamiento + " " + nombre;
  }
}

export { saludar, saludarhora, construirSaludo };
