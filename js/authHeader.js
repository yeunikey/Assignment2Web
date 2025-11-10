document.addEventListener('DOMContentLoaded', () => {
    const currentUserJSON = localStorage.getItem('currentUser');

    const loginLinkDesktop = document.getElementById('loginLinkDesktop');
    const profileLinkDesktop = document.getElementById('profileLinkDesktop');
    const usernameDesktop = document.getElementById('usernameDesktop');

    const loginLinkMobile = document.getElementById('loginLinkMobile');
    const profileLinkMobile = document.getElementById('profileLinkMobile');

    if (currentUserJSON) {
        const user = JSON.parse(currentUserJSON);

        if (loginLinkDesktop) loginLinkDesktop.style.display = 'none';
        if (profileLinkDesktop) {
            profileLinkDesktop.style.display = 'flex';
            if (usernameDesktop) usernameDesktop.textContent = user.username;
        }

        if (loginLinkMobile) loginLinkMobile.style.display = 'none';
        if (profileLinkMobile) profileLinkMobile.style.display = 'block';

    } else {
        if (loginLinkDesktop) loginLinkDesktop.style.display = 'block';
        if (profileLinkDesktop) profileLinkDesktop.style.display = 'none';

        if (loginLinkMobile) loginLinkMobile.style.display = 'block';
        if (profileLinkMobile) profileLinkMobile.style.display = 'none';
    }


    const profileNameEl = document.querySelector('.profile__name');
    const logoutButton = document.getElementById('logoutButton');

    const user = JSON.parse(currentUserJSON);
    if (profileNameEl) {
        profileNameEl.textContent = user.username;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('currentUser');

            alert('Вы вышли из системы.');

            window.location.href = 'index.html';
        });
    }
});