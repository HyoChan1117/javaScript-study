class Bar {
    constructor(argName = "gsc") {
        this.name = argName;
    }

    prtName = function() {
        console.log(this);
    }
}

b1 = new Bar();
b1.prtName();   // gsc
const f = b1.prtName;
f();
