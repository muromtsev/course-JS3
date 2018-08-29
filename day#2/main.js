let budget          = prompt('Ваш бюджет на месяц?'),
    nameMagazine    = prompt('Название вашего магазина?'),
    time            = 21;

let mainList = {
        budget: budget,
        nameMagazine: nameMagazine,
        shopGoods: [],
        employers: {},
        open: true
}

for(let i = 0; i < 5; i++) {
    let a = prompt('Какой тип товаров будем добавлять?');
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log('Всё верно!');
        mainList.shopGoods[i] = a;
        console.log(mainList.shopGoods)
    } else {
        console.log('Введите верные данные!');
        i--;
    }
}
//let i = 0;
//while (i < 3) {
//    let a = prompt('Какой тип товаров будем добавлять?');
//    
//    if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
//        console.log('Всё верно!');
//        mainList.shopGoods[i] = a;
//        i++;
//        console.log(mainList.shopGoods)
//    } else {
//        console.log('Введите верные данные!');
//        console.log(mainList.shopGoods)
//    }
//}
//let i = 0;
//do {
//    let a = prompt('Какой тип товаров будем добавлять?');
//    if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
//        console.log('Всё верно!');
//        mainList.shopGoods[i] = a;
//        i++;
//        console.log(mainList.shopGoods)
//    } else {
//        console.log('Введите верные данные!');
//        console.log(mainList.shopGoods)
//    }
//}
//while (i < 3);

//
//function oneDay(budget) {
//    let oneDay;
//    oneDay = budget / 30;
//    console.log(oneDay);
//    return alert('Ваш бюджет на один день' + ' ' + oneDay);
//}

//oneDay(mainList.budget);


