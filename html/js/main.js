$(function(){
    // 因為我的 header 跟 footer 不是用 jq 戴入的
    // 所以如果到我這邊不能執行這2行，會挫賽
	if(localStorage.getItem('isDev') !== null) {
        $('header').load('header.html')
        $('footer').load('footer.html')
    }

    setScroll();
    setTop();
    

    //nav
    $(".burger").click(function(){
        $(".header").toggleClass("show");
        $(".burger").toggleClass("show");
    });
    
    $(".header .nav li").click(function(){
        $(".header").toggleClass("show");
        $(".burger").toggleClass("show");
    });

    //top
    $("div.scroll_top").click(function() {
        $("body,html").animate({scrollTop: 0},500);
    });


})



//scrolltop
function setTop(){
    var win = $(window);
    var scrollTop = win.scrollTop();
    var winHeight = win.height();

    if(scrollTop > winHeight * 0.3 ){
        $(".scroll_top").fadeIn();
    }else{
        $(".scroll_top").fadeOut();
    }
}

function setScroll(){
    var win = $(window);
    var hWin = win.height();
    var wWin = win.width();
    var scroll = $(window).scrollTop();

    var move = $(".mp, .mt, .ml, .mr, .mb, .ms");


    move.each(function(){
        var tCont = $(this).offset().top;

        
        if(scroll > tCont - hWin*0.75){
            $(this).addClass("show");
        }else{
            $(this).removeClass("show");
        }

    })
}

//scroll
$(window).scroll(function(){
    setScroll();
    setTop(); 
    
})


//loading	
//$(window).load(function(){	
	//$("#loading").fadeOut(800,0);
	//setScroll();
//});


//$(window).scroll(function(){
	//setScroll(); 
//})

