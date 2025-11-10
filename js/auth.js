function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    const tabLinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const messageEl = document.getElementById('registerMessage');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.username === username);

    if (userExists) {
        messageEl.textContent = 'Пользователь с таким логином уже существует.';
        messageEl.className = 'error-message';
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        messageEl.textContent = 'Регистрация прошла успешно! Теперь вы можете войти.';
        messageEl.className = 'success-message';

        // Очищаем поля
        document.getElementById('registerForm').reset();
    }
});


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('loginError');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        window.location.href = 'index.html';
    } else {
        errorEl.textContent = 'Неверный логин или пароль.';
    }
});