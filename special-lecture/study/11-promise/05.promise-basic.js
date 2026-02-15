// Promise 객체는 비동기 작업을 처리하기 위한 객체
// 아래 코드는 하나의 비동기 작업을 처리하는 Promise 객체를 생성하는 예시입니다.

// 실행 결과값이 아무것도 안나오는 이유
// -> executor 함수 내부에서 비동기 작업이 없고, resolve나 reject가 호출되지 않음
// -> 프로미스 객체의 상태가 pending 상태로 계속 남아있음
new Promise((resolve, reject) => {})
  .then(
    (result) => {console.log(`then-S: ${result}`);},
    (error) => {console.log(`then-F: ${error}`);}
  ) 
  .catch((error) => console.log(`catch: ${error}`))
  .finally((result) => console.log(`finally: ${result}`));