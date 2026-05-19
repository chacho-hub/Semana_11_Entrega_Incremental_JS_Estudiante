const results = document.getElementById("test-results");

function addResult(name, ok, detail = "") {
  const item = document.createElement("div");
  item.className = `test-item ${ok ? "ok" : "fail"}`;
  item.innerHTML = `<strong>${ok ? "OK" : "FALLA"}</strong> - ${name}${detail ? `<br><small>${detail}</small>` : ""}`;
  results.appendChild(item);
}

function runTests() {
  const api = window.Semana11Feature;
  if (!api) {
    addResult("El archivo app.js expone window.Semana11Feature", false, "No se encontro el objeto de pruebas.");
    return;
  }

  const valido = {
    nombre: "Laura Perez",
    edad: 16,
    telefono: "3001234567",
    correo: "laura@correo.com",
    taller: "web",
    jornada: "manana",
    acepta: true
  };

  const erroresValido = api.validarInscripcion(valido);
  addResult("Un registro valido no debe generar errores", erroresValido.length === 0, erroresValido.join(" | "));

  const menorEdad = { ...valido, edad: 10 };
  addResult("Edad menor de 12 debe ser rechazada", api.validarInscripcion(menorEdad).some(e => e.toLowerCase().includes("edad")));

  const telefonoCorto = { ...valido, telefono: "300123456" };
  addResult("Telefono con menos de 10 digitos debe ser rechazado", api.validarInscripcion(telefonoCorto).some(e => e.toLowerCase().includes("telefono")));

  const telefonoLetras = { ...valido, telefono: "30012abc67" };
  addResult("Telefono con letras debe ser rechazado", api.validarInscripcion(telefonoLetras).some(e => e.toLowerCase().includes("telefono")));

  const correoMalo = { ...valido, correo: "laura_correo" };
  addResult("Correo sin formato valido debe ser rechazado", api.validarInscripcion(correoMalo).some(e => e.toLowerCase().includes("correo")));

  const sinTaller = { ...valido, taller: "" };
  addResult("Registro sin taller debe ser rechazado", api.validarInscripcion(sinTaller).some(e => e.toLowerCase().includes("taller")));

  const sinAceptacion = { ...valido, acepta: false };
  addResult("Registro sin confirmacion debe ser rechazado", api.validarInscripcion(sinAceptacion).some(e => e.toLowerCase().includes("confirm")));

  addResult("El taller web debe tener descripcion especifica", api.obtenerDescripcionTaller("web") !== "Taller no identificado.");

  const popular = api.obtenerTallerPopular([
    { taller: "web" },
    { taller: "huerta" },
    { taller: "web" }
  ]);
  addResult("El taller popular debe calcularse con un ciclo", popular === "web", `Resultado obtenido: ${popular}`);
}

runTests();
