$(function(){
    $(".c-return").hide();
    $(window).scroll(function(){
        
        let y = $(window).scrollTop();
        if(y >= 250){
            $(".c-return").show();
            console.log(y);
        }else{
            $(".c-return").hide();
        }

    })
    
})
