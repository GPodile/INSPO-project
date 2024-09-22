// Toggle Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');

    hamburgerMenu.addEventListener('click', () => {
        navBar.classList.toggle('show');
    });
});
