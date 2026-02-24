let value: Array<number> | number;
let strNum: string | number;

value = [1, 2, 3];
strNum = "string";

console.log(value);
console.log(strNum);

// 타입 좁히기(Narrowing)
// 1. typeof 가드를 사용한 좁히기
function printId(id: string | number) {
    if (typeof id === "string") {
        // 이 블록 안에서 id는 "string" 타입으로 취급됨
        console.log(id.toUpperCase());
    } else {
        // 이 블록 안에서 id는 'number' 타입으로 취급됨
        console.log(id);
    }
}

printId("Apple");
printId(3);

// 2. 진실성(Truthiness) 확인을 통한 좁히기
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        // strs가 null이 아니고 객체(배열)인 경우
        for (const  s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        // strs가 string인 경우
        console.log(strs);
    }
}

printAll("str");