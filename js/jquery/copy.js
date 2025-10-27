$(document).ready(function () {

    function showToast(message) {
        const toast = $('#notification-toast');
        toast.text(message);
        toast.addClass('show');
        setTimeout(function () {
            toast.removeClass('show');
        }, 3000);
    }
    window.showToast = showToast;

    $('.copy-btn').on('click', function () {
        const $this = $(this);
        const textToCopy = $this.data('clipboard-text');

        const $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(textToCopy).select();

        try {
            document.execCommand('copy');
            showToast('Скопировано в буфер обмена!');
            $this.text('Скопировано!');
        } catch (err) {
            showToast('Не удалось скопировать.');
        }

        $temp.remove();

        setTimeout(function () {
            $this.text('Копировать');
        }, 2000);
    });
});