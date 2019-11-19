// una vez cargue la pagina(document) ejecutamos nuestra logica
$(document).ready(function() {
  var slidersNumber = $(".slider li").length; // LA longitud o numero de sliders
  var count = 1; //iniciamos en la posicion 1

  // Agregamos la paginacion , numero de circulos igual al numero de sliders, en lis
  for (i = 1; i <= slidersNumber; i++) {
    $(".pagination").append('<li><span class="fa fa-circle"></span></li>'); //lis
  }

  $(".slider li").hide(); // Ocultamos  los slides
  $(".slider li:first").show(); // Se muestra  solo el primero
  $(".pagination li:first").css({
    color: "#42a5f5"
  }); // Damos estilos al primer item de la paginacion en este caso solo poner el circulo blanco

  // asociamos a el evento click de los elementos clickeables de nuestro slider, sus respectivas funciones
  $(".pagination li").click(pagination);
  $(".right").click(nextSlider);
  $(".left").click(prevSlider);

  //   Hacemos que se pase automaticamente cada 5000 milisegundos o 5 segundos
  setInterval(function() {
    nextSlider();
  }, 5000);

  function pagination() {
    var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

    $(".slider li").hide(); // Ocultamos todos los slides
    $(".slider li:nth-child(" + paginationPos + ")").fadeIn(); // Mostramos el Slide seleccionado

    // Dandole estilos a la paginacion seleccionada
    $(".pagination li").css({ color: "#858585" });
    $(this).css({ color: "#42a5f5" });

    count = paginationPos;
  }

  function nextSlider() {
    // Si ya nos encontramos en la ultima posicion pasamos al primero (utilizamos IF y else sin las llaves al ser solo de una linea)
    if (count >= slidersNumber) count = 1;
    else count++;

    $(".pagination li").css({ color: "#858585" }); //le damos el color neutral a la paginacion
    $(".pagination li:nth-child(" + count + ")").css({ color: "#42a5f5" }); // y al actual el color azul

    $(".slider li").hide(); // Ocultamos todos los slides
    $(".slider li:nth-child(" + count + ")").fadeIn(); // Mostramos el Slide seleccionado
  }

  function prevSlider() {
    //   si nos encontramos en el primer slider pasamos al ultimo
    if (count <= 1) count = slidersNumber;
    else count--; // sino simplemente nos vamos al previo

    $(".pagination li").css({ color: "#858585" });
    $(".pagination li:nth-child(" + count + ")").css({ color: "#42a5f5" });

    $(".slider li").hide(); // Ocultamos todos los slides
    $(".slider li:nth-child(" + count + ")").fadeIn(); // Mostramos el Slide seleccionado
  }
});
