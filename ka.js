function hideMenu() {
    let menuOpen = document.querySelector('.checkbox').checked;

    if (menuOpen === true) {
        document.querySelector('.checkbox').checked = false;
    }
}
window.addEventListener("scroll", hideMenu);
