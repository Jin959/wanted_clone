const spinner = document.createElement("div");    
spinner.classList.add('animate_spinner');

async function loadSpinner() {
    document.body.style.visibility = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(spinner);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000)); // 3초 spin
    
    document.body.removeChild(spinner);
    document.body.style.visibility = 'visible';
    document.body.style.overflow = 'visible';
}

loadSpinner();