// Obtener la posición actual del scroll
var currentScrollPosition = window.pageYOffset;

// Agregar el evento de desplazamiento de la página
window.onscroll = function() {
  // Obtener la nueva posición del scroll
  var newScrollPosition = window.pageYOffset;

  // Comprobar si la posición del scroll ha cambiado
  if (currentScrollPosition != newScrollPosition) {
    // Actualizar la posición actual del scroll
    currentScrollPosition = newScrollPosition;

    // Mostrar u ocultar el botón según la posición del scroll
    if (currentScrollPosition > 20) {
      document.getElementById("connectWallet").style.display = "block";
    } else {
      document.getElementById("connectWallet").style.display = "none";
    }
  }
};
