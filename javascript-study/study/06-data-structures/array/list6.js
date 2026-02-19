const myList = [10, 20, , , 50];

// for of -> value
// 값 자체를 순회하면서 값을 가져옴
for (value of myList) {
    console.log(value);   // myList[index]
}

// for in -> index
// 인덱스를 순회하면서 인덱스를 가져옴
for (index in myList) {
    console.log(index);   // myList[index]
}