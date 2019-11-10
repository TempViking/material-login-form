import './scss/base.scss';

let form_is_open = false;

window.openForm = async function (event) {
    if (!form_is_open) {
        form_is_open = true;
        document.querySelector('.login-card__darkside').style.zIndex = '3';
        document.querySelector('.login-card').classList.add('login-card_dark');
        document.querySelector('.login-card__darkside').classList.add('login-card__darkside_animate');
        // Wait 800ms
        await new Promise(resolve => setTimeout(resolve, 800));
        // Do
        document.querySelector('.login-card__add').classList.add('login-card__add_trans');
        document.querySelector('.login-card__darkside').classList.add('login-card__darkside_open');
        document.querySelector('.login-card__darkside').classList.remove('login-card__darkside_animate');
        document.querySelector('.login-card__control').style.opacity = '1';
    } else {
        form_is_open = false;
        document.querySelector('.login-card__control').style.opacity = '0';
        document.querySelector('.login-card__add').classList.remove('login-card__add_trans');
        document.querySelector('.login-card__darkside').classList.add('login-card__darkside_turn-animate');
        // Wait 300ms
        await new Promise(resolve => setTimeout(resolve, 300));
        document.querySelector('.login-card__darkside').classList.remove('login-card__darkside_open');
        // Wait 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
        document.querySelector('.login-card').classList.remove('login-card_dark');
        document.querySelector('.login-card__darkside').classList.remove('login-card__darkside_turn-animate');
        document.querySelector('.login-card__darkside').style.zIndex = '1';
    }
};

function login (event) {
    event.preventDefault();
    alert('You have successfully logged in!');
}

function register (event) {
    event.preventDefault();
    alert('You have been registered!');
}

window.register = register;
window.login = login;

function materialFocus (event) {
    if (!event.target.parentNode.classList.contains('material-input_focus')) {
        event.target.parentNode.classList.add('material-input_focus');
    }
};

function materialBlur (event) {
    if (event.target.value === '') {
        if (event.target.parentNode.classList.contains('material-input_focus')) {
            event.target.parentNode.classList.remove('material-input_focus');
        }
    }
};

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && form_is_open) {
        register(event);
    } else if (event.keyCode === 13 && !form_is_open) {
        login(event);
    }
});

window.addEventListener('load', function () {
    const materialInputs = document.querySelectorAll('.material-input__input');
    for (let i = 0; i < materialInputs.length; i++) {
        materialInputs[i].addEventListener('focus', materialFocus);
        materialInputs[i].addEventListener('blur', materialBlur);
    }
});