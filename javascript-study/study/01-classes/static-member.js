class Bar {
    x = 2;
    static y = 1;   // Bar.y : Bar의 생성자 함수 객체에 생성
    static prtY() {
        console.log(Bar.y);
    }
}

obj1 = new Bar();
obj2 = new Bar();

Bar.y = 20;

console.log(Bar.y);   // 20
console.log(obj1.y);  // undefined
console.log(obj2.y);  // undefined

Bar.prtY();