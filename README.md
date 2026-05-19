# Semana 11 - Entrega incremental del sitio/proyecto

## Tema
Errores frecuentes en JavaScript; depuracion sistematica; control de flujos.

## Tipo de actividad
Tarea evaluativa: entrega incremental del sitio o proyecto.

## Modalidad
Trabajo individual o grupal de 2 a 4 estudiantes, segun las condiciones de conectividad, equipos disponibles y organizacion del curso.

## Evidencia esperada
- Version funcional del incremento semanal.
- Checklist de requisitos diligenciado.
- Carpeta o repositorio del proyecto.
- Evidencia de pruebas: capturas del sitio, consola, pruebas y funcionalidad.

## Proposito
Durante esta actividad vas a entregar un incremento funcional de un sitio web. El incremento consiste en un modulo de inscripcion a talleres comunitarios que debe validar datos, guardar registros, mostrar resultados y actualizar resumenes. El trabajo se hace desde Visual Studio Code y se demuestra en el navegador.

Esta evaluacion no busca solo que el sitio se vea bien. Debes demostrar que el codigo funciona, que los archivos estan integrados correctamente, que las validaciones son operativas y que aplicaste depuracion sistematica.

## Contexto del proyecto
Una institucion rural organizara talleres comunitarios de programacion web, huerta digital, finanzas para emprendimientos y datos para la finca. El sitio debe permitir registrar participantes, validar la informacion y mostrar una tabla de inscritos.

El archivo `js/app.js` contiene errores intencionales. Tu tarea es detectarlos, corregirlos y dejar una version funcional del incremento.

## Pasos de trabajo en VS Code
1. Descarga y descomprime el ZIP.
2. Abre la carpeta completa en Visual Studio Code.
3. Revisa la estructura del proyecto.
4. Ejecuta `index.html` con Live Server o abriendo el archivo en el navegador.
5. Abre la consola del navegador con F12 o clic derecho > Inspeccionar > Consola.
6. Identifica los errores que aparecen.
7. Corrige el archivo `js/app.js` paso a paso.
8. Prueba el formulario con datos validos e invalidos.
9. Ejecuta `tests.html` y revisa las pruebas.
10. Completa los documentos de la carpeta `docs/`.
11. Guarda capturas en la carpeta `evidencias/`.
12. Comprime la carpeta final y entregala en Moodle.

## Archivos principales
```txt
index.html              Interfaz principal del incremento
css/styles.css          Estilos visuales del sitio
js/app.js               Codigo JavaScript con errores intencionales
tests.html              Pagina de pruebas de aceptacion
js/tests.js             Pruebas automaticas basicas
docs/                   Guias, checklist, rubrica y bitacoras
evidencias/             Carpeta para capturas y evidencias
entrega/                Instrucciones de entrega
```

## Requisitos minimos del incremento
- El formulario debe validar nombre, edad, telefono, correo, taller y confirmacion.
- La edad debe ser de 12 anos o mas.
- El telefono debe tener exactamente 10 digitos numericos.
- El correo debe tener formato valido.
- El taller debe seleccionarse.
- El sistema debe registrar inscripciones validas en una tabla.
- El sistema debe mostrar mensajes claros de error y exito.
- El sistema debe actualizar los indicadores superiores.
- El sistema no debe mostrar errores en la consola despues de corregido.
- La pagina debe mantener calidad visual y usabilidad basica.

## Criterios de evaluacion
Consulta `docs/06_rubrica.md`.

## Entrega
Sube a Moodle un archivo ZIP con la carpeta completa del proyecto corregido. El ZIP debe incluir codigo, checklist, bitacora, matriz de pruebas y evidencias.
