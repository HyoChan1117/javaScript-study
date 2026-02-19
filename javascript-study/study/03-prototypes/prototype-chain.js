class Bar {
    x = 2;
}

class Foo {
    x = 2;

    // Foo.prototype.prtX = function () { console.log(this.x); };
}

print= console.log;

bar1 = new Bar();
bar2 = new Bar();

print(bar1.__proto__);