let paragraph_date  = document.querySelector('.paragraph'),
    paragraph_day   = document.querySelector('.paragraph-2'),
    date            = new Date(),
    hours           = date.getHours(),
    minutes         = date.getMinutes(),
    seconds         = date.getSeconds(),
    day             = date.getDate(),
    month           = date.getMonth(),
    year            = date.getFullYear(),
    day_week        = date.getDay(),
    month_numbers   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    day_of_the_week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

//ES6: `${Интерполяция}` =]


//  выводим время и дату на страницу

paragraph_date.innerHTML = `${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)} ${getZero(day)}.${getZero(month_numbers[month])}.${year}`;

//  выводим текущий день недели на русском

paragraph_day.style.fontStyle = 'italic';
paragraph_day.innerHTML = `Текущий день недели: ${dayOfTheWeek(day_week)}`;








//  нули надо добавить =]

function getZero(num) {
    
    if(num >= 0 && num < 10) {
        num = '0' + num;
    }
    return num;
}

//  определяем текущий день на русском

function dayOfTheWeek(day) { return day_of_the_week[day]; }





