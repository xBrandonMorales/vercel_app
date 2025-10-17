function mostrarMensaje() {
    document.getElementById("mensaje").textContent = "✅ Integración continua funcionando correctamente.";
  }
  
  // Exportar la función para pruebas
  if (typeof module !== "undefined") {
    module.exports = { mostrarMensaje };
  }
  