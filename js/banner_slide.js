//const bannerSection = document.querySelector('#top_banner');
const bannerDivList = document.querySelectorAll('#top_banner div');
const prevBtn = document.querySelector('#prev_btn');
const nxtBtn = document.querySelector('#nxt_btn');

//console.dir(bannerDivList);
//console.dir(prevBtn);
//console.dir(nxtBtn);

function clickBtn(e) {
    //window.alert("clicked");

    const clickedBtn = e.target; // e.target === <button> Node
    let slideClassName;
    // let reverseClassName;
    
    if (clickedBtn === prevBtn) {
        slideClassName = 'sliding_prev';
        // reverseClassName = 'sliding_prev_reverse';
    }
    else {
        slideClassName = 'sliding_nxt';
        // reverseClassName = 'sliding_nxt_reverse';
    }
    
    bannerDivList.forEach(ele => ele.classList.add(slideClassName));

    //if(slideClassName = 'sliding_prev') rotatePrev(bannerDivList);
    //else rotateNxt(bannerDivList);

    //bannerDivList.forEach(ele => ele.classList.remove(slideClassName));
}

function rotatePrev(arr) {
    // const nowStyle = getComputedStyle(arr[0]);
    //console.dir(arr[0]);

    const tmp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = tmp;
}

function rotateNxt(arr) {
    const tmp = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = tmp;
}

prevBtn.addEventListener('click', clickBtn);
nxtBtn.addEventListener('click', clickBtn);
