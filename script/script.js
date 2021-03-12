$(function () {

    setInterval(fnSlide, 5000);
    //             함수명만!,  1/1000

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


});
