$(document).ready(function () {

    function isElementInView(elem) {
        if (!$(elem).length) return false;
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();
        const elemTop = $(elem).offset().top;
        const elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    let countersAnimated = false;
    $(window).on('scroll', function () {
        if (!countersAnimated && isElementInView($('.stats'))) {
            countersAnimated = true;
            $('.stats__number').each(function () {
                const $this = $(this);
                const countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                    }
                });
            });
        }
    });

});