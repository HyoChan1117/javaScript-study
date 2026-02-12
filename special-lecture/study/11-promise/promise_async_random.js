// 요청한 작업에 대한 처리가 성공했는지, 실패했는지를 나타내는 상태 관리

// Promise 객체 1개는 "비동기 작업 1개"를 의미
// 성공 시 실행할 것 / 실패 시 실행할 것을 미리 등록해 둠

let p = new Promise(

  // executor (사용자가 정의하는 함수)
  // resolve: 성공 시 호출
  // reject : 실패 시 호출
  (resolve, reject) => {

    console.log("start");

    setTimeout(() => {

      if (Math.random() > 0.5) {
        resolve("S");
      } else {
        reject("F");
      }

    }, 3000);

    console.log("end");
  }
);

p.then(
  (result) => console.log("성공:", result),
  (error) => console.log("실패:", error)
);
