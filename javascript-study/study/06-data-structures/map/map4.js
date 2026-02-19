let myArray = [10, 20, 30];

// map은 새로운 배열을 반환하기 때문에 원본 배열은 변경되지 않는다.
let newArray = myArray.map(v => v * 10);
console.log(myArray, newArray);

function map(argArray, argFn) {
  let newArray = [];
  // 배열을 순회하면서 각 요소에 대해 argFn 실행
  for (let index in argArray) {
    // 왜 메서드를 사용하지 않고 push를 사용할까?
    // Sparse Array
    // Dense Array를 유지해야 함
    newArray.push(argFn(argArray[index]));
  }
}

map(myArray, v => v * 10);

console.log(myArray); // [100, 200, 300]