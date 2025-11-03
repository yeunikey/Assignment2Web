document.addEventListener('DOMContentLoaded', () => {
    const sound = document.getElementById('successSound');

    document.addEventListener('click', () => {
        sound.play().catch(e => console.log("Ошибка воспроизведения:", e));
    }, { once: true });
});