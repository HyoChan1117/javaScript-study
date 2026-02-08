let myList = [10, 299, 30, 400]

// 배열의 각 요소를 순회
// 어떤 조건을 만족하는 값만 새로운 배열로 리턴
function filter(argList, argFn) {
  // 새로운 배열을 하나 생성
  let newList = [];

  // 입력 배열의 요소를 순회
  for (let value of argList) {
    // 어떤 조건을 만족하면 새로운 배열에 삽입
    if (argFn(value)) {
      newList.push();
    }
  }
  
  // 새로운 배열을 반환
  return newList;
}

console.log(filter(myList, v => v >= 100));

// 100 이상 값들만 리스트로 생성
let newList1 = myList.filter(v => v >= 100);

console.log(newList1);

// 학생 객체에서 평균이 50 이상인 학생의 리스트 생성