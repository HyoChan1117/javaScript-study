class Student {
    constructor(argAge) {
        this.age = argAge;
    }
}

const myList = [];

myList.push(new Student(20));
myList.push(new Student(30));
myList.push(new Student(40));

// 나이가 20살 초과인 학생들의 나이를 배열로 반환
// newList에 나이가 20살 초과인 학생들만 필터링
let newList = myList.filter(v => v.age > 20);
// 필터링 된 학생 정보에서 나이 요소만 newList에 저장
newList = newList.map(v => v.age);

// 또 다른 방법
let age

console.log(newList);
