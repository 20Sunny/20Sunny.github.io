var a = 0;

function mouseOver() {
    const name = document.forms['suForm']['name'].value;
    const email = document.forms['suForm']['email'].value;
    const pass = document.forms['suForm']['pass'].value;
    const tick = document.querySelector('#check');
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }
    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }
    if ((name == "" || !email.match(emailCheck) || pass == "" || tick.checked == false) && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    } else {
        // document.getElementById('submit-btn').click();  
        document.getElementById('submit-btn').style.cursor = 'none';
        return false;
    };
};

function buttonMoveLeft() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(200%)';
};

function buttonMoveRight() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};

function resetBtn() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};

let loader = document.querySelector('.loader');

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear")
}