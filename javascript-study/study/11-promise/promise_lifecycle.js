// Promise 예제: "비동기 작업의 성공/실패를 표준 형태로 관리"하기 위한 코드

// Promise 객체 생성
let p = new Promise(
  /**
   * Executor 함수 (실행자 함수)
   *
   * - Promise를 생성하는 순간(= new Promise(...) 호출 순간) 즉시 실행된다.
   * - 여기 안에 "비동기 작업을 시작하는 코드"를 작성한다.
   * - Promise가 스레드를 새로 만드는 게 아니다.
   *   (JS는 기본적으로 메인 스레드에서 실행되고, setTimeout 같은 건 Web API/타이머에 '예약'될 뿐)
   *
   * @param {Function} resolve - 비동기 작업이 "성공"했을 때 호출하는 함수
   * @param {Function} reject  - 비동기 작업이 "실패"했을 때 호출하는 함수
   *
   * Promise 상태 변화:
   * - 처음: pending(대기)
   * - resolve(value) 호출: fulfilled(성공) + value 저장
   * - reject(error) 호출: rejected(실패) + error 저장
   * ※ resolve/reject 중 하나가 "한 번" 호출되면 상태는 고정(다시 못 바뀜)
   */
  (resolve, reject) => {
    // 여기서 "비동기 작업"을 시작한다.
    // 예시로 setTimeout을 사용해서 1초 뒤에 작업이 끝났다고 가정.

    setTimeout(() => {
      // 성공 케이스: resolve 호출 → Promise는 fulfilled 상태가 됨
      resolve("Async task completed");

      // 실패 케이스를 보고 싶다면 아래처럼 reject를 쓰면 됨 (둘 중 하나만 호출해야 함)
      // reject(new Error("Async task failed"));
    }, 1000);
  }
);

// Promise 사용 (결과 처리)

// then: resolve가 호출되어 "성공(fulfilled)" 했을 때 실행되는 콜백 등록
p.then((result) => {
  console.log("✅ 성공:", result);
})

// catch: reject가 호출되어 "실패(rejected)" 했을 때 실행되는 콜백 등록
.catch((err) => {
  console.log("❌ 실패:", err);
})

// finally: 성공/실패 상관없이 마지막에 실행 (정리 작업에 자주 사용)
.finally(() => {
  console.log("🔚 작업 종료(성공/실패 공통)");
});

/**
 * 예상 출력 (성공 케이스 기준)
 *
 * (1초 뒤)
 * 성공: Async task completed
 * 작업 종료(성공/실패 공통)
 */
