$(document).ready(() =>
    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    }));


function ToggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
/*
$("#menuToggle").click(function () {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});*/