document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

$(document).ready(function () {

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#scrollProgressBar').css('width', scrollPercent + '%');
    });

    $('#faqSearchBtn').on('click', function () {
        const searchTerm = $('#faqSearchInput').val();
        if (!searchTerm) return;

        // Remove previous highlights
        $('#faqClearBtn').click();

        const regex = new RegExp(searchTerm, 'gi');
        $('.accordion-content p, .accordion-header').each(function () {
            $(this).html($(this).html().replace(regex, '<span class="highlight">$&</span>'));
        });
    });

    $('#faqClearBtn').on('click', function () {
        $('.accordion-content p, .accordion-header').each(function () {
            $(this).html($(this).html().replace(/<span class="highlight">(.*?)<\/span>/gi, '$1'));
        });
        $('#faqSearchInput').val('');
    });
});