document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('contactPopup');
    const btn = document.getElementById('contactBtn');
    const closeBtn = document.getElementById('closePopup');
    const form = document.getElementById('contactForm');

    btn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
        form.reset();
        popup.style.display = 'none';
    });
});
