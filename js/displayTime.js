document.addEventListener('DOMContentLoaded', () => {
    const dateTimeEl = document.getElementById('currentDateTime');

    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: true
        };
        dateTimeEl.textContent = `Билеты актуально на ${now.toLocaleString('ru-RU', options)}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    const tickets = document.querySelectorAll('.ticket');

    tickets.forEach(ticket => {
        const remainingEl = ticket.querySelector('.ticket__remaining-time');
        if (remainingEl) {
            const hours = Math.floor(Math.random() * 15) + 1;
            const minutes = Math.floor(Math.random() * 60);
            remainingEl.textContent = `Осталось: ${hours} ч ${minutes} мин`;
        }
    });

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__info');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const greetingElement = document.querySelector('.search__title');

    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Доброе утро';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Добрый день';
        } else {
            greeting = 'Добрый вечер';
        }

        greetingElement.textContent = `${greeting}, куда летим сегодня?`;
    }
});