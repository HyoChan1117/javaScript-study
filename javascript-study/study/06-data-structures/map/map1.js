let myArray = [10, 20, 30];

// map은 새로운 배열을 반환하기 때문에 원본 배열은 변경되지 않는다.
let newArray = myArray.map(v => v * 10);
console.log(myArray, newArray);

// function map(argArray, argFn) {
//   // 배열을 순회하면서 각 요소에 대해 argFn 실행
//   for (let index in argArray) {
//     argArray[index] = argFn(argArray[index]);
//   }
// }

// map(myArray, v => v * 10);

// console.log(myArray); // [100, 200, 300]