// 요청한 작업에 대한 처리가 성공했는지, 실패했는지를 나타내는 상태 관리 

// Promise 객체 1개는 무엇을 나타내는지?
// -> 내가 처리해야 할 비동기 작업 1개를 나타냄
// -> 성공 시 무엇을 실행하고, 실패 시 무엇을 실행할지 미리 등록해 놓음
let p = new Promise(

  // executor -> user defined function
  // 실질적인 Executor 함수 작성
  () => {
    console.log("test");
  }
);

// 프로미스 객체 생성 후 사용자로부터 받은 함수를 실행한다.