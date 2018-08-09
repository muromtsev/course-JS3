let num = 33721;



function arrOne(a) {
    var b = String(a);    
    var arr = b.split('');
    var result = arr.reduce((a,b) => a * b);
    result = Math.pow(result, 3);
    
    console.log(result)
}
arrOne(num)

