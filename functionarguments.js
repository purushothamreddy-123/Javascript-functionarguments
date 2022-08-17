// function func(n) {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
  
// var s = func(1, 2, 3, 4, 5);
// console.log("Sum is :" + s);


function dpr(n){
    var sum= 0;
    for( var i=0 ; i<arguments.length;i++ ){
        sum =sum+arguments[i];
    }
    return sum;
}
var p =dpr (3,4,5,6,2);
console.log("sum is :"+ p);