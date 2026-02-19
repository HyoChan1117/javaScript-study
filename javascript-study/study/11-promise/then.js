let p1 = new Promise(
  (resolve, reject) => {
  
  }
);

let p2 = p1.then();

console.log(p2 instanceof Promise); // true

// then에서 알아야 할 것
// 1. then에서는 현재 Promise에 resolve와 reject를 등록하는 역할
// 2. 새로운 Promise 객체를 생성