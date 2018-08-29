let week = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
];

for(let i = 0; i < week.length; i++) {
    let ul = document.createElement('ul'),
        li = document.createElement('li');
    let a = week[i];
    
    li.innerHTML = a;
    
    ul.appendChild(li);
    
    document.body.appendChild(ul);
     
    if (li.innerHTML == 'четверг') {
        li.style.fontStyle = 'italic';
    } else if (li.innerHTML == 'суббота' || li.innerHTML == 'воскресенье') {
        li.style.fontWeight = 'bold';
    }    
}

let arr = [
    '3786',
    '87654',
    '4234123',
    '711111111111111',
    '7765345',
    '4567',
    '3333',
    '86756',
    '123563',
    '78956'
];

console.log(arr);

for(let i = 0; i < arr.length; i++) {
    let b = arr[i];
    if(b[0] == 3) {
        console.log(arr[i])
    } else if(b[0] == 7) {
        console.log(arr[i])
    }
    
}







