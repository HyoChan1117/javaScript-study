class Student {    // ES6 class
    constructor() {
        this.x = 2;
    }
}

function Bar() {  // Legacy, constructor function
    this.x = 20;
}

std1 = new Student();  // 빈 객체 생성
bar1 = new Bar();      // 빈 객체 
console.log(std1.prototype === bar1.prototype);