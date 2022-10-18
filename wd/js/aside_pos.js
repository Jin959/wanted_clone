const aside = document.querySelector('.aside_section');
const boundaryEle = document.querySelector('.article_section');

const bnd = boundaryEle.getBoundingClientRect().bottom;
const initialRight = window.getComputedStyle(aside).getPropertyValue("right");
const initialTop = window.getComputedStyle(aside).getPropertyValue("right");
let y = 0;


fixAside(); // init

window.addEventListener('scroll', () => { 
    y = window.scrollY;
    // console.log(window.scrollY );

    console.log(y, bnd);
    if (y >= bnd * 0.9) absoluteAside();
    else fixAside();
});

function fixAside() {
    aside.style.position = 'fixed';
    aside.style.top = `70px`;
    aside.style.bottom = null;
    aside.style.right = `calc((100% - 1060px)/2)`;
}

function absoluteAside() {
    aside.style.position = 'absolute';
    aside.style.top = null;
    aside.style.bottom = '0px';
    aside.style.right = '0px';
}