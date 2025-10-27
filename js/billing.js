$(document).ready(function () {

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#scrollProgressBar').css('width', scrollPercent + '%');
    });

    $('form.billing').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const $inputs = $('.billing__form input, .billing__form select');

        $inputs.each(function () {
            const $input = $(this);
            $input.removeClass('error');
            const value = $input.val() ? $input.val().trim() : '';

            // Check required fields (all except baggage)
            if ($input.is('#iin, #fio, #email, #phone, #age') && !value) {
                $input.addClass('error');
                isValid = false;
            }

            // Email validation
            if ($input.is('#email') && value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    $input.addClass('error');
                    isValid = false;
                }
            }

            // Phone validation
            if ($input.is('#phone') && value) {
                const phonePattern = /^\+?\d[\d\s\-\(\)]{8,}$/; // Simple pattern
                if (!phonePattern.test(value)) {
                    $input.addClass('error');
                    isValid = false;
                }
            }

            // Age validation
            if ($input.is('#age') && value) {
                const age = parseInt(value, 10);
                if (isNaN(age) || age <= 0 || age > 120) {
                    $input.addClass('error');
                    isValid = false;
                }
            }

            // IIN validation
            if ($input.is('#iin') && value) {
                const iinPattern = /^\d{12}$/;
                if (!iinPattern.test(value)) {
                    $input.addClass('error');
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            console.error('Ошибка: Пожалуйста, заполните все поля корректно.');
            showToast('Ошибка: Заполните все поля корректно');
            return;
        }

        const $button = $('.billing__info__kaspi');
        const originalHtml = $button.html();

        $button.html('<span class="spinner"></span>');
        $button.prop('disabled', true);

        setTimeout(function () {
            showToast('Оплата прошла успешно! Перенаправляем...');

            $button.html(originalHtml);
            $button.prop('disabled', false);

            window.location.href = './success.html';
        }, 3000);

    });

    // --- NEW CLEAR FORM LOGIC ---
    $('.clear-button').on('click', function (e) {
        e.preventDefault();
        const $inputs = $('.billing__form input, .billing__form select');

        $inputs.each(function () {
            if ($(this).is('input')) {
                $(this).val('');
            } else if ($(this).is('select')) {
                $(this).val('none'); // Set dropdown to default
            }
            $(this).removeClass('error'); // Remove error class
        });

        console.log('Форма очищена.');
    });
});