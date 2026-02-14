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

export { saludar, saludarhora };
