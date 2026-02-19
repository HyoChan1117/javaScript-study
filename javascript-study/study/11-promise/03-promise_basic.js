let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("에러 발생!");
  }, 2000);
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
