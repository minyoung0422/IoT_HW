var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {console.log(v, i);});
arr2.forEach(function (v, i) {console.log(v, i);});

console.log(arr1.map(function (v, i) {return v + i;}));
console.log(arr2.map(function (v, i) {return v + i;}));

console.log(arr1.filter(function (v) {return !v;}));
console.log(arr2.filter(function (v) {return !v;}));

console.log(arr1.reduce(function (p, c, i) {return p + c + i;}, ''));
console.log(arr2.reduce(function (p, c, i) {return p + c + i;}, ''));

