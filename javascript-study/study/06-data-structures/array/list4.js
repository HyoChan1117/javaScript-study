// 리스트 종류
// dense array vs sparse array
// dense array: 모든 인덱스에 값이 존재
// sparse array: 일부 인덱스에 값이 존재하지 않음
let myList1 = [100, 200, 300];  // Dense array
let myList2 = [10, 20, 30];   // Dense array

print = console.log;

myList1[7] = 400;  // sparse array

for (let i = 0; i < myList1.length; i++) {
    print(`myList1[${i}]: ${myList1[i]}`);
}

for (let i = 0; i < myList2.length; i++) {
    print(`myList2[${i}]: ${myList2[i]}`);
}