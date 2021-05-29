$(function() {
  $(".burger").off('click');
  $(".header .nav li").off('click');
  $("div.scroll_top").off('click');

  // nav
  $(".burger").click(function() {
    $(".header").toggleClass("show");
    $(".burger").toggleClass("show");
  });

  $(".header .nav li").click(function() {
    $(".header").toggleClass("show");
    $(".burger").toggleClass("show");
  });
});



