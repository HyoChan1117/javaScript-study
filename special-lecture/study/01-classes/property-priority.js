class Bar {
    x = 10;
    constructor() {
        // this.x = 0;
    }
}

Bar.prototype.x = 30;

bar = new Bar();


console.log(bar.x);