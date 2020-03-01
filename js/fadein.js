
var news = $('#newspos').offset().top-400;
var work = $('#work').offset().top;
var aboutleft = $('#js-about-left').offset().top-300;

var newsflg = false;
var workflg = false; 
var aboutleftflg = false;
var aboutrightflg = false;

$(window).scroll(function(){
    var sc = $(this).scrollTop();
    //console.log(sc);スクロール値

    if(sc > news  && newsflg == false){
        //console.log("news!");
        newsflg = true;
        $('.js-hide__news').show();
    }
    if(sc > work && workflg == false){
        //console.log("work!");  
        workflg = true;
        $('.js-hide__work').show();
    }
    if(sc > aboutleft  && aboutleftflg == false){
        aboutleftflg = true;
        aboutrightflg = false;
        $('.js-hide-left').show();
        $('.js-hide-right').show();
    }

});

