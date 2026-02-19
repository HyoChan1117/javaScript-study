class Student {
    // 멤버 변수
    name = undefined;
    
    // 생성자
    constructor(argName) {
        // 인스턴스 변수 초기화
        this.name = argName;
    }
}

// 학생 객체 생성
const std1 = new Student("gsc");
const std2 = new Student("yju");

// 이름 변경 함수
function setName(argStd, argName) {
    // 학생 객체의 이름 변경
    argStd.name = argName;
}

// 이름 변경
// 객체 참조에 의해 값이 변경됨
// 
setName(std1, "GSC Hello");
setName(std2, "YJU Hello");

console.log(`Std1: ${std1.name}\tStd2: ${std2.name}`);