
document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.querySelector('.billing__info__kaspi');
    const inputs = document.querySelectorAll('.billing__form input, .billing__form select');

    payButton.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            input.classList.remove('error');

            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            }

            // Проверка email
            if (input.type === 'email' && input.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value.trim())) {
                    input.classList.add('error');
                    isValid = false;
                }
            }

            // Проверка телефона
            if (input.type === 'tel' && input.value.trim()) {
                const phonePattern = /^\+?\d[\d\s\-\(\)]{8,}$/;
                if (!phonePattern.test(input.value.trim())) {
                    input.classList.add('error');
                    isValid = false;
                }
            }

            // Проверка возраста
            if (input.id === 'age' && input.value) {
                const age = parseInt(input.value, 10);
                if (isNaN(age) || age <= 0 || age > 120) {
                    input.classList.add('error');
                    isValid = false;
                }
            }

            // Проверка ИИН
            if (input.id === 'iin' && input.value.trim()) {
                const iinPattern = /^\d{12}$/;
                if (!iinPattern.test(input.value.trim())) {
                    input.classList.add('error');
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            alert('Пожалуйста, заполните все поля корректно.');
            return;
        }

        window.location.href = './success.html';
    });
});