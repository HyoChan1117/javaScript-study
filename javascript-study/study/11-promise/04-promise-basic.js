
// Promise 객체 생성
let p1 = new Promise(
  // executor function이 사용자 정의형으로 작성됨
  // resolve와 reject가 필요한 이유?
  // -> 비동기 작업이 성공했는지, 실패했는지를 나타내는 상태 관리
  // -> 성공이면 resolve 함수를 호출해서 성공 상태로 바꿔주고
  // -> 실패면 reject 함수를 호출해서 실패 상태로 바꿔줌
  // resolve와 reject는 비동기 함수 내부의 처리 결과에 따라 호출됨
  (resolve, reject) => {
    console.log("Executor function is invoked!!");

    setTimeout(() => {console.log("wait 3 seconds!!"); resolve(["hi", "hello"]);}, 3000);

    // resolve(["hi", "hello"]);
    reject("Error occurred!!");
  }
);

// p1 -> when success : (result)
//    -> when failure : (error)
// 근데 왜 then() 메서드의 콜백 함수가 실행되지 않았을까?
// -> executor 함수 내부에서 비동기 작업이 없었기 때문
// -> resolve나 reject가 호출되지 않음
// -> 프로미스 객체의 상태가 pending 상태로 계속 남아있음
p1.then(
  (result) => {
    console.log("S" + result);
  },
  (error) => {
    console.log("F" + error);
  }
);