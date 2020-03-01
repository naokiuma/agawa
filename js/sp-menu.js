$("#js-menu").on('click',function(){
    $(".menu-trigger").addClass("menu-trigger-active");
    setTimeout(function(){
        $(".menu-trigger").animate({
            "left":"-500px"
        },300);
    },500);
    setTimeout(function(){
        $(".sp-menu").animate({
            "left":"0px",
            "opacity":"1"
        },300);
        $(".menu-trigger").removeClass("menu-trigger-active");

    },1000);
})

$("#js-sp-close").on('click',function(){

    $(".sp-menu").animate({
        "left":"-500px",
        "opacity":"0"
    },300);
    setTimeout(function(){
        $(".menu-trigger").animate({
            "left": "80%"
        },300);

    },200);


})

 //   $(".menu-trigger").addClass("menu-trigger-active");
 //   console.log("クリック");
 //   $(".sp-menu").addClass("sp-menu-active");



//$("#button").on("click", function () {
//    $("#target").animate({
//        "marginLeft": "100px"
//    });
