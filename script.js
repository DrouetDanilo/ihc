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
