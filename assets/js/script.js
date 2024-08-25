$(document).ready(function () {
    if ($('#wrapper').hasClass('skewed')) skew = 1000;

    $("#wrapper").mousemove((event) => {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        value = event.clientX + delta;
        $(".handle").css("left", value + 'px');
        $(".top").css("width", value + skew + 'px');
    });




    $('body').vegas({
        slides: [
            { src: 'assets/imagwed/CQD04369.jpg' },
            { src: 'assets/imagwed/CQD04649.jpg' },
            { src: 'assets/imagwed/CQD04660.jpg' },
            { src: 'assets/imagwed/CQD04710.jpg' },
            { src: 'assets/imagwed/CQD04710.jpg' }
        ],
        //cover: 'contain'

    });


});