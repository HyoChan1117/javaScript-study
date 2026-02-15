let promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("작업 성공");
  } else {
    reject("작업 실패");
  }
});

promise
  .then(result => {
    console.log(result);   // 성공 시 실행
  })
  .catch(error => {
    console.log(error);    // 실패 시 실행
  });
