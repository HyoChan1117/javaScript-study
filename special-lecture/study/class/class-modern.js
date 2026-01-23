class Bar {
    name = "";

    constructor(argName = "gsc") {
        this.name = argName;
    }

    prtName = function() {
        console.log(this.name);
    }
}

b1 = new Bar();
