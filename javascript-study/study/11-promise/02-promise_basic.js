let promise = new Promise((resolve, reject) => {
  console.log("작업 시작");

  setTimeout(() => {
    resolve("3초 뒤 성공!");
  }, 3000);
});

promise.then(result => {
  console.log(result);
});

console.log("다음 코드 실행");
