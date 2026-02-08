// Higher-order function
// input: fn
// output: fn
// Pros: Abstract and Resuable

// 입력 배열에 각 요소를 순회
// 각 순회 시 사용자가 입력한 함수를 실행하여
// 그 결과 값을 해당 요소 값으로 치환

// 출력 함수
function forEach(argArray, argFn) {
  // 배열을 순회하면서 원소를 출력
  for (let i = 0; i < argArray.length; i++) {
    // console.log(argArray[i]);
    argFn(argArray[i]);
  }
}

// 특정 배열에 특정 숫자를 처리하는 함수
function map(argArray, argFn) {
  // 배열을 순회하면서 특정 숫자를 처리한다.
  for (let i in argArray) {
    // argArray[i] += argAddValue;
    argArray[i] = argFn(argArray[i])
  }
}

let myList = [10, 20, 30, 40];

// 1) 현재 배열의 값을 화면에 출력 하시오
// 10 20 30 40
forEach(myList, (v) => console.log(v));

// 2) 각 배열의 원소에 1을 더하시오 (배열 내 원소값 변경)
// 요소값 변경 11 21 31 41
// 매개변수가 1개면, () 제외 가능
// 명령문이 1줄이면, {} 제외 가능
map(myList, (v) => {return v + 1;});

// 3) 현재 배열의 값을 화면에 출력 하시오
// 11 21 31 41
forEach(myList, (v) => console.log(v));

// 4) 각 배열의 원소에 2를 더하시오 (배열 내 원소값 변경)
// 요소값 변경 13 23 33 43
map(myList, (v) => {return v + 2;});

// 5)현재 배열의 값을 화면에 출력 하시오
// 13 23 33 43
forEach(myList, (v) => console.log(v));