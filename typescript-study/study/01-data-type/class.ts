// "?:"를 사용하여 선택적 속성을 설정할 수 있음
interface Apple {
    id: number;
    name: string;
    price?: number;
}

// "?:"로 설정된 속성은 사용하지 않아도 됨
const apple1: Apple = {
    id: 1,
    name: "apple",
    price: 3,
}

class Apple2 implements Apple {
    id: number;
    name: string;
    price: number;
    
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const a = new Apple2(1, "2", 3);
console.log(a);