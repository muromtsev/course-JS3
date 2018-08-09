let num = 33721;
var arr = String(num).split('');
var result = arr.reduce((a,b) => a * b);

result = Math.pow(result, 3);

let two;

two = +(String(result).charAt(0) + String(result).charAt(1));

let div = document.createElement('div');

document.body.appendChild(div);
div.innerHTML = two;

console.log(two);



