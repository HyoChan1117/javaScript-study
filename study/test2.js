// hoisting 대상: 변수, 함수

console.log(foo);
test();

var foo = 5;
var bar = 3;

function test() {
    console.log("hello")
}

/*
위 코드를 실행 시 자바스크립트 엔진이 주석 안에 있는 내용처럼
바뀜

var foo;
var bar;

function test() {
    console.log("hello");
}

console.log(foo);
test();

var foo = 5;
var bar = 3;
*/