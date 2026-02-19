// 코드를 실행시키는 역할 -> Thread
// main thread
// JS는 single thread 언어

// 동기 작업
function makeDelay(argMS) {
    let endTime = Date.now() + argMS;
    while (Date.now() < endTime) {
        console.log("test");
    }
}

console.log("10");

console.log("20");
// setTimeout 비동기 작업
setTimeout(() => {console.log("50");}, 12000);
console.log("30");

makeDelay(5000);
console.log("40");