// ./gsc/Student.js

// export 방법 2가지
// 1. export class Student {...}
export default class Student {
    name = undefined;
    age = undefined;
    gender = undefined;

    constructor(argName, argAge, argGender) {
        this.name = argName;
        this.age = argAge;
        this.gender = argGender;
    }
}

export class Foo {
    constructor(argName) {
        this.name = argName;
    }
}

// 2. export {Student};