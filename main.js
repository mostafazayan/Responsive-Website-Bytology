var signupBtn = document.getElementById('signup-btn');

var modal = document.getElementById('modal');

var menu = document.getElementById('hum-menu');

var menuBtn = document.getElementById('Hum-btn');

var closeMenuBtn = document.getElementById('close-menu-btn');

var closeBtn = document.getElementsByClassName('close-btn')[0];

signupBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

menuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);


function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function openMenu() {
    menu.style.display = 'block';
}

function outsideClick(e) {
    if (e.target == menu) {
        menu.style.display = 'none';
    }
}

function closeMenu() {
    menu.style.display = 'none';
}