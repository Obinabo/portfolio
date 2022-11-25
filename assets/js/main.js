$(document).ready(function(){
    $('.skills').hide();
    $('.about').hide();
    $('.services-cont').hide();
    $('.work-cont').hide();
    $('.contact-cont').hide();

    $('#bt-1').click(function(){
        $('.skills').hide();
        $('.about').hide();
        $('.left').show(200);
        $('.main .right').show(200);
        $('.services-cont').hide();
        $('.work-cont').hide();
        $('.contact-cont').hide();
    })

    $('#bt-2').click(function(){
        $('.skills').delay(500).fadeIn(1000);
        $('.about').show(200);
        $('.left').hide();
        $('.right').hide();
        $('.services-cont').hide();
        $('.work-cont').hide();
        $('.contact-cont').hide();
    })

    $('#bt-3').click(function(){
        $('.services-cont').delay(500).show(200);
        $('.left').hide();
        $('.right').hide();
        $('.skills').hide();
        $('.about').hide();
        $('.work-cont').hide();
        $('.contact-cont').hide();
    })
    $('#bt-4').click(function(){
        $('.services-cont').hide();
        $('.left').hide();
        $('.right').hide();
        $('.skills').hide();
        $('.about').hide();
        $('.work-cont').delay(500).fadeIn(1000);
        $('.contact-cont').hide();
    })
    $('#bt-5').click(function(){
        $('.services-cont').hide();
        $('.left').hide();
        $('.right').hide();
        $('.skills').hide();
        $('.about').hide();
        $('.work-cont').hide();
        $('.contact-cont').delay(500).fadeIn(1000);
    })

    $(document).scroll(function(){
       if($(document).scrollTop > 200){
           $('h1').css('animation-play-state : running');
       }
    })
})
   
