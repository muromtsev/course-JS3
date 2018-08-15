let open_btn            = document.getElementById('open-btn'),
    name_value          = CN('name-value'),
    budget_value        = CN('budget-value'),
    goods_value         = CN('goods-value'),
    items_value         = CN('items-value'),
    employers_value     = CN('employers-value'),
    discount_value      = CN('discount-value'),
    isopen_value        = CN('isopen-value'),
    
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

function CN(i) { return document.getElementsByClassName(i); }
    