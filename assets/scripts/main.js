const HEADER = document.getElementById('header');
const SIDE_NAV = document.getElementById('side-nav');

let sideNavTopPos;

HEADER.addEventListener('click', () => {
    window.location.href="../index.html";
})

window.addEventListener('scroll', () => {
    sideNavTopPos = SIDE_NAV.offsetTop;
    if(sideNavTopPos > 550){
        SIDE_NAV.style.top = 50 + 'px';
    }
})