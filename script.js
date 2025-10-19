function mostrarMensaje() {
    document.getElementById("mensaje").textContent = "✅ La integracion se a completado.";
  }
  
  // Exportar la función para pruebas
  if (typeof module !== "undefined") {
    module.exports = { mostrarMensaje };
  }
  