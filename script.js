window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-container');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky')
    }
    else (
        navbar.classList.remove('sticky')
    )
})