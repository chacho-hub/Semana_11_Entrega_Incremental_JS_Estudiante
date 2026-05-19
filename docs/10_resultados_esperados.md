# Resultados esperados del incremento

Al finalizar, el proyecto debe comportarse asi:

## Registro invalido
Si el usuario deja campos vacios o ingresa datos incorrectos, el sistema debe:
- Mostrar mensajes de error claros.
- No guardar el registro.
- No agregar filas a la tabla.
- No actualizar indebidamente los resumenes.

## Registro valido
Si el usuario ingresa datos correctos, el sistema debe:
- Guardar la inscripcion.
- Mostrar mensaje de exito.
- Limpiar el formulario.
- Agregar una fila a la tabla.
- Actualizar total de inscritos.
- Calcular taller con mayor demanda.

## Pruebas automaticas
Al abrir `tests.html`, las pruebas deben aparecer aprobadas. Estas pruebas no reemplazan la prueba manual, pero ayudan a comprobar la logica principal.

## Consola
Al terminar la correccion, la consola del navegador no debe mostrar errores rojos al cargar la pagina, registrar datos, limpiar o borrar registros.
