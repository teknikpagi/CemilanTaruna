const hamburgerMenu = document.querySelector('.hamburger-menu input');
const span1 = document.querySelector('.hamburger-menu span:nth-child(2)');
const span2 = document.querySelector('.hamburger-menu span:nth-child(4)');
const menu = document.querySelector('nav ul');
const navigasi = document.querySelector('nav');
const links = document.querySelectorAll('nav ul a');
const scrollTop = document.querySelector('#topScroll');


hamburgerMenu.addEventListener('click', function () {
    span1.classList.toggle('active')
    span2.classList.toggle('active')
    menu.classList.toggle('tampil')
});


for (const link of links) {
    link.addEventListener("click", clickHandler);
}

window.addEventListener("scroll", function () {
    navigasi.classList.toggle('scrolling', window.scrollY > 0)
});
window.addEventListener("scroll", function () {
    scrollTop.classList.toggle('scroll', window.scrollY > 800)
});



function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 120;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}