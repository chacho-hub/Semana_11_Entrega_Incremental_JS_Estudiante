/*
  SEMANA 11 - ENTREGA INCREMENTAL DEL SITIO/PROYECTO
  Archivo con errores intencionales para evaluacion.

  Reto:
  1. Abrir la consola del navegador.
  2. Identificar errores frecuentes de JavaScript.
  3. Corregir el flujo sin borrar toda la estructura.
  4. Validar que el incremento funcione y completar el checklist.

  Importante: este archivo tiene errores de referencia, eventos, tipos,
  logica, validaciones y ciclos. Corrige de forma sistematica.
*/

const STORAGE_KEY = "semana11_inscripciones_incremento";
let inscripciones = [];

const form = document.getElementById("form-inscripcion");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnBorrarTodo = document.getElementById("btn-borrar-todo");
const mensaje = document.getElementById("mensaje");
const tabla = document.getElementById("tabla-inscripciones");
const totalInscritos = document.getElementById("total-inscritos");
const totalValidos = document.getElementById("total-validos");
const totalPendientes = document.getElementById("total-pendientes");
const tallerPopular = document.getElementById("taller-popular");

if (document.body.dataset.page !== "tests") {
  document.addEventListener("DOMContentLoaded", iniciarAplicacion);
}

function iniciarAplicacion() {
  inscripciones = cargarInscripciones();
  renderizarTabla();
  actualizarResumen();

  if (form) {
    form.addEventListener("submit", manejarEnvio);
  }

  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", limpiarFormulario);
  }

  if (btnBorrarTodo) {
    btnBorrarTodo.addEventListener("click", borrarTodo);
  }
}

function manejarEnvio(evento) {
  evento.preventDefault();

  const registro = leerFormulario();
  const errores = validarInscripcion(registro);

  if (errores.length > 0) {
    mostrarMensaje(errores.join(" | "), "error");
    return;
  }

  guardarRegistro(registro);
  mostrarMensaje("Inscripcion guardada correctamente.", "exito");
  form.reset();
}

function leerFormulario() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    edad: Number(document.getElementById("edad").value),
    telefono: document.getElementById("telefono").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    taller: document.getElementById("taller").value,
    jornada: document.getElementById("jornada").value,
    acepta: document.getElementById("acepta").checked
  };
}

function validarInscripcion(registro) {
  const errores = [];

  if (registro.nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  if (!Number.isFinite(registro.edad) || registro.edad < 12) {
    errores.push("La edad debe ser de 12 anos o mas.");
  }

  if (!/^\d{10}$/.test(registro.telefono)) {
    errores.push("El telefono debe tener exactamente 10 digitos numericos.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registro.correo)) {
    errores.push("El correo electronico debe tener un formato valido.");
  }

  if (registro.taller === "") {
    errores.push("Debe seleccionar un taller.");
  }

  if (registro.acepta !== true) {
    errores.push("Debe confirmar que los datos son correctos.");
  }

  return errores;
}

function obtenerDescripcionTaller(taller) {
  switch (taller) {
    case "web":
      return "Programacion web: HTML, CSS, JavaScript y depuracion.";
    case "huerta":
      return "Huerta digital: registros, formularios y seguimiento.";
    case "finanzas":
      return "Finanzas: control basico para emprendimientos rurales.";
    case "datos":
      return "Datos para la finca: tablas, filtros y reportes.";
    default:
      return "Taller no identificado.";
  }
}

function guardarRegistro(registro) {
  const nuevoRegistro = {
    id: Date.now(),
    ...registro,
    descripcion: obtenerDescripcionTaller(registro.taller),
    fecha: new Date().toLocaleString()
  };

  inscripciones.push(nuevoRegistro);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscripciones));

  renderizarTabla();
  actualizarResumen();
}

function cargarInscripciones() {
  const datos = localStorage.getItem(STORAGE_KEY);
  if (!datos) return [];

  try {
    return JSON.parse(datos);
  } catch (error) {
    console.warn("No se pudieron cargar los datos guardados:", error);
    return [];
  }
}

function renderizarTabla() {
  if (!tabla) return;
  tabla.innerHTML = "";

  if (inscripciones.length === 0) {
    tabla.innerHTML = '<tr><td colspan="7" class="empty">Aun no hay registros.</td></tr>';
    return;
  }

  for (let i = 0; i < inscripciones.length; i++) {
    const item = inscripciones[i];
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.edad}</td>
      <td>${item.telefono}<br><small>${item.correo}</small></td>
      <td><strong>${item.taller}</strong><br><small>${item.descripcion}</small></td>
      <td>${item.jornada}</td>
      <td>${item.fecha}</td>
      <td><button class="button secondary" type="button" onclick="eliminarRegistro(${item.id})">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  }
}

function actualizarResumen() {
  if (!totalInscritos) return;

  totalInscritos.textContent = inscripciones.length;
  totalValidos.textContent = inscripciones.length;
  totalPendientes.textContent = 0;
  tallerPopular.textContent = obtenerTallerPopular(inscripciones);
}

function obtenerTallerPopular(lista = inscripciones) {
  if (!lista || lista.length === 0) return "Sin datos";

  const conteo = {};
  for (let i = 0; i < lista.length; i++) {
    const taller = lista[i].taller;
    conteo[taller] = (conteo[taller] || 0) + 1;
  }

  let ganador = "Sin datos";
  let maximo = 0;
  for (const taller in conteo) {
    if (conteo[taller] > maximo) {
      ganador = taller;
      maximo = conteo[taller];
    }
  }

  return ganador;
}

function mostrarMensaje(texto, tipo = "info") {
  if (!mensaje) return;
  mensaje.textContent = texto;
  mensaje.className = `message ${tipo}`;
}

function limpiarFormulario() {
  if (!form) return;
  form.reset();
  mostrarMensaje("Formulario limpio. Continue con una nueva prueba.", "info");
}

function eliminarRegistro(id) {
  inscripciones = inscripciones.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscripciones));
  renderizarTabla();
  actualizarResumen();
}

function borrarTodo() {
  if (!confirm("Desea borrar todas las inscripciones?")) return;
  inscripciones = [];
  localStorage.removeItem(STORAGE_KEY);
  renderizarTabla();
  actualizarResumen();
  mostrarMensaje("Registros eliminados.", "info");
}

// Exposicion de funciones para tests.html. No eliminar.
window.Semana11Feature = {
  validarInscripcion,
  obtenerDescripcionTaller,
  obtenerTallerPopular,
  cargarInscripciones
};
