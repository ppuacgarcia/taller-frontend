const API_URL = 'http://localhost:3000/books';

// Listar libros
document.getElementById('listBooks').addEventListener('click', async () => {
  try {
    const response = await fetch(API_URL);
    const books = await response.json();
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = books.map(book => `
      <p><strong>${book.title}</strong> por ${book.author} (ID: ${book.id})</p>
    `).join('');
  } catch (error) {
    showMessage(`Error al listar libros: ${error.message}`);
  }
});

// Agregar libro
document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Construir el cuerpo de la solicitud con los datos del formulario
    const bookData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      description: document.getElementById('description').value,
      isbn: document.getElementById('isbn').value,
      publishedAt: document.getElementById('publishedAt').value,
      availableCopies: parseInt(document.getElementById('availableCopies').value, 10),
    };
  
    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Libro agregado con éxito');
      } else {
        alert(`Error: ${result.message || JSON.stringify(result)}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
  

// Actualizar libro
document.getElementById('updateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('updateId').value;
  const updateData = {
    title: document.getElementById('updateTitle').value,
    author: document.getElementById('updateAuthor').value,
    description: document.getElementById('updateDescription').value,
  }
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    console.log(updateData)
    const result = await response.json();
    showMessage(response.ok ? 'Libro actualizado con éxito' : `Error: ${result.message}`);
  } catch (error) {
    showMessage(`Error: ${error.message}`);
  }
});

// Eliminar libro
document.getElementById('deleteForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('deleteId').value;
  
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    showMessage(response.ok ? 'Libro eliminado con éxito' : 'Error al eliminar libro');
  } catch (error) {
    showMessage(`Error: ${error.message}`);
  }
});

// Función para obtener datos del formulario
function getFormData(formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    if (value) data[key] = key === 'availableCopies' ? parseInt(value) : value;
  });
  return data;
}

// Mostrar mensaje en pantalla
function showMessage(message) {
  document.getElementById('responseMessage').innerText = message;
}

  