// 코드를 실행시키는 역할 -> Thread
// main thread
// JS는 single thread 언어
// 동기 작업
function makeDelay(argMS) {
    let endTime = Date.now() + argMS;
    while (Date.now() < endTime) {
        // 대기
    }
}

console.log("10");


console.log("20");
makeDelay(3000); // 3초 대기

console.log("30");

console.log("40");