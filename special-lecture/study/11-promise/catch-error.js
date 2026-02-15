// Promise 객체는 비동기 작업을 처리하기 위한 객체
// 아래 코드는 하나의 비동기 작업을 처리하는 Promise 객체를 생성하는 예시입니다.

// 실행 결과값이 아무것도 안나오는 이유
// -> executor 함수 내부에서 비동기 작업이 없고, resolve나 reject가 호출되지 않음
// -> 프로미스 객체의 상태가 pending 상태로 계속 남아있음
new Promise((resolve, reject) => {
  // resolve("Executor: S");
  reject("Executor: F");
})
  .then(
    (result) => {
      console.log(`then-S: ${result}`);
    },
    (error) => {
      console.log(`then-F: ${error}`);
      throw new Error("Error!!!! Then")
    }
  )
  // catch가 실행되게 하려면
  // 1. resolve든 reject든 상관없이 then에서 에러가 발생하면 잡음
  // 그래서 then에서 에러가 발생하면 catch로 넘어감
  .catch((error) => console.log(`catch: ${error}`))
  .finally((result) => console.log(`finally: ${result}`));