// import-default.js

import MyClass, {Foo}  from './gsc/Student-default.js';

let std1 = new MyClass("홍길동", 20, "남자");
console.log(std1);

let foo1 = new Foo("foo name");
console.log(foo1);