var topIMG = "./img/bridge-logo-wb1.png";
var sclIMG = "./img/bridge-logo.png";   

$('img[alt="Gabriela Silveira"]').attr("class", "logo")

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 30)
      $(".logo").attr("src", sclIMG);
   else
      $(".logo").attr("src", topIMG);
});