var a = 1;
delete global.a;
console.log(a, global.a, this.a);

var b = 2;
delete b;
console.log(b, global.b, this.b);

global.c = 3;
delete global.c;
console.log(c, global.c, this.c);

global.d = 4;
delete d;
console.log(d, global.d, this.d);

