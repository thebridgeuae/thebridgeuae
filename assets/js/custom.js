/* ==============================================  
           Locomotive scroll Start
=============================================== */
// ------------------Global Selectors;--------------------
// const pos = 0;
const head = document.querySelector(".header");
const nav = document.querySelector("nav");
const log = document.getElementById("logo");
const navbar = document.querySelector(".navbar");
const toTop = document.getElementById("scroll-to-top");

// ------------------Global Selectors;--------------------

// ------------------LOCOMOTIVE--------------------
//initialize locomotive
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  scrollbarContainer:false,
  lerp: 0.03,
  smartphone: {
    smooth: false,
    inertia: 0.8,
    getDirection: true,
    // breakpoint: 767,
  },
  tablet: {
    smooth: false,
    inertia: 0.8,
    getDirection: true,
    // breakpoint: 1024,
  },
  smoothMobile: true,
  scrollFromAnywhere: false,
  getSpeed: true,
  getDirection: true,
  useKeyboard: true,
  class: "in-view",
  reloadOnContextChange: true,
});

//update
$(window).on("load", function () {
  locoScroll.update();
});

/* Locomotive navbar hide/show/shrink */
locoScroll.on("scroll", (args) => {
  var pos = args.scroll.y;
  if (pos > 0) {
    navbar.classList.add("navbar-sticky");
  }
  toTop.style.display = "none";

  navbar.removeAttribute("data-aos");
  navbar.removeAttribute("ddata-aos-delay");

  var scroll = args.scroll.y;

  if (!navbar.classList.contains("relative")) {
    // Down
    if (scroll > pos) {
      navbar.classList.add("navbar-sticky");
      if (navbar.contains("navbar-fixed") || window.innerWidth <= 767) {
        navbar.classList.toggle("hidden");
      } else {
        if (args.scroll.y >= window.innerHeight) {
          navbar.classList.toggle("visible");
        }
      }
      toTop.style.opacity = 0;

      // Up
    } else {
      if (!navbar.classList.contains("navbar-no-fixed")) {
        // console.log("yes");
        // navbar.classList.toggle("hidden");
        log.classList.remove("minilogo");
        nav.classList.remove("navbarshrink-onscroll");
      }

      // Top
      if (args.scroll.y <= 50 && $(".navbar-holder").length == 0) {
        navbar.classList.remove("navbar-sticky");
      } else {
        if (!navbar.classList.contains("navbar-no-fixed")) {
          nav.classList.add("navbarshrink-onscroll");
          log.classList.add("minilogo");
        }
      }

      if (pos >= window.innerHeight && window.innerWidth >= 767) {
        toTop.style.opacity = 0;
      } else {
        toTop.style.opacity = 0;
      }
    }
    pos = scroll;
  }
});

/* Locomotive Anchor Scroll */
const anchorLinks = document.querySelectorAll("a[href^=\\#]:not([href$=\\#])");
anchorLinks.forEach((anchorLink) => {
  let hashval = anchorLink.getAttribute("href");
  let target = document.querySelector(hashval);

  anchorLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    locoScroll.scrollTo(target);
  });
});
/* ==============================================  
           Locomotive scroll End
=============================================== */
/* ==============================================  
            Form Validation Start
=============================================== */
(function ($) {
  "use strict";


  /*==================================================================
  [ Validate after type ]*/
  $('.validate-input .input100').each(function(){
      $(this).on('blur', function(){
          if(validate(this) == false){
              showValidate(this);
          }
          else {
              $(this).parent().addClass('true-validate');
          }
      })    
  })


  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
         $(this).parent().removeClass('true-validate');
      });
  });

   function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');

      $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
      $('.btn-hide-validate').each(function(){
          $(this).on('click',function(){
             hideValidate(this);
          });
      });
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();
      $(thisAlert).removeClass('alert-validate');
      $(thisAlert).find('.btn-hide-validate').remove();
  }
  
  

})(jQuery);

/* ==============================================  
           Form Validation End
=============================================== */

/* ==============================================  
           Expand/Collapse Text
=============================================== */
// $(".moreless-button").click(function () {
//   $(".moretext").slideToggle();
//   if ($(".moreless-button").text() === "Read more") {
//     console.log('yes')
//     $(this).text("Read less");
//     console.log('less')
//   } else {
//     $(this).text("Read more");
//   }
// });

$('.read-more').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Read More") {
      $(this).text("Read Less");
  } else {
      $(this).text("Read More");
  }
});
/* ==============================================  
           Expand/Collapse Text end
=============================================== */

/* ==============================================  
           light Gallary start
=============================================== */
$(document).ready(function() {
  var galleryBox = document.getElementById('gallery-container');
  lightGallery(galleryBox, {
      plugins: [lgThumbnail],
      speed: 500,
      mode: 'fade'
  });
})
/* ==============================================  
            light Gallary end
=============================================== */


/* ==============================================  
           Google MAp Start
=============================================== */
function init() {
  console.log("map start");
  var myLatlng = new google.maps.LatLng(35.692056, 51.258393);
  var mapOptions = {
    zoom: 11,
    center: myLatlng,
    styles: [
      { featureType: "administrative", elementType: "all", stylers: [{ saturation: "-100" }] },
      { featureType: "administrative.province", elementType: "all", stylers: [{ visibility: "off" }] },
      { featureType: "landscape", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }] },
      { featureType: "poi", elementType: "all", stylers: [{ saturation: -100 }, { lightness: "50" }, { visibility: "simplified" }] },
      { featureType: "road", elementType: "all", stylers: [{ saturation: "-100" }] },
      { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] },
      { featureType: "road.arterial", elementType: "all", stylers: [{ lightness: "30" }] },
      { featureType: "road.local", elementType: "all", stylers: [{ lightness: "40" }] },
      { featureType: "transit", elementType: "all", stylers: [{ saturation: -100 }, { visibility: "simplified" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }] },
      { featureType: "water", elementType: "labels", stylers: [{ lightness: -25 }, { saturation: -100 }] },
    ],
  };
  var mapElement = document.getElementById("map");
  var map = myLatlng.Map(mapElement, mapOptions);
  var marker = myLatlng.Marker({
    position: myLatlng.LatLng(40.67, -73.94),
    map: map,
    title: "Snazzy!",
  });
}
/* ==============================================  
           Google MAp End
=============================================== */


/* ==============================================  
           Humberger Menue Start
=============================================== */
function closeNav() {
  document.getElementById("checkbox").checked = false;

}
/* ==============================================  
           Humberger MEnue End
=============================================== */

// -----------------images load-----------------------------
// $('body').imagesLoaded().always( function( instance ) {
//   locoScroll.update();

// ------------------LOCOMOTIVE--------------------
// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
// (function ($, win) {
//   $.fn.inViewport = function (cb) {
//     return this.each(function (i, el) {
//       function visPx() {
//         var H = $(this).height(),
//           r = el.getBoundingClientRect(),
//           t = r.top,
//           b = r.bottom;
//         return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
//       }
//       visPx();
//       $(win).on("resize scroll", visPx);
//     });
//   };
// })(jQuery, window);

// $(".sec-card").inViewport(function (px) {
//   if (px) $(this).addClass("triggeredCSS3");
// });

//--------------navbar/logo resize on scroll event ----------
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $("nav");
//     var $log = $("#logo");
//     var $burger = $("#burgermenu");
//     var viewportWidth = $(window).width();
//     if (viewportWidth >= 1199) {
//     $nav.toggleClass("navbarshrink-onscroll", $(this).scrollTop() > $nav.height());
//     $log.toggleClass("minilogo", $(this).scrollTop() > $nav.height());
//     $burger.toggleClass('menu-wrap-poschange', $(window).scrollTop() == 0);
//     }
//   });
// });

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-sticky");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > 150);
//   });
// });

///----------------------------hide Humberger Menu---------------------------------------------
// function hidHumbergerMenu() {
// var section1 = document.querySelector('.banner');
// var position1 = section1.getBoundingClientRect();
// var section = document.querySelector(".footer");
// var position = section.getBoundingClientRect();

//Checking whether the specified sections are visible
//If any of them is visible, then show the float content. Else, hide it.
// if (position1.top < window.innerHeight && position1.bottom >= 0) {
//Show the floating element
//   document.querySelector('.float-popup').style.display = "block";
//   return;
// } else {
//   document.querySelector('.float-popup').style.display = "none";
// }

// if (position.top < window.innerHeight && position.bottom >= 0) {
//Show the floating element
// document.querySelector("#burgermenu").style.display = "none";
// } else {
// document.querySelector("#burgermenu").style.display = "block";
// }
// }

// Run the function on scroll
// window.addEventListener("scroll", hidHumbergerMenu);
// Run the function on load, if any elements are already visible without scrolling
// window.addEventListener("load", hidHumbergerMenu);

// -----------------Smooth scroll Bar-----------------------------
// jQuery(function($){
//     var Scrollbar = window.Scrollbar;
//     var options = {
//         'damping': 0.07,
//         'alwaysShowTracks':true,
//         'renderByPixels':true,
//     }
//         Scrollbar.init(document.getElementById('smoothscroll'),options);
// });
// const Scroll = SmoothScrollbar.init(this.scrollbarComponentRef.current);
// if (disableXAxis) {
// }

// -----------------Docslider init-----------------------------
// jQuery(function($){
//     docSlider.init({
//         speed : 800,
//         startSpeed : null,
//         easing : 'ease',
//         scrollReset : false
//       });
// });

// -----------------Document/location Reload-----------------------------
// const reloadtButton = document.querySelector("#reload");
// function reload() {
//     reload = location.reload();
// }
// reloadtButton.addEventListener("click", reload, false);
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);