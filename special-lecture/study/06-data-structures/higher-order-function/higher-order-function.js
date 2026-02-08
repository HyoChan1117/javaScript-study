// Higher order function (고차함수)
// 장점
// 1. 추상화
// 2. 재사용성

// input: fn
// output: fn
print = console.log;

let myList = [10, 20, 30, 40];

// 출력 함수
function forEach(argArray, argFn) {
    for (let i = 0; i < argArray.length; i++) {
        // print(argArray[i]);
        argFn(argArray[i]);
    }
    print();
}

// 특정 배열에 특정 값을 더하는 함수
function map(argArray, argAddValue) {
    for (let i in argArray) {
        argArray[i] += argAddValue;
    }
}

// 현재 배열의 값을 화면에 출력 하시오
// 10, 20, 30, 40
forEach(myList, (v) => process.stdout.write(`${v}\t`));

// 각 배열의 원소에 1을 더하시오.(배열 내 원소값 변경)
map(myList, 1);

// 현재 배열의 값을 화면에 출력하시오
// 11, 21, 31, 41
forEach(myList);

// 각 배열의 원소에 2를 더하시오
map(myList, 2);

// 현재 배열의 값을 화면에 출력 하시오
// 13, 23, 33, 43
forEach(myList);