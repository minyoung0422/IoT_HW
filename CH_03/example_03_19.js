var str = 'abc edf';

console.log(Array.prototype.concat.call(str, 'string'));

console.log(Array.prototype.every.call(str, function (char) {return char !== ' ';}));

console.log(Array.prototype.some.call(str, function (char) {return char === ' ';}));

var newArr = Array.prototype.map.call(str, function (char) {return char + '!';});
console.log(newArr);

var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) {return string + char + i ;},
    '',
]);
console.log(newStr);

Array.prototype.push.call(str, ', pushed string');