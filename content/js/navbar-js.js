// NAVBAR SCROLLING SCRIPT


    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
                $("nav").css("background", "darkred");
                $("nav").css("padding", "0 0");
                $("nav a").css("font-size", ".85rem");
                $("nav a").css("font-weight" ,"bold");

                $(".navburger-menu").css("background", "darkred");
            }
            
            else {
                $("nav").css("background", "rgba(0, 0, 0, 0)");
                $("nav").css("padding", "2% 0");
                $("nav a").css("font-size", "1rem");
                $("nav a").css("font-weight" ,"100");

                $(".navburger-menu").css("background", "rgba(0, 0, 0, 0)");
            }
        })
    })



//NAV BURGER

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".navburger").toggleClass("navburger-opened");
    });
  });