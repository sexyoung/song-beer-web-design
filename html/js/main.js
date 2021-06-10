$(function() {
  // 因為我的 header 跟 footer 不是用 jq 戴入的
  // 所以如果到我這邊不能執行這2行，會挫賽
  if(localStorage.getItem('isDev') !== null) {
    $('header').load('header.html');
    $('footer').load('footer.html');
  }

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

  // top
  $("div.scroll_top, div.index_top").click(function() {
    $("body,html").animate({scrollTop: 0},500);
  });

  $("#songprize_bt").click(function() {
    const delay = location.pathname !== '/' ? 300: 0;
    setTimeout(function() {
      $("body,html").animate({scrollTop: $("#songprize").offset().top},500);
    }, delay);
  });

});



// scrolltop
function setTop() {
  const win = $(window);
  const scrollTop = win.scrollTop();
  const winHeight = win.height();

  if(scrollTop > winHeight * 0.3 ) {
    $(".scroll_top").fadeIn();
  }else{
    $(".scroll_top").fadeOut();
  }
}

function setScroll() {
  const win = $(window);
  const hWin = win.height();
  const wWin = win.width();
  const scroll = $(window).scrollTop();

  const move = $(".mp, .mt, .ml, .mr, .mb, .ms");

  move.each(function() {
    const tCont = $(this).offset().top;


    if(scroll > tCont - hWin*0.8) {
      $(this).addClass("show");
    }else{
      $(this).removeClass("show");
    }

  });
}

// scroll
$(window).scroll(function() {
  setScroll();
  setTop();

});


// loading
$(document).ready(function() {
  $("#loading").delay(0).fadeOut('slow');
  setScroll();
  setTop();
});

// loading
$(document).ready(function () {
  $("#loading").delay(0).fadeOut("slow");
  setScroll();
  setTop();
});
