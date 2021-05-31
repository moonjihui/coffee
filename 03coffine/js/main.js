$(function(){
    //메뉴
    $(".sub").hide(0);
    // $(".nav ul li").hover(function(){
    //     $(this).find(".sub").stop().slideDown();
    // } , function(){
    //     $(this).find(".sub").stop().slideUp();
    // });
    $(".nav li").hover(function(){
        $(".sub , .subback").stop().slideDown();
    }, function(){
        $(".sub , .subback").stop().slideUp();
    })

    //메인이미지
    var n=0 //          0    1        2       3       4 
    //.main_visual left  0    -100%   -200%   -300%   -400% 
    var time = setInterval(moving, 2500)
    function moving(){
        if(n <4){
            n++
        }else{
            n=0
        }//if
        console.log("n : ",n);
        $(".dots ul li a").removeClass("act");
        $(".dots ul li").eq(n).find("a").addClass("act");
        
        // 이미지 자동 슬라이드
        var pos =n*(-100)+"%"
        $(".main_visual").animate({left:pos}, 500)
    }//moving

    // 버튼 호버 멈추기
    $(".dots ul li , .control a").hover(function(){
        clearInterval(time)
    } , function(){
        time = setInterval(moving, 2500)
    })//hover

    //도트버튼클릭
    $(".dots ul li a").click(function(){
        $(".dots ul li a").removeClass("act");
        $(this).addClass("act");

        n= $(this).parent().index();
        console.log("nnn : ", n);
        pos =n*(-100)+"%";
        $(".main_visual").animate({left:pos}, 500)
    })//도트버튼클릭

    $(".prev").click(function(){
        if(n  >0 ){
            n--
        }else{
            return false
            //or  n=4
        }
        console.log("n3 : ", n)
        $(".dots ul li a").removeClass("act");
        $(".dots ul li").eq(n).find("a").addClass("act");
        pos =n*(-100)+"%"
        $(".main_visual").animate({left:pos}, 500)
    })//prev").click
    $(".next").click(function(){
        if(n  <4 ){
            n++
        }else{
            return false
            // 맨끝에는 더 돌아가지않겠다
            //or n=0으로 
        }//next").click
        $(".dots ul li a").removeClass("act");
        $(".dots ul li").eq(n).find("a").addClass("act");
        pos =n*(-100)+"%"
        $(".main_visual").animate({left:pos}, 500)
    })//next").click

    //체크박스
    $(".check").click(function(){
        //글씨를 눌러도 들어가게 check에 걸어줌
        $(".ch_on").toggleClass("on")
    })//

    //페이스북 인스타그램 
    $(".cont5_inner ul li").click(function(e){
        e.preventDefault();
        $(".cont5_inner ul li").removeClass("on")
        $(this).addClass("on")
    })//

    //보내기 버튼
    $(".quick_inner  .send button").click(function(){
        alert("이름을 입력하세요")
        // 원래는 if문으로 입력 안한칸만 찾아 경고창 alert을 해줘야함
    })//send button").click

    //top banner
    $(".top_banner .close").click(function(){
        $(".top_banner").hide()
    })
})//jQ