$(document).ready(function () {

    //region select

let select = $("#select");
let subMM = $("#sub_menu_mobile");
let nav = $("#nav");



select.on("click", function () {
    $("#sub_menu").toggleClass("show");
});

$("#menu_mobile").on("click", function () {
    subMM.toggleClass("show");
});

subMM.on("click", function () {
    nav.removeClass("nav_burger");
//    subMM.toggleClass("show");
});

        //nav_burger

$("#button").on("click", function () {
    nav.addClass("nav_burger");
});

$("#nav a").on("click", function () {
    nav.removeClass("nav_burger");
});


    //service_btn


    $("#service_btn").hover(function () {
        $("#service_pic").toggleClass("rotate")
    });

    $("#service_btn_2").hover(function () {
        $("#service_pic_2").toggleClass("rotate")
    });

    $("#service_btn_3").hover(function () {
        $("#service_pic_3").toggleClass("rotate")
    });


    //gallery

    $("#slider_all_lots").hover(function () {
        $(".arrowl").toggleClass("slide_arrowl")
    });

    $("#slider_all_lots").hover(function () {
        $(".arrowr").toggleClass("slide_arrowr")
    });


    //nav


    let intro = $("#intro");
    let innerH = intro.innerHeight ();
    let scrollPoss = $(window).scrollTop ();

    $(window).on("scroll load resize", function () {
        innerH = intro.innerHeight ();
        scrollPoss = $(this).scrollTop();

        if ( scrollPoss > innerH) {
            $("#fixed").addClass("fixed");
        }
        else {
            $("#fixed").removeClass("fixed");
        }
    });

    //scroll
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let sectionId = $(this).data("scroll");
    let sectionOffset = $(sectionId).offset().top;

    $("html, body").animate({

        scrollTop: sectionOffset - 30

    },700);

    console.log(sectionOffset);
});


    //slider


    $("#slider").slick({
        adaptiveHeight: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500,
        cssEase: 'liner',
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {breakpoint: 900,
            settings: {
            slidesToShow: 2,
            }
        },

        {breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }
        }

        ]
    });



    //gallry

    AOS.init({
        anchorPlacement: "top-bottom",
        easing: "ease-out-cubic",
        duration: "1000",
    });



});
