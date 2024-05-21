// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취금해도 괜찮은가를 판단한다.
// - 타입의 호환 조건
// 1. 반환값의 타입이 호환 되는가
// 2. 매개변수의 타입이 호환 되는가

// 기준1. 반환 값이 호환 되는가
type A = ()=> number;
type B = ()=> 10;

let a:A = ()=> 10;
let b:B = ()=> 10;

a = b; // 업 캐스팅으로 호환 가능하다.
// b = a; // number 타입을 number 리터럴 타입으로 다운 캐스팅 했기 때문이다. 호환이 불가능하다.


// 기준2. 매개변수가 호환 되는가

// 매개변수 기준으로 호환성을 판단하면 업 캐스팅은 호환 불가능하고 다운 캐스팅일 때만 허용된다.
// 함수타입 A와 B를 매개 변수를 기준으로 호환성을 판단하면,
// A(부모타입) B(서브타입) 일 경우 A가 B의 조건을 갖고 있지 않기 때문에 업캐스팅일 때 호환이 불가능
// 반대로 B는 A의 서브타입으로 A의 조건을 갖고 있어서 다운캐스팅일 때 호환 가능하다.


// 2-1. 매개변수의 개수가 같을 때
type C = (value:number)=> void;
type D = (value:10)=> void;

let c:C = (value)=> {};
let d:D = (value)=> {};

// c = d; // 업캐스팅 호환 불가능
d = c; // 다운캐스팅 호환 가능

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal)=> {
    console.log(animal)
};
let dogFunc = (dog: Dog)=> {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅 호환 불가능 color 프로퍼티가 없다.
dogFunc = animalFunc; // 다운캐스팅 호환 가능

let testFunc = (animal: Animal)=>{
    console.log(animal.name);
    // console.log(animal.color); // 애니멀 타입에는 color 프로퍼티가 없어서 불가능하다.
}

let testFunc2 = (dog: Dog)=>{
    console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때

// 할당하려는 함수 쪽의 매개변수의 갯수가 더 적을 때만 호환이 가능하다.

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1의 매개변수의 개수가 더 많다. (2개 = 1개)
//func2 = func1; // func2의 매개변수의 개수가 더 적다. (1게 = 2개)