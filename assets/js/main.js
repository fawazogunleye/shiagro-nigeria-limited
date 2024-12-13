const menuButton = document.getElementById('menubtn');
const cancelButton = document.getElementById('cancelbtn');
const responsiveNavMenu = document.getElementById('responsivenav');
menuButton.addEventListener('click', () => {
    responsiveNavMenu.style.width = "100%";
});
cancelButton.addEventListener('click', () => {
    responsiveNavMenu.style.width = "0%";
});