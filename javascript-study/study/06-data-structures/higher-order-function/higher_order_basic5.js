// Higher-order function
// 이 코드에서 고차함수는 forEach

// 
// 
// 특정 작업을 지정해 놓은 것이 아니라 사용자 정의에 따라 달라짐

let myList = [10, 20, 30];

// 배열을 순회하겠다.
// 순회하면서 실행할 알고리즘은 사용자 정의에 따라
function forEach(argList, argFn) {
  // 배열을 순회. 첫 번째 -> 마지막까지
  for (const value of argList) {
    // 사용자 알고리즘 실행
    argFn(value);
  }
}

let myFn = function (argValue) {
  // My task
  console.log(argValue);
};

forEach(myList, myFn);

