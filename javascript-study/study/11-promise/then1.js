let p1 = new Promise(
  (resolve, reject) => {
    // resolve("resolve!");
    reject("reject!");
  }
);

// then을 실행하면 새로운 Promise 객체가 생성
// 그래서 p2도 Promise 객체
// 그리고 p2는 p1의 then에서 반환하는 새로운 Promise 객체
let p2 = p1.then(
  (result) => {
    console.log("p1 - resolve");
  },
  (error) => {
    console.log("p1 - reject");
  }
);

// then을 실행하면 새로운 Promise 객체가 생성
// 그래서 p2도 Promise 객체
// 그리고 p2는 p1의 then에서 반환하는 새로운 Promise 객체
p2.then(
  (result) => {
    console.log("p2 - resolve");
  },
  (error) => {
    console.log("p2 - reject");
  }
);