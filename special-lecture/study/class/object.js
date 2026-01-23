// JavaScript {} -> Create an Object
foo = {name: "gsc", prtName: function(){console.log(this.name);}};

// 1) {} -> Create an Object
// 2) this.name = "gsc"
// 3) this.prtname = function () {console.log(this.name);}

// {}만 하면 빈 객체가 만들어짐
// key : value를 이용하면 멤버 변수 생성
// 일반적인 함수가 들어가면 멤버 메서드 생성

console.log(foo);

// class Bar {
//     constructor(argName = "gsc") {
//         this.name = argName;
//     }
// }

// b1 = new Bar();
// console.log(b1.name);