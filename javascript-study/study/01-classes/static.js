// 동적 타이핑 언어에서의 클래스
// 객체가 만들어진 이후에도 속성을 추가, 삭제할 수 있다.

class Student {
    // 객체가 생성되었을 때 순서
    // 1. 클래스 필드
    age = undefined;
    name = undefined;
    static counter = 0;  // JS -> static 멤버 변수 -> add 'static' to a 멤버 변수

    // 2. 생성자
    constructor(argAge, argName) {
        this.age = argAge;  // ES6
        this.name = argName;
    }
}

std1 = new Student(20, "gsc");
console.log(std1.counter);
console.log(Student.counter);