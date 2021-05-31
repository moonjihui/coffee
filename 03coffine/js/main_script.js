$(function(){
    $(".main>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown()
    })//main>li over
    
    $(".main>li , .sub").mouseout(function(){
        $(".sub").stop().slideUp()
    })//main>li out
    
    //$(".main>li, .sub").hover(function(){},function(){})
/*    $(".main>li, .sub").hover(function(){
        $(this).children(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })*/
})//전체