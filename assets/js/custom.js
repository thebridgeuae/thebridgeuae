// 1- ===============Preloader Start================================
jQuery(function ($) {
  "use strict";

  let preloader = $(".preloader");

  setTimeout(function () {
    preloader.addClass("ready");
  }, preloader.data("timeout"));
});

// 1- ===============hide whats chat on mobile devices================================
// $( document ).ready(function() {      
//   try{ 
//     document.createEvent("TouchEvent");
//     $('#divTo').hide() 
//   }
//   catch(e){ return false; }
// });
// 1-===================auto play audio===========================
$(document).ready(function () {
var source = "assets/vids/mindfulness.mp3"
var audio = new Audio();
audio.src = source;
audio.autoplay = true;
// $("#playBtn").click(function() {
//   audio.play();
// });

// $("#pauseBtn").click(function() {
//   audio.pause();
// });

// $("#stopBtn").click(function() {
//   audio.pause();
//   audio.currentTime = 0;
// });
})
// 2- ====================reload on  window resize==========================
$(function () {
  breakme: if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgentData)) {
    break breakme;
  } else {
    window.onresize = function () {
      if (window.innerWidth > 1334) {
        location.reload();
      }
    };
  }
});

// 2- =====================Language picker==========================
// $(function(){
//   $('.selectpicker').selectpicker();
// });

// 3- ==================logo selection/media type==================
// $(document).ready(function () {
//   var viewportWidth = $(window).width();
//   if (viewportWidth < 886) {
//     console.log("mobile");
//     $(".navbar-brand img").hide();
//     $(".navbar-brand img").css('opacity: 0')
//     navbar.classList.add("navbar-fixed");
//     navbar.classList.add("navbar-sticky");
//     nav.classList.add("navbarshrink-mob");
//     log.classList.add("minilogo-mob");
//     $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/Thebridgebw-sm-lg.svg");
//   }
// });

// 4- ===============Locomotive scroll Start===============================

// ------------------Global Selectors;--------------------
const head = document.querySelector(".header");
const nav = document.querySelector("nav");
const log = document.getElementById("logo");
const navbar = document.querySelector(".navbar");
const navbrand = document.querySelector(".navbar-brand");
const wats = document.querySelector(".divTo");
const toTop = document.getElementById("scroll-to-top");

//initialize locomotive

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  name: "scroll",
  offset: [0, 0],
  smooth: true,
  reloadOnContextChange: true,
  smoothMobile: false, // smooth scroll on mobile
  multiplier: 1.1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  scrollbarContainer: false,
  lerp: 0.03,
  smartphone: {
    smooth: false,
    // inertia: 0.8,
    // getDirection: true,
    // breakpoint: 767,
  },
  tablet: {
    smooth: false,
    // inertia: 0.5,
    // getDirection: true,
    // breakpoint: 1024,
  },
  scrollFromAnywhere: false,
  getSpeed: true,
  getDirection: true,
  useKeyboard: true,
  repeat: false,
  direction: "vertical", // or horizontal
  // class: "in-view",
  class: "is-inview",
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
});
// setTimeout(() => {
//   locoScroll.update();
// }, 1000);

//Locomotive navbar hide/show/shrink
locoScroll.on("scroll", (args) => {
  var pos = args.scroll.y;
  var viewportWidth = $(window).width();

  if (viewportWidth > 800) {
    // console.log("large screen");
    if (pos > 0) {
      navbar.classList.add("navbar-sticky");
    }
    // toTop.style.display = "none";

    navbar.removeAttribute("data-aos");
    navbar.removeAttribute("ddata-aos-delay");
    var scroll = args.scroll.y;

    if (!navbar.classList.contains("relative")) {
      // Down
      if (scroll > pos) {
        navbar.classList.add("navbar-sticky");
        if (navbar.contains("navbar-fixed") || window.innerWidth <= 558) {
          navbar.classList.toggle("hidden");
        } else {
          if (args.scroll.y >= window.innerHeight) {
            navbar.classList.toggle("visible");
          }
        }
        // toTop.style.opacity = 0;

        // Up
      } else {
        if (!navbar.classList.contains("navbar-no-fixed")) {
          log.classList.remove("minilogo-mob");
          nav.classList.remove("navbarshrink-onscroll");
          $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/Thebridgebw-big-optimized.svg");
          // $(".navbar .navbar-brand img").attr("src", "https://ucarecdn.com/f91576a9-dc8c-43bb-8bc3-87fb3cd9c730/-/preview/-/quality/smart/-/format/auto/Thebridgebw-big-lg.svg");
        }

        // Top
        if (args.scroll.y <= 50 && $(".navbar-holder").length == 0) {
          navbar.classList.remove("navbar-sticky");
        } else {
          if (!navbar.classList.contains("navbar-no-fixed")) {
            nav.classList.add("navbarshrink-onscroll");
            log.classList.add("minilogo-mob");
            $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/Thebridgebw-sm-optimized.svg");
            // $(".navbar .navbar-brand img").attr("src", "https://ucarecdn.com/ac9eb344-2458-439c-a0a1-1f186ce4560e/-/preview/-/quality/smart/-/format/auto/Thebridgebw-sm-lg-min.svg");
          }
        }

        // if (pos >= window.innerHeight && window.innerWidth >= 767) {
        //   toTop.style.opacity = 0;
        //  }
        // else {
        //   toTop.style.opacity = 0;
        // }
      }
      pos = scroll;
    }
  } else {
    // console.log("mobile screen");
    navbar.classList.add("navbar-sticky");
    nav.classList.add("navbarshrink-mob");
    log.classList.add("minilogo-mob");
    $(".navbar .navbar-brand img").attr("src", "./assets/images/logo/Thebridgebw-sm-optimized.svg");
  }
  //Detect locoscroll Pos whole number value where scroll stopped and show/hide action_whatsapp_icon
// if (pos - Math.floor(pos) !== 0) {
//     console.log(pos);
//     $(".divTo").fadeOut(3000);
//   } else {
//     $(".divTo").fadeIn(100);
//   }
});

//Update
$(window).on("load", function () {
  locoScroll.update();
});

//Locomotive smooth Anchor Scroll
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

// 5- ================ Hero Slider Start==============================
jQuery(document).ready(function ($) {
  const outerbtn = "#" + $("#sliderbtns").attr("id");
  // console.log(outerbtn)
  startSlider($("#slider"), 39); // Slide container ID, SlideShow interval

  function startSlider(obj, timer) {
    var obj, timer;
    var id = "#" + obj.attr("id");
    // console.log(id)
    var slideCount = obj.find("ul li").length;
    slideWidth = obj.attr("data-width");
    var sliderUlWidth = (slideCount + 1) * slideWidth;
    var time = 2;
    var $bar, isPause, tick, percentTime;
    isPause = false; //false for auto slideshow

    $bar = obj.find(".progress .bar");
    // pause

    // pause
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      tick = setInterval(interval, timer);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          moveRight();
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $bar.css({
        width: 0 + "%",
      });
      clearTimeout(tick);
    }

    function startslide() {
      $(id + " ul li:last-child").prependTo(id + " ul");
      obj.find("ul").css({ width: sliderUlWidth + "vw", marginLeft: -slideWidth + "vw" });

      obj.find("ul li:last-child").appendTo(obj.attr("id") + " ul");
    }

    if (slideCount > 1) {
      startslide();
      startProgressbar();
    } else {
      // hade navigation buttons for 1 slide only
      $(id + " button.control_prev").hide();
      $(id + " button.control_next").hide();
    }

    function moveLeft() {
      $(id + " ul").css({ transition: "1s", transform: "translateX(" + slideWidth + "vw)" });

      setTimeout(function () {
        $(id + " ul li:last-child").prependTo(id + " ul");
        $(id + " ul").css({ transition: "none", transform: "translateX(" + 0 + "vw)" });

        $("li.actslide").prev().addClass("actslide").next().removeClass("actslide");
      }, 1000);
    }

    function moveRight2() {
      // fix for only 2 slades
      $(id + " ul li:first-child").appendTo(id + " ul");

      $(id + " ul")
        .css({ transition: "none", transform: "translateX(100vw)" })
        .delay();

      setTimeout(
        function () {
          $(id + " ul").css({ transition: "1s", transform: "translateX(0vw)" });
        },
        100,
        setTimeout(function () {
          $(id + " ul").css({ transition: "none", transform: "translateX(0vw)" });
          $("li.actslide").next().addClass("actslide").prev().removeClass("actslide");
        }, 1000)
      );
    }

    function moveRight() {
      if (slideCount > 2) {
        $(id + " ul").css({ transition: "1s", transform: "translateX(" + -1 * slideWidth + "vw)" });

        setTimeout(function () {
          $(id + " ul li:first-child").appendTo(id + " ul");
          $(id + " ul").css({ transition: "none", transform: "translateX(" + 0 + "vw)" });

          $("li.actslide").next().addClass("actslide").prev().removeClass("actslide");
        }, 1000);
      } else {
        moveRight2();
      }
    }

    // console.log(outerbtn)
    $(outerbtn + " button.control_prev").click(function () {
      // console.log(outerbtn)
      moveLeft();
      startProgressbar();
    });

    $(outerbtn + " button.control_next").click(function () {
      moveRight();

      startProgressbar();
    });

    $(id + " .progress").click(function () {
      if (isPause === false) {
        isPause = true;
      } else {
        isPause = false;
      }
    });
  }
});

// 6- =================Form Validation Start===========================
(function ($) {
  "use strict";

  /*==================================================================
  [ Validate after type ]*/
  $(".validate-input .input100").each(function () {
    $(this).on("blur", function () {
      if (validate(this) == false) {
        showValidate(this);
      } else {
        $(this).parent().addClass("true-validate");
      }
    });
  });

  /*==================================================================
  [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
      $(this).parent().removeClass("true-validate");
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");

    $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>');
    $(".btn-hide-validate").each(function () {
      $(this).on("click", function () {
        hideValidate(this);
      });
    });
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass("alert-validate");
    $(thisAlert).find(".btn-hide-validate").remove();
  }
})(jQuery);

//7- ===========Expand/Collapse Text===================================
$(".read-more").click(function () {
  $(this).prev().slideToggle();
  if ($(this).text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});

//  8- ===============light Gallary start==============================
// $(document).ready(function () {
//   var galleryBox = document.getElementById("gallery-container");
//   lightGallery(galleryBox, {
//     plugins: [lgThumbnail],
//     speed: 500,
//     mode: "fade",
//   });
// });

// 9- =============info Tabs carousal slider Start=========================
$(function () {
  var owl = $(".owl-1");
  owl.owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: false,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
  });

  var carousel_nav_a = $(".carousel-nav a");

  carousel_nav_a.each(function (slide_index) {
    var $this = $(this);
    $this.attr("data-num", slide_index);
    $this.click(function (e) {
      owl.trigger("to.owl.carousel", [slide_index, 1500]);
      e.preventDefault();
    });
  });

  owl.on("changed.owl.carousel", function (event) {
    carousel_nav_a.removeClass("active");
    $(".carousel-nav a[data-num=" + event.item.index + "]").addClass("active");
  });
});

// 10- ==============vertical Tabs navigation start========================
!(function () {
  var t = {
      611: function () {
        !(function (t) {
          const e = t("#vtabs .tab-link"),
            r = t("#vtabs .tab-body");
          let n;
          const o = () => {
            e.off("click").on("click", function (o) {
              o.preventDefault(),
                o.stopPropagation(),
                window.clearTimeout(n),
                e.removeClass("active "),
                r.removeClass("active "),
                r.removeClass("active-content"),
                t(this).addClass("active"),
                t(t(this).attr("href")).addClass("active"),
                (n = setTimeout(() => {
                  t(t(this).attr("href")).addClass("active-content");
                }, 50));
            });
          };
          t(function () {
            o();
          });
        })(jQuery);
      },
      221: function (t, e, r) {
        "use strict";
        t.exports = r.p + "css/style.css";
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return r.d(e, { a: e }), e;
  }),
    (r.d = function (t, e) {
      for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      var t;
      r.g.importScripts && (t = r.g.location + "");
      var e = r.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName("script");
        n.length && (t = n[n.length - 1].src);
      }
      if (!t) throw new Error("Automatic publicPath is not supported in this browser");
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = t + "../");
    })(),
    (function () {
      "use strict";
      r(221), r(611);
    })();
})();

//11-  ===============  Humberger Menue Start==============================
function closeNav() {
  document.getElementById("checkbox").checked = false;
}

//12- ============hover effects disabled on-touch.=======================
var mobileNoHoverState = (function () {
  var hoverClass = "hover",
    $target = $(".foo"),
    preventMouseover = false;

  function forTouchstart() {
    preventMouseover = true;
  }

  function forMouseover() {
    if (preventMouseover === false) {
      $(this).addClass(hoverClass);
    } else {
      preventMouseover = false;
    }
  }

  function forMouseout() {
    $(this).removeClass(hoverClass);
  }

  function init() {
    $target.on({
      touchstart: forTouchstart,
      mouseover: forMouseover,
      mouseout: forMouseout,
    });
  }

  return {
    init: init,
  };
})();

//13- ==============Cookies notice START================================
jQuery(function ($) {
  "use strict";

  let cookieNotice = true;

  if (cookieNotice) {
    // Translate
    gdprCookieNoticeLocales.en = {
      description:
        "We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.",
      settings: "Cookie settings",
      accept: "Accept cookies",
      statement: "Our cookie statement",
      save: "Save settings",
      always_on: "Always on",
      cookie_essential_title: "Essential website cookies",
      cookie_essential_desc:
        "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
      cookie_performance_title: "Performance cookies",
      cookie_performance_desc:
        "These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. For example it stores your preferred language or the region that you are in.",
      cookie_analytics_title: "Analytics cookies",
      cookie_analytics_desc:
        "We use analytics cookies to help us measure how users interact with website content, which helps us customize our websites and application for you in order to enhance your experience.",
      cookie_marketing_title: "Marketing cookies",
      cookie_marketing_desc:
        "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
    };

    gdprCookieNotice({
      locale: "en", // This is the default value
      timeout: 2000, // Time until the cookie bar appears
      expiration: 30, // This is the default value, in days
      domain: window.location.hostname, // If you run the same cookie notice on all subdomains, define the main domain starting with a .
      implicit: true, // Accept cookies on page scroll automatically
      statement: "https://zoombree.com", // Link to your cookie statement page
      performance: ["JSESSIONID"], // Cookies in the performance category.
      analytics: ["ga"], // Cookies in the analytics category.
      marketing: ["SSID"], // Cookies in the marketing category.
    });
  }
});

//12- ==============Initialize and add the map============================
// function initMap() {
//   // The location of myLatLng
//   const myLatLng = { lat: 24.49339098050116, lng: 54.36684905506596 };
//   // The map, centered at myLatLng
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 18,
//     center: myLatLng,
//   });

//   // infowindow tooltip
//   const contentString =
//     // '<div id="content">' +
//     // '<div id="siteNotice">' +
//     // "</div>" +
//     // '<img src="./assets/images/icons/thebw_64_icon.ico">'+
//     '<h4 id="firstHeading" class="firstHeading" style="font-weight:600">The Bridge</h4>' +
//     '<div id="bodyContent">' +
//     "<p> The Bridge Center for Skills Development. Specialized in supporting and rehabilitating children and young people. ";
//   // "</div>" +
//   // "</div>";
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//   });

//   // The marker, positioned at myLatLng
//   const marker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "The Bridge Center",
//   });

//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//       shouldFocus: false,
//     });
//   });
//   infowindow.open(map, marker);
// }
// window.initMap = initMap;

//13- ==============Initialize and add the map============================
function google_maps_init() {
  "use strict";
  var roemerberg = { lat: 24.49339098050116, lng: 54.36684905506596 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: roemerberg,
  });
  // infowindow tooltip
  const contentString =
    // '<div id="content">' +
    // '<div id="siteNotice">' +
    // "</div>" +
    // '<img src="./assets/images/icons/thebw_64_icon.ico">'+
    '<h4 id="firstHeading" class="firstHeading" style="font-weight:600">The Bridge</h4>' +
    '<div id="bodyContent">' +
    "<p> The Bridge Center for Skills Development. Specialized in supporting and rehabilitating children and young people. ";
  // "</div>" +
  // "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  var marker = new google.maps.Marker({
    position: roemerberg,
    map: map,
    title: "The Bridge Center",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  infowindow.open(map, marker);
}

function google_maps_lazyload(api_key) {
  "use strict";
  if (api_key) {
    var options = {
      rootMargin: "100px",
      threshold: 0,
    };
    var map = document.getElementById("map");
    var observer = new IntersectionObserver(function (entries, self) {
      // Intersecting with Edge workaround https://calendar.perfplanet.com/2017/progressive-image-loading-using-intersection-observer-and-sqip/#comment-102838
      var isIntersecting = typeof entries[0].isIntersecting === "boolean" ? entries[0].isIntersecting : entries[0].intersectionRatio > 0;
      if (isIntersecting) {
        var mapsJS = document.createElement("script");
        mapsJS.src = "https://maps.googleapis.com/maps/api/js?callback=google_maps_init&key=" + api_key;
        document.getElementsByTagName("head")[0].appendChild(mapsJS);
        self.unobserve(map);
      }
    }, options);
    observer.observe(map);
  }
}
google_maps_lazyload("AIzaSyCoFSVRYsWu2jrufLnxrWap-JyEahAdhOE");
