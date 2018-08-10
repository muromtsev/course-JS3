var str = "урок-3-был слишком легким";

function changeStr(str) {
    let title = str.slice(0, 1).toUpperCase() + str.slice(1);
    title = title.replace(/-/g, ' ');
    return title;
}

let changeWord = function changeWord(str) {
    let title = str.split(' ');
    let word = title[title.length - 1];
    word = word.slice(0, -2) + 'о';
}

changeStr(str);
//changeWord(changeStr(str));

let arr = [20, 33, 1, "Человек", 2, 3];

let Cube = function(number) {
    
    let sum = Math.pow(number, 3);
    return sum;
}

let total = function(arr) {
    //sum = arr[0] + arr[1] + ... + arr[n]
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function extraAnswer(arr) {
    let sum = [];
    for(let i = 0; i < arr.length; i++) {
        
        if (isNaN(arr[i])) {
            
            delete arr[i]
        } 
        
        else if (Number(arr[i])) {
            
            sum.push(Cube(arr[i]));
        }
    }
    
    let answer = Math.sqrt(total(sum));
    
    
    console.log(answer)
    console.log('Округление до ближайшего целого: ' + Math.ceil(answer))
    console.log('Округлённое до двух чисел после запятой: ' + answer.toFixed(2))
    
    
}
extraAnswer(arr);


function oneArgument(str) {
    let result = '';
    if(str === Number(str)) {
        console.log('Это не строка');
    }
    else if(str === String(str)) {
        result = str.split(' ').join('');
        
        if(result.length > 50) {
            result = result.slice(0, 50) + '...'
        }
    }
    console.log(result)
}

oneArgument('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt delectus ducimus voluptate soluta corporis culpa, repellendus architecto explicabo repudiandae minima autem quod molestiae, magnam dolore ullam eum nam quam.')

