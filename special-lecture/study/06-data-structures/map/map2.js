let myList = [10.333, 20.22, 30.333];
// 배열 안에 있는 모든 원소의 값을 업데이트하고 싶을 때 map 사용
let newList = myList.map(v => parseInt(v));

console.log(newList); // [10, 20, 30]

// 배열 안에 있는 모든 원소들을 정수로 바꾸고 싶을 때
myList = myList.map(v => Math.floor(v));
console.log(myList); // [10, 20, 30]

// myList.forEach(v => {
//   // mutable vs immutable
//   // 이것은 mutable
//   console.log("--------------------------------");
//   console.log(v);
// });