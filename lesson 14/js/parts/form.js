"use strict";

function form() {
  var message = {};
  message.loading = "Загрузка...";
  message.success = "Спасибо! скоро мы с Вами свяжемся.";
  message.failure = "Что-то пошло не так...";
  var form = document.getElementsByClassName("main-form")[0],
      input = form.getElementsByTagName('input'),
      contactForm = document.getElementById('form'),
      contactInput = contactForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage); //ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-type", "application/x-www-com-urlencoded");
    var formDate = new FormData(form);
    request.send(formDate);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; // тут можно добавляьб любой контент на страницу 
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = ""; //очищаем поля ввода
    }
  });
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage); //ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-type", "application/x-www-com-urlencoded");
    var formDate = new FormData(contactForm);
    request.send(formDate);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; // тут можно добавлять любой контент на страницу 
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < contactInput.length; i++) {
      contactInput[i].value = ""; //очищаем поля ввода
    }
  });
}

module.exports = form;