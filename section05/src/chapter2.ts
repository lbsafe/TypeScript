// 인터페이스 선언 합치기
// 기존 타입 별칭에서 동일한 이름으로 정의가 불가능 했다면, 인터페이스는 가능하다.
// 동일한 이름의 인터페이스는 합쳐지기 때문이다.
// 동일한 프로퍼티를 중복으로 정의할 경우 타입을 다르게 정의하는 경우 불가능하다.
// 확장과는 다르게 합침은 서브타입으로 프로퍼티를 선언해도 불가능 하다.

interface Person {
    name: string;
}

interface Person {
    // name: number; 다른 타입으로 정의했기에 합치기가 불가능해진다.
    age: number;
}

interface Developer extends Person{ // 확장은 기존의 프로퍼티를 서브타입으로 선언 가능
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27
}

// 모듈 보강
// 기존의 인터페이스에서 없는 프로퍼티를 사용할 경우 인터페이스 합침을 활용한다.

interface Lib{
    a: number,
    b: number
}

interface Lib{ // 인터페이스 합치기로 c 프로퍼티를 추가한다.
    c: string
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hi"
}