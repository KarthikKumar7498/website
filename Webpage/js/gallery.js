$(document).ready(function(){
    $('.next').on('click',function(){
        var currentimg = $('.active');
        var nextimg = currentimg.next();

        if(nextimg.length){
            currentimg.removeclass('active').css('z-index',-10);
            nextimg.addclass('active').css('z-index',10);
    }
});

$('.prev').on('click',function(){
    var currentimg = $('.active');
    var previmg = currentimg.prev();

    if(previmg.length){
        currentimg.removeclass('active').css('z-index',-10);
        previmg.addclass('active').css('z-index',10);
}
});
});

