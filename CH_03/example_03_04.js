var a = 1;
global.b = 2;
console.log(a, global.a, this.a);
console.log(b, global.b, this.b);

global.a = 3;
b = 4;

console.log(a, global.a, this.a);
console.log(b, global.b, this.b);

// 해보니까 1 undefined undefined 와.
//         2 2 undefined 가 출력됩니다.