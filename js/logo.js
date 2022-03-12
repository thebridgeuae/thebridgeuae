      $(document).ready(function () {
        console.log("scroll start")
        var topIMG = "img/bridge-logo-wb.png";
        var sclIMG = "img/bridge-logo.png";
        $("#mainpage").scroll(function () {
          var scroll = $(this).scrollTop();
          console.log("scrolling inside scroll"); //this is never printed
          if (scroll == -2460) {
            console.log("scrolling");
            $("header.logo img").attr("src", sclIMG);
          } else {
            $("header.logo img").attr("src", topIMG);
          }
        });
      });
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// $(function() { var logo = $(".logo"); $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
    
//         if (scroll >= 500) {
//           if(!logo.hasClass("test-logo")) {
//             logo.hide();
//             logo.removeClass('logo').addClass("test-logo").fadeIn( "slow");
//           }
//         } else {
//           if(!logo.hasClass("logo")) {
//             logo.hide();
//             logo.removeClass("test-logo").addClass('logo').fadeIn( "slow");
//           }
//         }
    
//     });
//     });

// $(document).ready(function(){
//   var newLogo = "http://wp2.dev/sydney-pro/wp-content/uploads/sites/4/2015/03/1.png";
//   var oldLogo = $(".logo").attr("src");

//   $(window).on("load scroll", function () {
//     var y = $(this).scrollTop();
//     if (y >= 500) {
//       $(".logo").attr("src", newLogo);
//     } else {
//       $(".logo").attr("src", oldLogo);
//     }
//   });
// });
