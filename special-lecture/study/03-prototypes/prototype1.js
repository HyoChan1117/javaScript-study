class Student {    // ES6 class
    constructor() {
        this.x = 2;
    }
}
std1 = new Student();  // 빈 객체 생성

print = console.log;
// print(std1.[[prototype]]);  ->  X
print(std1.__proto__  === Student.prototype);  // -> O, Student 클래스의 prototype 객체
print(Student.prototype);  // Student 클래스의 prototype 객체

