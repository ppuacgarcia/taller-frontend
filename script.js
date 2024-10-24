// URL base de la API que gestiona los libros
const API_URL = 'http://localhost:3000/books';

// Listar libros
document.getElementById('listBooks').addEventListener('click', async () => {
  try {
    // Realiza una solicitud GET a la API para obtener la lista de libros
    const response = await fetch(API_URL);
    // Convierte la respuesta a JSON
    const books = await response.json();
    // Selecciona el elemento donde se mostrará la lista de libros
    const booksList = document.getElementById('booksList');
    // Genera un HTML para cada libro y lo inserta en el div 'booksList'
    booksList.innerHTML = books.map(book => `
      <p><strong>${book.title}</strong> por ${book.author} (ID: ${book.id})</p>
    `).join(''); // Une los elementos para evitar comas entre ellos
  } catch (error) {
    // Muestra un mensaje de error si algo falla
    showMessage(`Error al listar libros: ${error.message}`);
  }
});

// Agregar libro
document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página por defecto
  
    // Construye un objeto con los datos del formulario
    const bookData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      description: document.getElementById('description').value,
      isbn: document.getElementById('isbn').value,
      publishedAt: document.getElementById('publishedAt').value,
      availableCopies: parseInt(document.getElementById('availableCopies').value, 10),
    };
  
    try {
      // Realiza una solicitud POST para agregar un nuevo libro
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST', // Método HTTP para enviar datos
        headers: { 'Content-Type': 'application/json' }, // Indica que el cuerpo es JSON
        body: JSON.stringify(bookData), // Convierte el objeto en una cadena JSON
      });
  
      const result = await response.json(); // Convierte la respuesta a JSON
  
      if (response.ok) {
        alert('Libro agregado con éxito'); // Muestra una alerta si todo salió bien
      } else {
        alert(`Error: ${result.message || JSON.stringify(result)}`); // Muestra error si la respuesta no es OK
      }
    } catch (error) {
      alert(`Error: ${error.message}`); // Muestra un mensaje si ocurre un error durante la solicitud
    }
  });
  
// Actualizar libro
document.getElementById('updateForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Obtiene el ID del libro a actualizar
  const id = document.getElementById('updateId').value;

  // Construye el objeto con los datos actualizados
  const updateData = {
    title: document.getElementById('updateTitle').value,
    author: document.getElementById('updateAuthor').value,
    description: document.getElementById('updateDescription').value,
  };

  try {
    // Realiza una solicitud PATCH para actualizar el libro
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH', // Método PATCH para actualizaciones parciales
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });

    const result = await response.json(); // Convierte la respuesta a JSON

    // Muestra un mensaje de éxito o error según la respuesta de la API
    showMessage(response.ok ? 'Libro actualizado con éxito' : `Error: ${result.message}`);
  } catch (error) {
    showMessage(`Error: ${error.message}`); // Muestra un mensaje de error en caso de fallo
  }
});

// Eliminar libro
document.getElementById('deleteForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita la recarga de la página al enviar el formulario

  // Obtiene el ID del libro a eliminar
  const id = document.getElementById('deleteId').value;

  try {
    // Realiza una solicitud DELETE para eliminar el libro
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    // Muestra un mensaje según el éxito de la operación
    showMessage(response.ok ? 'Libro eliminado con éxito' : 'Error al eliminar libro');
  } catch (error) {
    showMessage(`Error: ${error.message}`); // Muestra un mensaje de error en caso de fallo
  }
});

// Función para obtener datos de un formulario específico
function getFormData(formId) {
  const form = document.getElementById(formId); // Selecciona el formulario
  const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario
  const data = {}; // Objeto para almacenar los datos procesados

  // Itera sobre los pares clave-valor del FormData
  formData.forEach((value, key) => {
    // Guarda los datos, convirtiendo 'availableCopies' a número si es necesario
    if (value) data[key] = key === 'availableCopies' ? parseInt(value) : value;
  });

  return data; // Devuelve el objeto con los datos
}

// Función para mostrar un mensaje en pantalla
function showMessage(message) {
  // Inserta el mensaje en el div con ID 'responseMessage'
  document.getElementById('responseMessage').innerText = message;
}
