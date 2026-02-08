// 1 ~ 45 사이 정수를 난수로 6개 발생하여 리스트에 저장
// Set은 중복을 허용하지 않음
const numbers = new Set();

// 난수가 6개가 될 때까지 반복
while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
}

// 배열로 변환 후 정렬
const result = [...numbers].sort((a, b) => a - b);

console.log("생성된 번호:", result);
