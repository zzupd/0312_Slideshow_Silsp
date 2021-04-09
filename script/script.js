$(function () {


    /* location 객체를 이용한 페이지 이동 */
    $("#moveDaum").click(function(){

        location.href = "https://www.daum.net";
        /*location.href = "이동할 파일명 또는 인터넷URL";*/

    });



    /* location 객체를 이용한 페이지 새로고침(=기능키 F5와 동일) */
    $("#reload").click(function(){

        location.reload();
        /*location.href = "이동할 파일명 또는 인터넷URL";*/

    });

    /* history 객체를 이용한 페이지 뒤로 돌아가기*/
    $("#backBtn").click(function(){
        history.back();   // history.go(-1); 과 동일 기능
    });
    /* history 객체를 이용한 앞페이지로 이동*/
    $("#goBtn").click(function(){
        history.forward();   // history.go(1); 과 동일 기능
    });


    /* 슬라이드쇼 시작 */
    var slideGo = setInterval(fnSlide, 3000);

    $("#startBtn").click(function(){
        slideGo = setInterval(fnSlide, 3000);
        // setInterval 적용
    });

    $("#stopBtn").click(function(){
        clearInterval(slideGo);
        // clearInterval  => setInterval 중지
    });


    /*fnSlide();*/    // 함수를 실행시키는 코드(= 함수의 호출, 콜 Call)

    function fnSlide() {

        $("#slideShuttleFrame").animate({
                "margin-left": "-1000px"
            },
            2500,
            function () {

                // insertAfter 적용위치
                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");

                $("#slideShuttleFrame").css({
                    "margin-left": "0"
                });
            });

    }

   /* 슬라이드쇼 끝 */

});
