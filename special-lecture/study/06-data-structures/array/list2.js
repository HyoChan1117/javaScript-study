// 리스트 생성 방법
let myList1 = [100];  // Dense array
let myList2 = [10];   // Dense array

print = console.log;

myList1[1] = 200;  // dense array
myList2[5] = 20;   // sparse array

print(`myList1: ${myList1}, length: ${myList1.length}`);  // myList1: 100,200, length: 2
print(`myList2: ${myList2}, length: ${myList2.length}`);  // myList2: 10,,,,20, length: 6