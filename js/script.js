$(document).ready(main);

var contador = 1;

function main() {
    $('.menu-icon').click(function () {
        $('nav').slideToggle();

    });

};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    /*Alternar entre agregar y eliminar la clase "activa",
    para resaltar el botón que controla el panel*/
   
    this.classList.toggle("active");
    
    /* Alterna entre ocultar y mostrar el panel activo */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
