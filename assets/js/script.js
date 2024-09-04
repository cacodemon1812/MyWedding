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
            { src: 'assets/img/nensua-8.jpg' },
            { src: 'assets/img/nensua-11' },
            { src: 'assets/img/CQD04660.jpg' },
            { src: 'assets/img/CQD04710.jpg' },
            { src: 'assets/img/CQD04710.jpg' }
        ],
        //cover: 'contain'

    });


});