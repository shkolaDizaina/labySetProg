$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })

$(document).ready(function(){
  $('carou').slick({
    setting-name: setting-value
  });
});