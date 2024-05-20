// 대수타입
// -> 여러가지 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재한다.

// 합집합 타입 - Union 타입
// 어느 한쪽 조건에 해당 하는 프로퍼티를 갖거나 모든 조건에 해당하는 프로퍼티를 갖는 객체

let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hi", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
}

let union2: Union1 = {
    name: "",
    language: "",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = {
//     name: "",
// }

//  교집합 타입 - Intersection 타입
//  조건에 해당하는 모든 프로퍼티를 갖고 있는 객체

let variable: number & string;


type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
}