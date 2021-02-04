$(document).ready( () => {
    $("#partners").owlCarousel({
        loop:true,
        margin:90,
        dots:false,
        responsive: {
                0:{
                    items:2,
                    margin:40
                },
                600:{
                    items:3,
                    margin:70
                },
                1000:{
                    items:5
                }
            }
    });

    var btn = $('#btn');

$(window).scroll(() => {
    if ($(window).scrollTop() >700){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }
})

$('#btn').click(function(){ 
    $("html, body").scrollTop($('html').offset().top); 
});

});