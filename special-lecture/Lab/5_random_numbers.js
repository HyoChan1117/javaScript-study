print = console.log;
let myList1 = [100, 200, 300]; // dense array
let myList2 = [10, 20, 30]; // dense array

myList1[7] = 400; // sparse array

print(myList1.length === Object.keys(myList1).length);
print(myList2.length === Object.keys(myList2).length);

// print(`myList1: ${myList1}, length: ${myList1.length}`);
// print(`myList2: ${myList2}, length: ${myList2.length}`);



