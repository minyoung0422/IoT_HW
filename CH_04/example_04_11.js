var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(this.name);
  },
};
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500);

// bind는 새로운 함수를 반환
// call은 함수를 즉시 호출하기 때문에 반환할 수 있도록 새로운 함수를 지정