
//--------------navbar/logo resize on scroll event ----------
$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    var $log= $("#logo");
    var $burger= $("#burgermenu");
    var viewportWidth = $(window).width();
    if (viewportWidth >= 1199) {      
      $nav.toggleClass('navbarshrink-onscroll', $(this).scrollTop() > $nav.height());
      $log.toggleClass('minilogo', $(this).scrollTop() > $nav.height());
      // $burger.toggleClass('menu-wrap-poschange', $(window).scrollTop() == 0);
    }
      });
});


///----------------------------hide Humberger Menu---------------------------------------------
function hidHumbergerMenu() {
    // var section1 = document.querySelector('.banner');
    // var position1 = section1.getBoundingClientRect();
    var section = document.querySelector('.footer');
    var position = section.getBoundingClientRect();
  
    //Checking whether the specified sections are visible
    //If any of them is visible, then show the float content. Else, hide it.
    // if (position1.top < window.innerHeight && position1.bottom >= 0) {
      //Show the floating element
    //   document.querySelector('.float-popup').style.display = "block";
    //   return;
    // } else {
    //   document.querySelector('.float-popup').style.display = "none";
    // }
  
    if (position.top < window.innerHeight && position.bottom >= 0) {
      //Show the floating element
      document.querySelector('#burgermenu').style.display = "none";
    } else {
      document.querySelector('#burgermenu').style.display = "block";
    }
  }
  
  // Run the function on scroll
  window.addEventListener("scroll", hidHumbergerMenu);
  // Run the function on load, if any elements are already visible without scrolling
  window.addEventListener("load", hidHumbergerMenu);
    
// -----------------Smooth scroll Bar-----------------------------
// var viewportWidth = 0;
// $(document).ready(function(){
//       viewportWidth = $(window).width();
//       console.log(viewportWidth)
//   });
// jQuery(function($){
//     var Scrollbar = window.Scrollbar;
//     var options = {
//         'damping': 0.07,
//         'alwaysShowTracks':true,
//     }
//         Scrollbar.init(document.getElementById('smoothscroll'),options);
    
// });

// -----------------Docslider init-----------------------------
// jQuery(function($){
//     docSlider.init({
//         speed : 800,
//         startSpeed : null,
//         easing : 'ease',
//         scrollReset : false
//       });
// });
