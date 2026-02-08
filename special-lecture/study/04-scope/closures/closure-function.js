function barMaker() {
    let x = 1;
    function bar() {
        x++;
        console.log(x);
    }
    bar();  // A point -> Lexical Scope 참조하여 읽어오기
    return bar;
}

const bar2 = barMaker();
bar2();  // B point -> Lexical Scope를 이용하지만 캡쳐된 값을 가져옴