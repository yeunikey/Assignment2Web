document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValueDisplay = document.getElementById('rating-value');

    let currentRating = 0;

    const SELECTED_COLOR = 'gold';
    const UNSELECTED_COLOR = 'var(--color-gray)';

    const savedRating = localStorage.getItem('userRating');
    if (savedRating) {
        currentRating = parseInt(savedRating);
    }

    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.color = SELECTED_COLOR;
                star.classList.add('selected');
            } else {
                star.style.color = UNSELECTED_COLOR;
                star.classList.remove('selected');
            }
        });
    }

    function updateRatingText(rating) {
        if (rating > 0) {
            ratingValueDisplay.textContent = `Вы поставили оценку: ${rating} из 5!`;
        } else {
            ratingValueDisplay.textContent = 'Нажмите на звезду, чтобы поставить оценку.';
        }
    }

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;

            localStorage.setItem('userRating', currentRating);

            updateStars(currentRating);
            updateRatingText(currentRating);
        });

        star.addEventListener('mouseover', function () {
            const hoverRating = parseInt(this.getAttribute('data-rating'));
            updateStars(hoverRating);
            ratingValueDisplay.textContent = `Нажмите, чтобы поставить: ${hoverRating} из 5`;
        });

        star.addEventListener('mouseout', function () {
            updateStars(currentRating);
            updateRatingText(currentRating);
        });
    });

    updateStars(currentRating);
    updateRatingText(currentRating);
});