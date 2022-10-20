{
    const regiEnterBtn = document.querySelector('.modal_btn');
    const loginEmailInput = document.querySelector('.modal_login .modal_input input');
    const regiEmailInput = document.querySelector('.modal_regi .modal_input:first-child input');
    const login = document.querySelector('.modal_login');
    const regi = document.querySelector('.modal_regi');

    loginEmailInput.addEventListener('input', (e) => {
        if (isValid(loginEmailInput.value)) {
            regiEnterBtn.classList.remove('modal_disabled');
            regiEnterBtn.addEventListener('click', goRegi, {once: true});
        }
        else {
            regiEnterBtn.classList.add('modal_disabled');
            regiEnterBtn.removeEventListener('click', goRegi);
        }
    })

    function isValid(email) {
        let validCnt = 0;
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') validCnt++;
        }

        if (validCnt !== 0) return true;
        else return false;
    }

    const goRegi = () => {
        login.classList.add('hidding');
        regi.classList.remove('hidding');
        regiEnterBtn.classList.add('modal_disabled');
        regiEmailInput.value = loginEmailInput.value;
    }
}

