$(document).ready(function () {

    function applyFilters() {

        const searchValue = $('#liveSearchInput').val().toLowerCase();

        const checkedCompanies = [];
        $('.filter__block:contains("Авиакомпания") input[type="checkbox"]:checked').each(function () {
            checkedCompanies.push($(this).parent().text().trim().toLowerCase());
        });

        const minPrice = parseInt($('.filter__range-inputs input[placeholder="От"]').val().replace(/[^0-9]/g, '')) || 0;
        const maxPrice = parseInt($('.filter__range-inputs input[placeholder="До"]').val().replace(/[^0-9]/g, '')) || Infinity;

        $('.results__list .ticket').each(function () {
            const $ticket = $(this);

            const ticketCity = $ticket.find('.ticket__city').text().toLowerCase();
            const ticketCompany = $ticket.find('.ticket__company').text().trim().toLowerCase();
            const ticketPriceText = $ticket.find('.ticket__price').text().replace(/[^0-9]/g, '');
            const ticketPrice = parseInt(ticketPriceText) || 0;

            const matchesSearch = !searchValue || ticketCity.indexOf(searchValue) > -1;

            const matchesCompany = checkedCompanies.length === 0 || $.inArray(ticketCompany, checkedCompanies) > -1;

            const matchesPrice = ticketPrice >= minPrice && ticketPrice <= maxPrice;

            $ticket.toggle(matchesSearch && matchesCompany && matchesPrice);
        });
    }

    $('#liveSearchInput').on('keyup', applyFilters);
    $('.filter__block:contains("Авиакомпания") input[type="checkbox"]').on('change', applyFilters);
    $('.filter__range-inputs input').on('keyup', applyFilters);

    const rangeInput = $('.filter__block input[type="range"]');
    const maxPriceInput = $('.filter__range-inputs input[placeholder="До"]');

    rangeInput.on('input', function () {
        maxPriceInput.val($(this).val());
        applyFilters();
    });

    maxPriceInput.on('keyup', function () {
        rangeInput.val($(this).val());
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