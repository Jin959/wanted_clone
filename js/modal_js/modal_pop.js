{
    const modalBtn = document.querySelector('.nav_right > div:nth-child(2) > button');
    const modalCloseBtn = document.querySelectorAll('.modal_close');
    const modalInputs = document.querySelectorAll('.modal_input input');
    const nav = document.querySelector('.nav_container');
    const login = document.querySelector('.modal_login');
    const regi = document.querySelector('.modal_regi');

    const prevZ = nav.style.zIndex;

    modalBtn.addEventListener('click', () => {
        login.classList.remove('hidding');
        nav.style.zIndex = '-1';
        document.body.style.overflow = 'hidden';
    });


    modalCloseBtn.forEach(ele => {
        ele.addEventListener('click', ()=> {
            login.classList.add('hidding');
            regi.classList.add('hidding');
            nav.style.zIndex = prevZ;
            document.body.style.overflow = '';
            modalInputs.forEach(ele => {
                ele.value = ''; 
            });
        })
    })

}