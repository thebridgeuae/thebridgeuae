$(document).ready(function(){
    function mobileViewUpdate() {
      // var vid = document.getElementById("myVideo");
      // vid.playbackRate = .7;
      var viewportWidth = $(window).width();
      if (viewportWidth < 860) {
            //Means the screen is mobile add a class 
            $("#who").css("margin-top","40px"); 
            $("#what").css("margin-top","40px"); 
            // $("#contactdiv").css("margin-top","150px"); 
            $("#fullbio").hide();
            $("#briefbio").toggle(true);
            $("#quote").toggle(true);
            $("#fullwhat").hide();
            $("#briefwhat").show();
            $("#herologo").hide();            
            $("#hr").show();
            $(".logo-container-r").hide();


            // $("#breifbio").attr("class","show"); 
            // $("#briefbio").style.display = "block"; 
      }
      if (viewportWidth < 1024) {
        $("#imgbio").hide();
        $("#imgwhat").hide();
      }

  }
  $(window).load(mobileViewUpdate);
  $(window).resize(mobileViewUpdate);
  $(window).resize(function(){location.reload();});
  });