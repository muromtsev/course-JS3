let budget = prompt('Ваш бюджет на месяц?'),
    nameMagazine = prompt('Название вашего магазина?');




let mainList = {
       budget: budget,
        nameMagazine: nameMagazine,
        shopGoods: [],
        employers: {},
        open: true
}

mainList.shopGoods[0] =  prompt('Какой товар будем продавать?', '');
mainList.shopGoods[1] =  prompt('Какой товар будем продавать?', '');
mainList.shopGoods[2] =  prompt('Какой товар будем продавать?', '');



function oneDay(budget) {
    let oneDay;
    oneDay = budget / 30;
    console.log(oneDay);
    return alert('Ваш бюджет на один день' + ' ' + oneDay);
}

//oneDay(mainList.budget);


