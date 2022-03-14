$(document).ready(function(){
    function mobileViewUpdate() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 860) {
            //Means the screen is mobile add a class 
            $("#who").css("margin-top","35px"); 
            $("#what").css("margin-top","25px"); 
            $("#fullbio").hide();
            $("#briefbio").toggle(true);
            $("#fullwhat").hide();
            $("#briefwhat").show();
            $("#herologo").hide();
            $("#imgbio").hide();
            $("#imgwhat").hide();

            // $("#breifbio").attr("class","show"); 
            // $("#briefbio").style.display = "block"; 
      }
  }
  $(window).load(mobileViewUpdate);
  $(window).resize(mobileViewUpdate);
  $(window).resize(function(){location.reload();});
  });