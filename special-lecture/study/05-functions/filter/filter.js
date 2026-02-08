let myList = [10.333, 20.22, 30.333];
// 여기서는 무엇을 반환할까?
// 배열 안에 있는 모든 원소 중에서 20 이상인 원소들만 걸러내고 싶을 때 filter 사용
let newList = myList.filter(v => v >= 20);

console.log(newList); // [20.22, 30.333]