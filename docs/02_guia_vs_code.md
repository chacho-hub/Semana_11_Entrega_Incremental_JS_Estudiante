# Guia de trabajo en Visual Studio Code

## 1. Abrir el proyecto
1. Descomprime el archivo ZIP.
2. Abre Visual Studio Code.
3. Selecciona File > Open Folder.
4. Elige la carpeta del proyecto, no un archivo suelto.

## 2. Ejecutar el sitio
Puedes usar cualquiera de estas opciones:

### Opcion A: Live Server
1. Instala la extension Live Server si el docente lo permite.
2. Abre `index.html`.
3. Clic derecho > Open with Live Server.

### Opcion B: Navegador
1. Abre la carpeta del proyecto.
2. Doble clic en `index.html`.

## 3. Abrir la consola
En el navegador:
- Presiona F12.
- O clic derecho > Inspeccionar.
- Selecciona la pestana Console.

## 4. Depurar de forma sistematica
Sigue este orden:

1. Lee el primer error que aparece en consola.
2. Ubica el archivo y la linea mencionada.
3. Revisa si el problema es de sintaxis, referencia, tipo, evento, logica o flujo.
4. Corrige una sola cosa.
5. Guarda el archivo.
6. Recarga el navegador.
7. Prueba otra vez.
8. Registra el hallazgo en la bitacora.

## 5. Usar console.log
Puedes agregar mensajes temporales para revisar valores:

```js
console.log("Registro leido:", registro);
console.log("Errores encontrados:", errores);
```

Elimina o deja comentados los mensajes que ya no sean necesarios antes de entregar.

## 6. Ejecutar pruebas
1. Abre `tests.html`.
2. Revisa que las pruebas aparezcan en verde.
3. Si alguna falla, vuelve a `js/app.js` y corrige.
4. Toma captura de las pruebas aprobadas.

## 7. Entregar
Completa los documentos de `docs/`, guarda las capturas en `evidencias/`, comprime la carpeta y sube el ZIP a Moodle.
