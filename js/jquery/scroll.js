$(document).ready(function () {
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#scrollProgressBar').css('width', scrollPercent + '%');
    });
});