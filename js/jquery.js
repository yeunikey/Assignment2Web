$(document).ready(function () {

    $('#liveSearchInput').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $('.results__list .ticket').filter(function () {
            const ticketText = $(this).find('.ticket__city').text().toLowerCase();
            $(this).toggle(ticketText.indexOf(value) > -1);
        });
    });

    const locations = [
        "Алматы (ALA)",
        "Астана (NQZ)",
        "Стамбул (IST)",
        "Нью-Йорк (NYC)",
        "Берлин (BER)",
        "Париж (PAR)",
        "Токио (TYO)",
        "Лондон (LON)"
    ];

    $('#fromInput, #toInput').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        const suggestionsBox = $(this).siblings('.autocomplete-items');
        suggestionsBox.empty();

        if (!value) {
            suggestionsBox.hide();
            return;
        }

        const filteredLocations = locations.filter(loc => loc.toLowerCase().indexOf(value) > -1);

        if (filteredLocations.length > 0) {
            filteredLocations.forEach(loc => {
                suggestionsBox.append(`<div>${loc}</div>`);
            });
            suggestionsBox.show();
        } else {
            suggestionsBox.hide();
        }
    });

    $(document).on('click', '.autocomplete-items div', function () {
        const inputField = $(this).parent().siblings('input');
        inputField.val($(this).text());
        $(this).parent().hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.autocomplete-wrapper').length) {
            $('.autocomplete-items').hide();
        }
    });
});
