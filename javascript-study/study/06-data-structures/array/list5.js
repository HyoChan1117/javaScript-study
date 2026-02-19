// 리스트 종류
// dense array vs sparse array
// dense array: 모든 인덱스에 값이 존재
// sparse array: 일부 인덱스에 값이 존재하지 않음
let myList1 = [100, 200, 300];  // Dense array
let myList2 = [10, 20, 30];   // Dense array

print = console.log;

myList1[7] = 400;  // sparse array

// Object.keys() 메서드는 배열의 실제 요소 개수를 반환
print(myList1.length === Object.keys(myList1).length); // false
print(myList2.length === Object.keys(myList2).length); // true