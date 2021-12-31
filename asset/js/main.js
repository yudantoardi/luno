$(document).ready(function(){

    //burger
    $(".burger").click(function(){
        $(".ln-menu-pop").toggleClass("show");
        $($(this).children("i")).toggleClass("fa-times fa-bars");
    });

    //tab
    $(".tab-pane a").click(function(tp){
        tp.preventDefault();
        $(".tab-pane a").removeClass("active");
        $(this).addClass("active");

        $(".tab-box .tab").removeClass("active");
        $($(this).attr("href")).addClass("active");
    })


});