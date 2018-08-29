let money,
    name,
    //  Кнопка Открыть магазин
    open_btn            = document.getElementById('open-btn'),
    //  Название магазина
    name_value          = CN('name-value')[0],
    //  Бюджет магазина
    budget_value        = CN('budget-value')[0],
    //  Категории товаров
    goods_value         = CN('goods-value')[0],
    //  Наименование товаров
    items_value         = CN('items-value')[0],
    //  Сотрудники
    employers_value     = CN('employers-value')[0],
    //  Дисконтная система
    discount_value      = CN('discount-value')[0],
    //  Открыто\Закрыто
    isopen_value        = CN('isopen-value')[0],
    
    //  кнопки    
    btns                = document.getElementsByTagName('button'),
    goods_item_btn      = document.getElementsByTagName('button')[1],
    count_budget_btn    = document.getElementsByTagName('button')[2],
    hire_employers_btn  = document.getElementsByTagName('button')[3],    
   
    //  поле категории товаров
    goods_item          = CN('goods-item'),
    
    //поле продукты
    choose_item         = document.querySelector('.choose-item'),
    
    //  поле время
    time_value          = document.querySelector('.time-value'),
    
    //  поле расчет бюджета
    count_budget_value  = document.querySelector('.count-budget-value'),
    
    //  поля сотрудники
    hire_employers_item = document.querySelectorAll('.hire-employers-item');

//  document.getElementsByClassName =]

function CN(i) { return document.getElementsByClassName(i); };

let mainList = {
    budget: money,
    nameMagazine: name,
    shopGoods: [],
    employers: {},
    shopItems: [],
    open: false,
    discount: false
}

// Функция открытия магазина
open_btn.addEventListener('click', () => {
    
    money = prompt('Ваш бюджет?', '');
    
    while(isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    budget_value.textContent = money;
    
    Discount(money);
    
    name_value.textContent = prompt('Название вашего магазина?', '').toUpperCase();
    mainList.open = true;
    
    //Активируем кнопки    
    for(let i = 1; i < btns.length; i++) {
        btns[i].disabled = false;
    };
});

//  Функция дисконтной системы
function Discount(dollars) {
    if(dollars >= 10000) {
        mainList.discount = true;
        discount_value.style.backgroundColor = 'green';
        discount_value.textContent = 'Скидкааа!'
    }
    else if(dollars < 10000) {
        mainList.discount = false;
        discount_value.style.backgroundColor = 'red';
        discount_value.textContent = 'Скидок нет';
    }
};

// Функция добаления категорий товаров
goods_item_btn.addEventListener('click', () => {
    for(let i = 0; i < goods_item.length; i++) {
            let a = goods_item[i].value;

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
                mainList.shopGoods[i] = a;
                goods_value.textContent = mainList.shopGoods;
                
            } else {
                console.log('Введите верные данные!');
                i--;
            }
        }
});

// Функция добаления продуктов
choose_item.addEventListener('change', () => {
   let items = choose_item.value;
        
        if (isNaN(items) && items != '') {
            mainList.shopItems = items.split(',');
            mainList.shopItems.sort();
            items_value.textContent = mainList.shopItems;
        }    
});

// Функция режима работы магазина
time_value.addEventListener('change', () => {
    let time = time_value.value;
    if (time < 0) {
            console.log('Такого не может быть!');
            mainList.open = false;
        } else if (time > 8 && time < 20) {
            console.log('Время работать!');
            mainList.open = true;
            
        } else if (time < 24) {
            console.log('Уже слишком поздно!');
            mainList.open = false;
            
        } else {
            console.log('В сутках 24 часа!');
        };
    if(mainList.open == true) {
        isopen_value.style.backgroundColor = 'green';
    }
    else {
        isopen_value.style.backgroundColor = 'red';
    }    
});

// Функция расчета бюджета
count_budget_btn.addEventListener('click', () => { count_budget_value.value = Math.floor(money  / 30); });

// Функция добаления сотрудников
hire_employers_btn.addEventListener('click', () => {
    //  6.1.1 Функция проверки на ввод русских букв
    checkLanguage();
    //  6.1.2 Сбрасываем значение сотрудников
    employers_value.textContent = '';
    
    for( let i = 0; i < hire_employers_item.length; i++) {
        
        let name = hire_employers_item[i].value;
        mainList.employers[i] = name;
        employers_value.textContent += mainList.employers[i] + ' ';
        hire_employers_item[i].value = '';        
    }
});

//  Функция блокировки кнопок 
function Disabled(margins, button) {
    if (margins.length > 1) {
        for(let i = 0; i < margins.length; i++) {
            if(margins[i].value == '') {
                button.disabled = true;
            }
            margins[i].addEventListener('input', btnDisabled);

            function btnDisabled() {
                margins[i].value !== '' ? button.disabled = false : button.disabled = true;
                margins[i].removeEventListener('input', btnDisabled);
            }
        }
    }
    else if (margins.length = 1) {
        margins.value == '' ? button.disabled = true : button.disabled = false;
        margins.addEventListener('input', btnDisabled);

        function btnDisabled() {
            margins.value !== '' ? button.disabled = false : button.disabled = true;
            margins.removeEventListener('input', btnDisabled);
        }
    }
};

//  Блокировка кнопок
Disabled(goods_item, goods_item_btn);
Disabled(count_budget_value, count_budget_btn);
Disabled(hire_employers_item, hire_employers_btn);

//  Блокируем ручной ввод в поле расчета бюджета
count_budget_value.disabled = true;

//  6.1.1 Функция проверки на ввод русских букв
function checkLanguage() {
    for(let i = 0; i < hire_employers_item.length; i++) {
        
        hire_employers_item[i].addEventListener('input', checkRu);
        
        function checkRu() {
            let reg_name = /[^А-ЯЁ]/ig;
           // console.log(!reg_name.test(hire_employers_item[i].value));
            if(reg_name.test(hire_employers_item[i].value)) {
                alert('Только русские буквы!');
                hire_employers_item[i].value = '';
                hire_employers_item[i].style.borderColor = 'red';
                
            }
            else {
                //console.log('Правильно');
                hire_employers_item[i].style.borderColor = 'green';
            }
        }
    }
}

checkLanguage();



    