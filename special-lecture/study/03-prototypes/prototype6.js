class Car {
    x = 10;
    y = 20;
}

class Suv extends Car{
    x = 20;
    z = 30;
    prtY() {};
    prtZ = function () {};

    constructor() {
        super();
        // this.x = 200;
        // this.y = 30;
        // this.prtZ = function () {};
        // -> prtZ는 객체가 생성되면 각 객체마다 별도로 생성된다.
        // -> 해당 클래스의 prototype 객체에 생성되지 않는다.
    }
}

obj1 = new Suv();
console.log(`x: ${this.x}, y: ${this.y}, z: ${this.z}`);
// 예상 출력: x: 20, y: 20, z: 30
// 실제 출력: x: undefined, y: undefined, z: undefined

console.log(`x: ${obj1.x}, y: ${obj1.y}, z: ${obj1.z}`);