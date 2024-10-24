# README

Este proyecto consiste en una aplicación web sencilla para la gestión de libros. Contiene tres documentos principales:

```
    HTML (estructura de la interfaz)
    CSS (estilos)
    JavaScript (funcionalidad)
```

A continuación, se describe cada archivo, cómo funcionan entre sí y cómo configurar el proyecto para su correcto funcionamiento.
Estructura del Proyecto

bash

```
/proyecto-gestion-libros
│
├── index.html # Estructura del frontend
├── styles.css # Estilos de la interfaz
├── script.js # Funcionalidad con peticiones a la API REST
└── README.md # Archivo de documentación (este archivo)
```

1. index.html

   Este archivo define la estructura básica de la página web. Contiene formularios para agregar, actualizar y eliminar libros, así como un botón para listar todos los libros.

## 1. Secciones Principales del HTML:

- Formulario para agregar libros: Captura datos como título, autor, ISBN, descripción, fecha de publicación y copias disponibles.
- Formulario para actualizar libros: Permite modificar el título, autor y descripción de un libro existente utilizando su ID.
- Formulario para eliminar libros: Elimina un libro utilizando su ID.
- Botón para listar libros: Muestra en pantalla todos los libros disponibles en la API.
- Contenedor para mostrar resultados: Se utilizan divs para mostrar mensajes o la lista de libros.

## 2. styles.css

Este archivo define los estilos de la página para darle una apariencia atractiva y profesional.
Características Clave del CSS:

- Body:
  Configura la página para que el contenido esté centrado vertical y horizontalmente utilizando Flexbox.

- Contenedor:
  Establece un cuadro con fondo blanco, bordes redondeados y una ligera sombra para resaltar el contenido.

- Formularios y botones:
  Define márgenes, paddings, y bordes para entradas y botones. Al pasar el mouse sobre los botones, el color cambia para proporcionar retroalimentación visual.

## 3. script.js

Este archivo implementa la lógica de la aplicación. Contiene el código JavaScript que permite interactuar con la API REST para listar, agregar, actualizar y eliminar libros.
También incluye funciones para mostrar mensajes en pantalla.

### Funciones Clave:

- Listar libros:
  Envía una solicitud GET al endpoint /books y muestra los libros en la interfaz.

- Agregar libro:
  Envía los datos capturados en el formulario mediante una solicitud POST a la API.

- Actualizar libro:
  Permite modificar información específica de un libro mediante una solicitud PATCH.

- Eliminar libro:
  Elimina un libro de la base de datos utilizando su ID a través de una solicitud DELETE.

- Mostrar mensajes:
  Función showMessage() para mostrar mensajes de éxito o error en pantalla.

# Instrucciones para Ejecutar el Proyecto

1. Prerrequisitos:

   Asegúrate de tener una API REST corriendo localmente en http://localhost:3000/books.
   Puedes usar Node.js o cualquier framework como Express para crearla.
   Verifica que la API soporte las siguientes rutas:

   ```
   GET /books: Listar libros.
   POST /books: Agregar un nuevo libro.
   PATCH /books/ : Actualizar un libro.
   DELETE /books/ : Eliminar un libro.
   ```

2. Pasos para Ejecutar:

   1. Clona este repositorio o descarga los archivos.
      Asegúrate de tener la API corriendo en el puerto 3000.

   2. Abre el archivo index.html en tu navegador.
      - Prueba las siguientes funcionalidades:
        1. Agrega un libro completando el formulario y haciendo clic en Agregar.
        2. Lista los libros disponibles haciendo clic en Listar Libros.
        3. Actualiza un libro ingresando su ID y los nuevos datos.
        4. Elimina un libro utilizando su ID.

## Captura de Ejecución Exitosa

Cuando el proyecto funciona correctamente, deberías ver:

1. Lista de libros con su título, autor e ID.
2. Mensajes de éxito cuando se agrega, actualiza o elimina un libro.
3. Errores mostrados en caso de problemas (como conexión fallida o ID no encontrado).

## Tecnologías Utilizadas

- HTML5: Para la estructura de la página.
- CSS3: Para los estilos y diseño visual.
- JavaScript (ES6): Para la lógica del frontend.
- Fetch API: Para realizar peticiones HTTP asíncronas.

## Posibles Errores y Soluciones

1. Error 404 o 500 al conectar con la API:
   Verifica que la API esté corriendo en localhost:3000 y que las rutas estén configuradas correctamente.

2. Campos vacíos al agregar libros:
   Asegúrate de completar todos los campos requeridos antes de enviar el formulario.

3. Errores al actualizar o eliminar:
   Verifica que el ID ingresado sea correcto y que el libro exista en la base de datos.

## Mejoras Futuras

1. Implementar validación de formularios para evitar datos incorrectos.
2. Añadir paginación a la lista de libros si la cantidad de registros aumenta.
3. Mostrar confirmaciones antes de eliminar libros.
4. Usar modales para los formularios en lugar de formularios simples.
