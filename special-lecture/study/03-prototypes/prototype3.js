class Bar {
    x = 2;
    constructor() {
        this.prtX = () => { console.log(this.x); };
    }
}

class Foo {
    x = 2;
    prtX() {
        console.log(this.x);
    }
}

bar1 = new Bar();
bar2 = new Bar();
foo1 = new Foo();
foo2 = new Foo();