// 초창기 자바스크립트 함수 선언 방식
function add_1 (x, y) {
    return x + y;
}

// 함수형 프로그래밍
// 함수를 변수에 할당하는 방식
add_2 = function (x, y) {
    return x + y;
}

// 화살표 함수 방식 (ES6)
// 왜 나왔을까?
// 1. this 바인딩 문제 해결
// 2. 가독성 향상
add_3 = (x, y) => {
    return x + y;
}

// this 바인딩 문제 해결 예시
const obj = {
    value: 100,
    // 기존 함수 선언 방식
    getValue_1: function() {
        return this.value;
    },
    // 화살표 함수 방식
    getValue_2: () => {
        return this.value;  // this가 전역 객체를 가리킴
    }
};

// 함수형 프로그래밍이 왜 좋아?
// 1. 부작용 최소화
// 2. 코드 가독성 향상
// 3. 유지보수 용이

// 자바스크립트 태생
// Web browser, HTML, CSS를 붙여주는 역할

// GUI 프로그래밍
// 이벤트를 기반으로 동작
// 이벤트를 구현 -> 사용자가 클릭을 했을 때 어떤 동작을 수행
// 객체로 표현하는 것보다 함수로 표현하는 것이 더 직관적
// 그래서 함수형 프로그래밍이 자바스크립트에 적합
// this 바인딩 문제를 해결하기 위해 화살표 함수가 도입됨