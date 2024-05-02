var a;
var outer;
var inner;

a = 1;

outer = function () {
    inner = function () {
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}

outer();
console.log(a);
