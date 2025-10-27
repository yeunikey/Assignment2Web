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
});