function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".view").removeClass("view view-portfolio").addClass("gallery-mobile");
    }
}
$(window).load(mobileViewUpdate);
$(window).resize(mobileViewUpdate);




$(window).resize(function(){
  var $theWindowSize = $(this).width();
  if($theWindowSize <=768)
      {
       //Means the screen is mobile add a class 
        $("#who").css("margin-top","25px"); 
        // $("#fullbio").css("display","none"); 
        $("#fullbio").hide();
        // $("#briefbio").show();
        $("#briefbio").toggle(true);
        // $("#breifbio").attr("class","show"); 
        // $("#briefbio").style.display = "block"; 
        // $("#what").attr('class', 'content'); 
      } 
    })