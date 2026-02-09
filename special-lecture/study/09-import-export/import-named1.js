import Student from './gsc/Student-default.js';


let stdList = [];
stdList.push(new Student("Kim", 20, "M"));
stdList.push(new Student("Lee", 18, "M"));
stdList.push(new Student("Jung", 35, "F"));
stdList.push(new Student("Joe", 40, "M"));

stdList.forEach( (v) => console.log(typeof v));

// 여자인 학생만 출력
stdList.filter( (v) => v.gender === "F" ).forEach( (v) => console.log(v.name) );

// 남자인 학생들의 나이를 전부 다 더해서 출력
let sumAge = stdList
    .filter( v => v.gender === "M" )
    .reduce( (acc, v) => acc + v.age , 0 );
console.log("남학생 나이 합: " + sumAge );

// 이 리스트에 남자만 있는지 판별
// .every() 메서드 사용
console.log(stdList.every( v => v.gender === "M" ));

// 나이순으로 정렬
// .sort() 메서드 사용
let sortedList = stdList.sort( (a, b) => a.age - b.age )
    .map( v => v.name );
console.log("나이순 정렬:" + sortedList);