let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};
let message = document.querySelector('.subscription-message');
console.log(message.textContent);

let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
let email = document.querySelector('.subscription-email');
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent = 'Форма отправлена!';
  form.onsubmit = function(evt) {
    evt.preventDefault();
    
    message.textContent = email.value;
  };

  function onEnterPress(e) {
    var keyCode = e.keyCode; // получаем код нажатой клавиши
    var lInput = document.getElementById('login').parentNode; // лейбл логина
    var pInput = document.getElementById('password').parentNode; // лейбл пароля
    if (keyCode == 13) { // если нажат интер
        if (pInput.class == 'hide') { // и пароль спрятан,
            lInput.class = 'hide'; // прячем логин 
            pInput.class = ''; // открываем пароль
        } else { // если мы уже вводим пароль,
            pInput.class = 'hide'; // прячем и его
            lInput.parentNode.submit(); // и отправляем форму
        }
    }
    let login= document.getElementById('login').addEventListener('keyDown', onEnterPress, false);
    let password = document.getElementById('password').addEventListener('keyDown', onEnterPress, false);
}


let message = document.querySelector('.subscription-message');
console.log(message.textContent);

let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
let form = document.querySelector('.subscription-email');
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent = 'Форма отправлена!';
  form.onsubmit = function(evt) {
    evt.preventDefault();
  };
};
};