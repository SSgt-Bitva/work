

$(document).ready(function () {


//Number
    function countup(number){
            var countBlockTop = $('.number').offset().top;
            var windowHeight = window.innerHeight;
            var show = true;

            $(window).scroll( function (){
                if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
                    show = false;

                    $('.number').spincrement({
                        thousandSeparator: "",
                        from: 1,
                        duration: 4000,
                    });
                }
            });
        }

        $(function() {
            countup("number", $(".number").text());
            });



//Burger

$("#navToggle").on('click', function(event) {
    event.preventDefault();
 $("#nav").toggleClass("active")
 $("body").toggleClass("lock")

});

//nav

    let top_nav = $("#top_nav");
    let about = $("#about");
    let introH = about.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let slider = $("#slider");


$(window).on("scroll resize", function() {
        introH = about.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });


    function checkScroll(scrollPos, introH) {

        if( scrollPos > introH ) {
            top_nav.addClass("fixed");
            top_nav.removeClass("main_top");
        } else {
            top_nav.removeClass("fixed");
            top_nav.addClass("main_top");
        }
    }

 $('[data-scroll]').on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset(). top;

        nav.removeClass("fixed");

        console.log(elementId);

        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);

    });

    window.onscroll = magic;
     function magic() {
      if (window.pageYOffset) {
       $("#nav").removeClass("active");
       $("#nav-toggle").removeClass("active");
      }
     }




//slider

$("#slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    speed: 500,
    cssEase: 'liner',
});

$("#works").slick({
    adaptiveHeight: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    speed: 500,
    cssEase: 'liner',
});


//header

$('html, body').toggleClass ('lock');

$('#main_btn').on('click', function(){

    $('html, body').removeClass ('lock');

});














});
