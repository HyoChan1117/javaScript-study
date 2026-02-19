class Bar {
    #x = 2;

    set x(argX) {
        if (argX > 0) {
            this.#x = argX;
        }
    }

    get x() {
        return this.#x;
    }
}

obj = new Bar();
obj.x = 20;
console.log(obj.x);