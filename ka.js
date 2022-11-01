//---------------------click on the button and jump onto the top-----------
// //Get the button
// var mybutton = document.getElementById("up");

// // When the user scrolls down 100px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// ----------------------------hamburgermenu-close-and-open--------------------

function hideMenu() {
    let menuOpen = document.querySelector('.checkbox').checked;

    if (menuOpen = true) {
        document.querySelector('.checkbox').checked = false;
    }
}
window.addEventListener("scroll", hideMenu);
