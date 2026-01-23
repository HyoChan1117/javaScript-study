print = console.log;

let x = 2

function bar() {
    print(x);
}

function outer() {
    let y = 2;
    
    function inner() {
        let z = 3;
        print(x, y, z);
    }
}

class Student {
    name = "";
    age = 0;

    constructor(argName, argAge) {
        this.name = argName;
        this.age = argAge;
    }

    prtInfo() {
        console.log(this.name, this.age)
    }
}

std1 = new Student("gsc", 20);
