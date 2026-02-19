print = console.log;

let x = 1;

function a_1() {
    let y = 2;
    function a_2() {
        let z = 3;
        x++;
        print(x, y, z);
    }
    return a_2;
}

function b_1() {
    const bar = a_1();
    bar();
}

b_1();