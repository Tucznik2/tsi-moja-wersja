const HEADER = document.getElementById('header');
const SIDE_NAV = document.getElementById('side-nav');
const NAV_LINKS = document.getElementsByClassName('list-group-item list-group-item-action');

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

for (let i = 0; i < NAV_LINKS .length; i++) {
    NAV_LINKS[i].addEventListener('click', ()=>{
        window.scrollTo(0,0);
    });
}

let offcanvas_el = document.getElementById("zseOffcanvas");
let offcanvas = new bootstrap.Offcanvas(offcanvas_el, {backdrop: false})
offcanvas_el.addEventListener('click', ()=>{
    offcanvas.hide();
})