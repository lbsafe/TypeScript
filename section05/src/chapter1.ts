// 인터페이스의 확장
// B extends A
// A의 모든 프로퍼티를 갖고 있는 상태에서 B의 프로퍼티를 추가(상속)하는 타입
// 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다.
// 다시 정의할 타입은 원본 타입의 서브 타입이어야만 한다.
// 인터페이스가 아닌 타입 별칭이여도 객체 타입이라면 확장이 가능하다.

interface Animal{
    name: string;
    age: number;
}

interface Dog extends Animal{
    isBark: boolean;
}

const dog: Dog ={
    name: "",
    age: 1,
    isBark: true
}

interface Cat extends Animal{
    isScratch: boolean;
}

interface Chicken extends Animal{
    isFly: boolean;
}

type Animal2 = {
    name: string;
    color: string;
}

interface Dog2 extends Animal2{
    isBark: boolean;
}

const dog2: Dog2 ={
    name: "",
    color: "",
    isBark: true
}

// 다중 확장
// 인터페이스는 여러가지 인터페이스를 또 확장하는 다중 확장도 가능하다.
interface DogCat extends Dog, Cat{}

const dogcat: DogCat ={
    name: "",
    age: 1,
    isBark: true,
    isScratch: true,
}