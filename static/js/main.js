$(document).ready(function ($) {

  // Llama a la función para manejar el menú fijo en el scroll y carga inicial
  $(window).on("scroll", fixedMenu);
  fixedMenu(); // Llama a la función una vez al cargar el documento

  // Manejar el menú fijo en base al scroll
  function fixedMenu() {
    var $navbarMiddle = $("#navbarMiddle");
    if ($(window).scrollTop() >= 80) {
      $("#navbarTop").addClass("nav-top__active");
      $navbarMiddle.css({
        position: "fixed",
        top: "0",
        left: "0",
        "background-color": "rgba(255, 255, 255, .9)",
        "box-shadow": "0 0 20px rgba(0,0,0, .3)",
      });
    } else {
      $("#navbarTop").removeClass("nav-top__active");
      $navbarMiddle.css({
        position: "relative",
        top: "initial",
        left: "initial",
        "background-color": "rgba(255, 255, 255, .6)",
        "box-shadow": "0 0 20px rgba(0,0,0, .3)"
      });
    }
  }

  // Manejar el click en el ícono de hamburguesa para el menú móvil
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-window-close");
    $(".navbar__menu").toggleClass("navbar__menu-toggle");
  });

  // Cerrar el menú móvil al hacer scroll o cargar la página
  $(window).on('scroll load', function(){
    $('.fa-bars').removeClass('fa-window-close');
    $('.navbar__menu').removeClass('navbar__menu-toggle');
  });

  //close modal form
  $("#close__modal").click(function(){
    let countProductValue = $(".count-product .value");
    $(".modal-form").removeClass("modal-form__toggle");
    $("#form__modal")[0].reset();
    $("#product_container").remove();
    countProductValue.text("0");
  });

  //image product
  $('.thumbnail-set img').click(function(){
      $(this).addClass("image-active").siblings().remove("image-active");
      let image = $(this).attr("src");
      $(".big-image img").attr("src", image);
  });

});
