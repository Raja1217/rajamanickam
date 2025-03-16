/* Mobile Navigation Sidebar */
function showSidebar() {
    const sidebar = document.querySelector('.rm-menus-mobile');
    sidebar.style.display = 'block';
}

function hideSidebar() {
    const sidebar = document.querySelector('.rm-menus-mobile');
    sidebar.style.display = 'none';
}

/* Mobile Navigation Sidebar */

/* Scroll to Top */
window.addEventListener("scroll", function() {
    var scroll = document.querySelector('.scr-to-top');
    scroll.classList.toggle("active", window.scrollY > 150)
})

function scrollTotop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

/* Scroll to Top */


/* Sticky Header */
window.addEventListener("scroll", function() {
    var headerNew = document.querySelector('.header-main');
    headerNew.classList.toggle("sticky", window.scrollY > 0)
})

/* Sticky Header */