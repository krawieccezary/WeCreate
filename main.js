var burger = document.getElementsByClassName('nav-burger')[0];
var nav = document.getElementsByClassName('nav')[0];

function openMenuRWD() {
   burger.classList.toggle('active-burger');
   nav.classList.toggle('open-RWD');
}

burger.addEventListener('click', openMenuRWD);
