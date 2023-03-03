  
  /*	GEREKİRSE DİYE KALSIN (HTML DİV'LERİNİN CLASS'LARINA GÖRE BELİRTEREK, BİR DİV'İN TELEFON EKRANINA GÖRE YAZI İÇERİKLERİNİ DEĞİŞTİRMEYİ GÖSTERİYOR. BEN CSS TARAFINDAN GÖRSEL OLARAK DAHA İYİ YAPIYORUM AÇIKÇASI
  
  var genislik = window.innerWidth;
  var program_isimleri_1 = document.getElementsByClassName("program_isimleri_1");

  if (genislik <= 500) {
    program_isimleri_1[0].innerHTML = "<strong>M</strong>icrosoft Excel<br><strong>G</strong>oogle Spreadsheet<br><strong>M</strong>icrosoft Power Automate";
  }
  
  */



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

/*
var navbar_kutusu_ul_li_a = document.querySelectorAll('.navbar_kutusu ul li a');

for(var i = 0; i < navbar_kutusu_ul_li_a.length; i++) {
  navbar_kutusu_ul_li_a[i].addEventListener('touchstart', function() {
    this.classList.add('active');
  }, false);

  navbar_kutusu_ul_li_a[i].addEventListener('touchend', function() {
    this.classList.remove('active');
  }, false);
}
*/

var portfolio_categories = document.querySelectorAll('.portfolio .categories-grid .categories ul li a');

for(var i = 0; i < portfolio_categories.length; i++) {
  portfolio_categories[i].addEventListener('touchstart', function() {
    this.classList.add('active');
  }, false);

  portfolio_categories[i].addEventListener('touchend', function() {
    this.classList.remove('active');
  }, false);
}

/******************************************************************************************************/

var language_a_class = document.querySelector('.language_a_class');

language_a_class.addEventListener("touchstart", function() {
   // dokunmatik ekrana basıldığında yapılacak işlemler buraya yazılır
   language_a_class.style.color = "#fff";
   language_a_class.style.borderColor = "#fff";
   language_a_class.style.transition = "all 0s ease-in-out";
   language_a_class.style.transitionDelay = "0s";
   language_a_class.style.transitionDuration = "0s";
   language_a_class.style.transitionProperty = "color, border-color, background-color";
   language_a_class.style.transitionTimingFunction = "ease-in-out";
   language_a_class.style.background = "#425BB5";
   language_a_class.style.position = "relative";
});

language_a_class.addEventListener("touchend", function() {
   // dokunmatik ekrandan parmak çekildiğinde yapılacak işlemler buraya yazılır
   language_a_class.style.color = "#444444";
   language_a_class.style.borderColor = "#425BB5";
   language_a_class.style.background = "transparent";
   language_a_class.style.transition = "all 0s ease-in-out";
   language_a_class.style.transitionDelay = "0s";
   language_a_class.style.transitionDuration = "0s";
   language_a_class.style.transitionProperty = "color, border-color, background-color";
   language_a_class.style.transitionTimingFunction = "ease-in-out";
});

/*******************************************************************************************************/


var navbar_kutusu_ul_li_a = document.querySelectorAll('.navbar_kutusu ul li a');

for(var i = 0; i < navbar_kutusu_ul_li_a.length; i++) {
  navbar_kutusu_ul_li_a[i].addEventListener('touchstart', function() {
    this.classList.add('active');
  }, false);

  navbar_kutusu_ul_li_a[i].addEventListener('touchend', function() {
    this.classList.remove('active');
  }, false);
}

/******************************************************************************************************/
/*******************************************************************************************************/


/*----- BİLGİSAYAR BİLGİLERİ İÇİN DOKUNMATİK EKRAN DESTEĞİ----
 * BU KOD İLE MOUSE İLE DOKUNMATİK EKRAN EŞZAMANLI ÇALIŞAMIYOR. AMA AYRI AYRI SORUNSUZ ÇALIŞIYORLAR.
  BUNU KULLANIRSAK CSS TARAFINDA İLGİLİ HOVER'LAR BULUNMAK ZORUNDA */


const timeline_event_Dokunmatik_Ekran = document.querySelectorAll(".timeline-event");
const timeline_event_icon_Dokunmatik_Ekran = document.querySelectorAll(".timeline-event-icon");
const timeline_event_thumbnail_Dokunmatik_Ekran = document.querySelectorAll(".timeline-event-thumbnail");

for (let i = 0; i < timeline_event_Dokunmatik_Ekran.length; i++) {
  timeline_event_Dokunmatik_Ekran[i].addEventListener("touchstart", function() {

	timeline_event_icon_Dokunmatik_Ekran[i].style.transform = "rotate(-45deg)";
	timeline_event_icon_Dokunmatik_Ekran[i].style.backgroundColor = "#425BB5";
	
	  var css_ozelligi_dokununca = "box-shadow: inset 40em 0 0 0 #425BB5;";
	  timeline_event_thumbnail_Dokunmatik_Ekran[i].style.cssText = css_ozelligi_dokununca;
	  
	//timeline_event_thumbnail_Dokunmatik_Ekran[i].style.boxShadow = "10px 20px 30px blue";
	  // $("#textdiv").css("box-shadow","inset 0px 0px 2px 2px rgba(1,2,111,11)");

  });
  
  timeline_event_Dokunmatik_Ekran[i].addEventListener("touchend", function() {
	  
	  timeline_event_icon_Dokunmatik_Ekran[i].style.transform = "rotate(45deg)";
	  
	  var css_ozelligi_birakinca = "box-shadow: inset 0 0 0 0em #425BB5;";
	  timeline_event_thumbnail_Dokunmatik_Ekran[i].style.cssText = css_ozelligi_birakinca;
	  
  });
}



/******************************************************************************************************/
/*******************************************************************************************************/


/*----- İŞ DENEYİMLERİ KARE İTEMLER İÇİN DOKUNMATİK EKRAN DESTEĞİ ----
 * BU KOD İLE MOUSE İLE DOKUNMATİK EKRAN EŞZAMANLI ÇALIŞAMIYOR. AMA AYRI AYRI SORUNSUZ ÇALIŞIYORLAR.
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
        oynat_duraklat_BTN.innerHTML = "Pause &#9208;"
    }
    
    else{
        say = 0;
        audio.pause();
        oynat_duraklat_BTN.innerHTML = "Play ►"
    }
}

function sonlandir(){
    oynatDuraklat()
    audio.pause();
    audio.currentTime = 0;
    oynat_duraklat_BTN.innerHTML = "Play ►"
    
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