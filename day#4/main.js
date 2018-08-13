let money,
    name,
    time = 21,
    price = 2.32;

function start() {
    money = prompt('Ваш бюджет?', '');
    
    while(isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    
    name = prompt('Название вашего магазина?', '').toUpperCase();
}
//start();


let mainList = {
    budget: money,
    nameMagazine: name,
    shopGoods: [],
    employers: {},
    shopItems: [],
    open: false,
    discount: true,
    oneDay: function oneDay(budget) {
                let oneDay;
                oneDay = budget / 30;
                console.log(oneDay);
                return alert('Ваш бюджет на один день' + ' ' + oneDay);
            },
    chooseGoods: function chooseGoods() {
        for(let i = 0; i < 5; i++) {
            let a = prompt('Какой тип товаров будем добавлять?', '');

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('Всё верно!');
                mainList.shopGoods[i] = a;
                console.log(mainList.shopGoods)
            } else {
                console.log('Введите верные данные!');
                i--;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого не может быть!');
        } else if (time > 8 && time < 20) {
            console.log('Время работать!');
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже слишком поздно!');
        } else {
            console.log('В сутках 24 часа!');
        }
    },
    discountSystem: function discountSystem(price) {
        let result;
        if(mainList.discount) {
            result = (price * (80 / 100)).toFixed(2) + '%';
            console.log('Скидка' + ' ' + result);
        } else {
            console.log('Скидок нет!');
        }
    },
    askName: function askName() {
        for(let i = 0; i < 3; i++) {
            let name = prompt('Имя сотрудника?');
            if ((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 50) {        
                console.log('Всё верно!');
                mainList.employers['number ' + i] = name;
                console.log(mainList.employers)
            } else {
                console.log('Введите верные данные!');
                i--;
            }
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt('Перечислите через запятую товары', '');
        
        if (typeof(items) == 'string' && items != '' && items != null) {
            console.log(items)
            mainList.shopItems = items.split(',');
            mainList.shopItems.push(prompt('Подождите, ещё ', ''));
            
            
            mainList.shopItems.forEach(function(items ,i) {
                i++;
                alert(i + ': ' + items);
                mainList.shopItems.sort();
            });
            
            
        }
        else if(items == '' || items == null) {
            alert('Введите название товаров');
            items = prompt('Перечислите через запятую товары', '');
            console.log('Введите название товаров');
        }      
        
    }
}//mainList

for(var key in mainList) {
    console.log('Наш магазин включает в себя: ' + key);
}


