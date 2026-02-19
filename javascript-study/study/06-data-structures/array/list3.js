// 리스트 종류
// dense array vs sparse array
// dense array: 모든 인덱스에 값이 존재
// sparse array: 일부 인덱스에 값이 존재하지 않음
let myList1 = [100, 200, 300];  // Dense array
let myList2 = [10, 20, 30];   // Dense array

print = console.log;

delete myList1[1];  // sparse array
delete myList2[0];   // sparse array

print(`myList1: ${myList1}, length: ${myList1.length}`);  // myList1: 100,,300, length: 3
print(`myList2: ${myList2}, length: ${myList2.length}`);  // myList2: ,20,30, length: 3