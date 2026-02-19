let p = new Promise(
    // Executor
);

p.then(/* OnResolved, OnRejectd */)

let p2 = new Promise();

// Task A -> Task B -> Task C -> Task D
p2.then().then().then().catch().finally();

// Promise 체이닝(Chaining) 예시
// 예외 처리 포함
// 어떤 식으로 동작하는지 보여주는 예시

// async, await 등장 배경
// 비동기 작업을 동기 작업처럼 작성하고 싶을 때
function asyncTaskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task A completed");
            resolve("Result A");
        }, 1000);
    });
}