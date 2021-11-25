const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const triangle = document.getElementById('triangle')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    triangle.classList.toggle('active');
})
