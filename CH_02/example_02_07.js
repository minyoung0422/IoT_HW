function a () {
    var b;
    var b = function () {}

    console.log(b);
    b = 'bbb'
    console.log(b);
    console.log(b);
}
a();
