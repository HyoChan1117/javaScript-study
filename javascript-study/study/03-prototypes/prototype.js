class Student {
    constructor() {
        this.x = 2;
    }
}

class Bar {
    constructor() {
        this.x = 20;
    }
}

std1 = new Student();
bar1 = new Bar();   // 빈 객체를 만든다.
bar1 = std1;

console.log(bar1.x);