// myList는 리스트의 메모리 주소를 가리킨다.
let myList = [10, 20, 30];

function map(argList, argFn) {
    for (let index in argList) {
        argList[index] = argFn(argList[index]);
    }
}

map(myList, (v) => v * 10);

console.log(myList); // [100, 200, 300]