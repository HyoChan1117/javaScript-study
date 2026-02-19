class Student {    // ES6 class
    constructor() {
        this.x = 2;
    }
}
std1 = new Student();  // 빈 객체 생성

print = console.log;

Student.prototype.prtX = function () { console.log("X");};

std1.prtX();
std2.prtX();

