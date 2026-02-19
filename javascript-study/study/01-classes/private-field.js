class Bar {
    #x = 2;

    setX(argX) {
        if (argX > 0) {
            this.#x = argX;
            return true;
        }

        return false;
    }
}

obj = new Bar();
obj.setX(0);
obj.setX(10);
