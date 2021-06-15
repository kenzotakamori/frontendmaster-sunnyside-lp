let hamburgerMenu = document.getElementById('hamburger-menu')
hamburgerMenu.addEventListener('click', () => {
    let modal = document.getElementById('modal')
    if (modal.classList.contains('open')) {
        modal.classList.remove('open')
    } else {
        modal.classList.add('open')
    }
})