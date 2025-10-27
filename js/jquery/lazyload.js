$(document).ready(function () {
    function isElementInView($el) {
        const rect = $el[0].getBoundingClientRect();
        return (
            rect.top < $(window).height() &&
            rect.bottom > 0
        );
    }

    function lazyLoadImages() {
        $('.lazy-load').each(function () {
            const $this = $(this);
            if (isElementInView($this)) {
                const dataSrc = $this.attr('data-src');
                if (dataSrc) {
                    $this.attr('src', dataSrc);
                    $this.removeAttr('data-src');
                    $this.removeClass('lazy-load').addClass('lazy-loaded');
                }
            }
        });
    }

    $(window).on('scroll resize', lazyLoadImages);
    lazyLoadImages();
});
