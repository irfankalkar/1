/******************************************************************************************************/
/*******************************************************************************************************/


/* BU KOD İLE EŞ ZAMANLI MOUSE İLE DOKUNMATİK EKRAN ÇAKLISABİLİYOR.
 * BUNU KULLANIRSAK CSS TARAFINDA İLGİLİ HOVER'LAR SİLİNMEK ZORUNDA.
 * AYRICA HOVER ANİMASYONLARI TEK SEFERE MAHSUS İŞLİYOR. İKİNCİYE İŞLEMİYOR.




const portfolio_item_Dokunmatik_Ekran = document.querySelectorAll(".portfolio_item");
const portfolio_item_hover_Dokunmatik_Ekran = document.querySelectorAll(".portfolio_item_hover");
const item_info_em_Dokunmatik_Ekran = document.querySelectorAll(".item_info em");
const item_info_span_Dokunmatik_Ekran = document.querySelectorAll(".item_info span");
const item_info_tarih_span_Dokunmatik_Ekran = document.querySelectorAll(".item_info_tarih span");

for (let i = 0; i < portfolio_item_Dokunmatik_Ekran.length; i++) {
	
	
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("mouseenter", function() {
	
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transition = "all .3s";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.portfolio_item_hover').style.display = 'block';  
	portfolio_item_hover_Dokunmatik_Ekran[i].style.opacity = "1";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";

	  
	item_info_em_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info em').style.display = 'block'; 
	item_info_em_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_em_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_span_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info span').style.display = 'block';   
	item_info_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_tarih_span_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info_tarih span').style.display = 'block';   
	item_info_tarih_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_tarih_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	    
  });
	
	
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("mouseleave", function() {
	  
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transition = "all .3s";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.display = 'none';
	//this.querySelector('.portfolio_item_hover').style.display = 'none';  
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateY(100%)";
		  
  });
	
	
	
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("touchstart", function() {
	  
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transition = "all .3s";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.portfolio_item_hover').style.display = 'block';  
	portfolio_item_hover_Dokunmatik_Ekran[i].style.opacity = "1";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";

	  
	item_info_em_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info em').style.display = 'block'; 
	item_info_em_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_em_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_span_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info span').style.display = 'block';   
	item_info_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_tarih_span_Dokunmatik_Ekran[i].style.display = 'block';
	//this.querySelector('.item_info_tarih span').style.display = 'block';   
	item_info_tarih_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_tarih_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";


  });
  
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("touchend", function() {
	  
	  portfolio_item_hover_Dokunmatik_Ekran[i].style.transition = "all .3s";
	  portfolio_item_hover_Dokunmatik_Ekran[i].style.display = 'none';
	  //this.querySelector('.portfolio_item_hover').style.display = 'none';  
	  portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateY(100%)";

	  
	  // portfolio_item_hover_Dokunmatik_Ekran[i].classList.remove("active");
  });
}


*/


/******************************************************************************************************/
/*******************************************************************************************************/


/* BU KOD İLE MOUSE İLE DOKUNMATİK EKRAN EŞZAMANLI ÇALIŞAMIYOR. AMA AYRI AYRI SORUNSUZ ÇALIŞIYORLAR.
  BUNU KULLANIRSAK CSS TARAFINDA İLGİLİ HOVER'LAR BULUNMAK ZORUNDA */


const portfolio_item_Dokunmatik_Ekran = document.querySelectorAll(".portfolio_item");
const portfolio_item_hover_Dokunmatik_Ekran = document.querySelectorAll(".portfolio_item_hover");
const item_info_em_Dokunmatik_Ekran = document.querySelectorAll(".item_info em");
const item_info_span_Dokunmatik_Ekran = document.querySelectorAll(".item_info span");
const item_info_tarih_span_Dokunmatik_Ekran = document.querySelectorAll(".item_info_tarih span");

for (let i = 0; i < portfolio_item_Dokunmatik_Ekran.length; i++) {
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("touchstart", function() {

	portfolio_item_hover_Dokunmatik_Ekran[i].style.opacity = "1";
	portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_em_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_em_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";
	  
	item_info_tarih_span_Dokunmatik_Ekran[i].style.opacity = "1";
	item_info_tarih_span_Dokunmatik_Ekran[i].style.transform = "translateX(0px)";


  });
  
  portfolio_item_Dokunmatik_Ekran[i].addEventListener("touchend", function() {
	  
	  portfolio_item_hover_Dokunmatik_Ekran[i].style.transform = "translateY(100%)";
	  
	  // portfolio_item_hover_Dokunmatik_Ekran[i].classList.remove("active");
  });
}


/******************************************************************************************************/
/*******************************************************************************************************/




var audio = document.getElementById('audio');
var oynat_duraklat_BTN = document.getElementById('oynat_duraklat_BTN');
var say = 0;

function oynatDuraklat(){
    if(say == 0){
        say = 1;
        audio.play();
        oynat_duraklat_BTN.innerHTML = "Duraklat &#9208;"
    }
    
    else{
        say = 0;
        audio.pause();
        oynat_duraklat_BTN.innerHTML = "Oynat ►"
    }
}

function sonlandir(){
    oynatDuraklat()
    audio.pause();
    audio.currentTime = 0;
    oynat_duraklat_BTN.innerHTML = "Oynat ►"
    
}

// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
	$("#demo08").animatedModal8();
	
    $("#demo07").animatedModal7();
    
    $("#demo06").animatedModal6();
    
    $("#demo05").animatedModal5();
    
    $("#demo04").animatedModal4();
    
	/* FOTO EVREN BÖLÜMÜ (GEREKİRSE DİYE)

    $("#demo03").animatedModal3();
	*/
    
    $("#demo02").animatedModal2();
    
    $("#demo01").animatedModal1();

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});