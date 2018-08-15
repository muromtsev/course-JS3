let menu    = document.querySelector('.menu'),
    items   = document.querySelectorAll('.menu .menu-item');

console.log(menu);

//  Меняем местами пункты меню, 3 на 2

menu.insertBefore(items[2], items[1]);

//  Создаем пятый элемент меню

let item_5 = document.createElement('li');

//  записываем текст в созданный пункт меню

item_5.textContent = 'Пятый пункт';

// добавляем класс новому пункту меню

item_5.classList.add('menu-item');

//  добавляем пятый пункт меню на страницу

menu.appendChild(item_5);

//  заменяем фон 

document.body.style.background = "url('img/apple_true.jpg') no-repeat center";

//https://www.w3schools.com  - знает всё ;-)

//  меняем заголовок страницы

let title = document.querySelector('.title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';

//  удаляем рекламный блок

let adv = document.querySelector('.adv');

document.querySelectorAll('.column')[1].removeChild(adv);

//  спрашиваем у пользователя и выводим на страницу

let message = prompt('Ваше отношение к технике Apple?', '');
document.querySelector('.prompt').innerHTML = message;

//the [end]




