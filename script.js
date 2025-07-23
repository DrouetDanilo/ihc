// Función para mostrar las secciones correspondientes al hacer clic
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = 'block';
}

// Función para marcar tareas como completas
function markComplete(taskId) {
  const task = document.getElementById(taskId);
  const status = task.querySelector('.status');

  if (status.textContent === 'Incompleta') {
    status.textContent = 'Completada';
    status.classList.add('completed');
    task.querySelector('button').disabled = true;
  }
}

// Función para verificar las fechas límite y mostrar notificaciones
function checkDeadlines() {
  const tasks = document.querySelectorAll('.week ul li');
  const today = new Date();
  
  tasks.forEach(task => {
    const deadlineText = task.querySelector('.deadline').textContent.split(': ')[1];
    const deadlineDate = new Date(deadlineText);

    // Calcular la diferencia en días
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 3 && diffDays >= 0) {
      // Si la tarea está a 3 días o menos de la fecha límite
      const taskName = task.querySelector('span').textContent;
      alert(`¡Recuerda! La tarea "${taskName}" tiene fecha límite el ${deadlineText}.`);
    }
  });
}

// Llamar a la función de verificación de fechas límite cada 24 horas
setInterval(checkDeadlines, 86400000); // Cada 24 horas (86400000 ms)

// Ejecutar la primera vez cuando la página cargue
checkDeadlines();
function enviarMensaje(event) {
  event.preventDefault();
  const mensaje = document.getElementById('inputMensaje').value;
  const chat = document.getElementById('chatContainer');
  const nuevoMensaje = document.createElement('div');
  nuevoMensaje.classList.add('mensaje', 'yo');
  nuevoMensaje.textContent = mensaje;
  chat.appendChild(nuevoMensaje);
  document.getElementById('inputMensaje').value = '';
  chat.scrollTop = chat.scrollHeight;
}

function cargarMensajes() {
  // Aquí cargarías mensajes desde un backend si lo tuvieras
  document.getElementById('chatContainer').innerHTML = '';
}

function crearReunion(event) {
  event.preventDefault();
  alert("Solicitud de reunión enviada. Espera confirmación del mentor.");
}
function seleccionarChat(checkbox) {
  const checkboxes = document.querySelectorAll('input[name="chat"]');
  checkboxes.forEach(cb => {
    if (cb !== checkbox) cb.checked = false;
  });

  // Aquí puedes cambiar el contenido del chat según la selección
  const conversacion = document.getElementById("contenidoChat");
  if (checkbox.checked) {
    conversacion.innerText = `Estás conversando con: ${checkbox.value === "mentor" ? "Mentor" : "Organizador de i3Lab"}`;
  } else {
    conversacion.innerText = "Selecciona con quién deseas conversar.";
  }
}
