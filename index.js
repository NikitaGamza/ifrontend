const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.burger');
const closeIcon = document.querySelector('.menu__close');
const menuIcon = document.querySelector('.menuIcon');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
function closeMenu() {
  menu.classList.remove('showMenu');
}
window.onclick = function (e) {
  if (e.target.classList.contains('showMenu')) {
    e.target.classList.remove('showMenu');
  }
};
closeIcon.addEventListener('click', closeMenu);
hamburger.addEventListener('click', toggleMenu);

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    email.classList.add('success');
    email.classList.remove('error');
    email.nextElementSibling.innerHTML = '';
    return true;
  } else {
    email.classList.add('error');
    email.classList.remove('success');
    email.nextElementSibling.innerHTML = 'Некорректный email';
    return false;
  }
}
function checkLength(input, min) {
  if (input.value.length < min && input.id === 'username') {
    username.classList.add('error');
    username.classList.remove('success');
    username.nextElementSibling.innerHTML = 'Минимум 3 символа';
    return false;
  } else if (input.value.length >= min && input.id === 'username') {
    username.classList.remove('error');
    username.classList.add('success');
    username.nextElementSibling.innerHTML = '';
    return true;
  } else if (input.value.length < min && input.id === 'message') {
    message.classList.add('error');
    message.classList.remove('success');
    message.nextElementSibling.innerHTML = 'Минимум 3 символа';
    return false;
  } else {
    message.classList.remove('error');
    message.classList.add('success');
    message.nextElementSibling.innerHTML = '';
    return true;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userCheck = checkLength(username, 3);
  const messageCheck = checkLength(message, 3);
  const mailCheck = checkEmail(email, 3);
  if (userCheck && messageCheck && mailCheck) {
    let user = {
      name: username,
      email: email,
      message: message,
    };

    let response = fetch('/article/fetch/post/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });

    let result = response.json();
    alert(result.message);
  }
});

//ФИБОНАЧИ
function nthFibo(n) {
  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(nthFibo(7)); // 2
// alert(nthFibo(7)); // 13
// alert(nthFibo(77)); // 5527939700884757
