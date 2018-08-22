let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.apply(age, ['Homer', 'Simpson']);

// function asd(){
// 	var N 	= navigator.appName, 
// 		ua 	= navigator.userAgent, 
// 		tem;

//   	var M 	= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
//   	console.log(M);
//   	if(M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];

//   	M = M ? [M[1], M[2]]: [N, navigator.appVersion,'-?'];

//   	return console.log(M);;
// };

// asd();



// if (navigator.userAgent.search("MSIE") >= 0){
//     document.write('"MS Internet Explorer ');
//     var position = navigator.userAgent.search("MSIE") + 5;
//     var end = navigator.userAgent.search("; Windows");
//     var version = navigator.userAgent.substring(position,end);
//     document.write(version + '"');
// }
// else if (navigator.userAgent.search("Chrome") >= 0){
// document.write('"Google Chrome ');
//     var position = navigator.userAgent.search("Chrome") + 7;
//     var end = navigator.userAgent.search(" Safari");
//     var version = navigator.userAgent.substring(position,end);
//     document.write(version + '"');
// }
// else if (navigator.userAgent.search("Firefox") >= 0){
//     document.write('"Mozilla Firefox ');
//     var position = navigator.userAgent.search("Firefox") + 8;
//     var version = navigator.userAgent.substring(position);
//     document.write(version + '"');
// }
// else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
//     document.write('"Apple Safari ');
//     var position = navigator.userAgent.search("Version") + 8;
//     var end = navigator.userAgent.search(" Safari");
//     var version = navigator.userAgent.substring(position,end);
//     document.write(version + '"');
// }
// else if (navigator.userAgent.search("Opera") >= 0){
//     document.write('"Opera ');
//     var position = navigator.userAgent.search("Version") + 8;
//     var version = navigator.userAgent.substring(position);
//     document.write(version + '"');
// }
// else{
//     document.write('"Other"');
// }
