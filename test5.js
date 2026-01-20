var foo = 3;  // 전역 선언
const pos = 30;  // 전역 선언
// pos = 300;

if (foo > 1) {
    var foo = 5;  // 전역 선언 (재선언)
    const pos = 50;  // 지역 선언 (블록 스코프)
    console.log(foo, pos);
    // let pos = 50;   // 재선언 불가능 - 동일한 범위, 동일한 이름
}

console.log(foo, pos)