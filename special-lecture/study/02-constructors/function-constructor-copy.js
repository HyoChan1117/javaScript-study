// Function vs Constructor function

class A {}
class B extends A {}

A.prototype.x = 2;

let b1 = new B();
let b2 = new B();

b1.x = 30;
console.log(b1.x);

A.prototype.x = 30;
console.log(b2.x);

// .prototype 앞에 올 수 있는 것 : 생성자 함수, 클래스