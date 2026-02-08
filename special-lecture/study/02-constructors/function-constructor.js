// Function vs Constructor function

// Function
function test() {
    this.x = 20;
}

// Constructor function
// Legacy
// ES6 이후에는 class 문법을 사용
// 하지만 여전히 함수로 생성자 함수를 만들 수 있다.
function Test() {
    this.y = 30;
}

obj1 = new test();  // 일반 함수 호출
obj2 = new Test();  // 생성자 함수 호출