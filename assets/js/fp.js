// -----------------fullpage customization-----------------------------

const FullPage = new fullpage("#fp", {
      licenseKey: "XXXXXXXXXXXXXX",

      // sectionsColor: ["#F3D52F", "#FFFFFF", "#E1D4BE", "#c0cc94", "#daeb9e", "#aac05a","#eeeeee","#081c15"],
      anchors:['s1','s2','s3','s4','s5','s6','s7','s8'],
      scrollingSpeed: 700,
      bigSectionsDestination: top,
      responsiveWidth: 1250,
      // navigationTooltips:['Hi!','Who We are','Know us Closer','Gallary','Services','Quotes','Get in Touch','Up!'],
      showActiveTooltip: true,
      // responsiveHeight: 0,
      // responsiveSlides: false,
      // fitToSection: true,
      slidesNavigation: true,
      css3: true,
      controlArrows: false,
      resize: true,
    //   paddingTop: "40px",
      paddingBottom: 0,
      menu: "#mymenu",
      // autoScrolling: true,
      scrollBar: true,
      // scrollOverflow:true,
      // scrollOverflowReset: true,
      navigation: true,
      animateAnchor: true,
      touchSensitivity: 5,
      normalScrollElementTouchThreshold: 5,
      normalScrollElements: "#scrollable",
      easing: "easeInOutCubic",
      easingcss3: "ease",
      lazyLoad: true,
      // sectionSelector: '.vertical-scrolling',
      // slideSelector: '.horizontal-scrolling',
      // navigationPosition: "right",
      afterResponsive: function (isResponsive) {
        if (isResponsive) {
          console.log("I'm in responsive mode");
        }
      },
    });
    fullpage_api.setAllowScrolling(true);
    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });

    $('html').click(function(){
        $('#examplesList').hide();
    });