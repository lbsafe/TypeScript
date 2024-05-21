// 인터페이스
// 타입에 이름을 지어주는 또 다른 문법
// 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등 특수한 기능 제공)
// 인터페이스는 선택적 프로퍼티(?), 읽기전용(readonly), 메서드 타입의 정의 등 타입별칭과 동일한 기능을 제공한다.
// 메서드의 타입을 정의할 때 호출 시그니처를 이용할 경우 메서드의 이름이 소괄호 앞에 붙는다.
// 함수 오버로딩을 구현할 때는 함수 타입 표현식이 아닌 호출 시그니처를 이용한다.

// 타입 별칭과의 차이점
// 인터페이스는 객체 타입을 정의하는데 특화되어 있어서, 타입 별칭과 다르게 유니온과 인터섹션 타입은 만들 수 없다.
// 유니온과 인터섹션 타입을 인터페이스에 활용이 필요한 경우, 따로 타입 별칭에 활요하거나 type 주석을 이용한다.


interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a:number, b:number): void;
}

const person: Person | number = { // 인터페이스의 유니온 타입 활용 (타입 주석)
    name: '오건희',
    sayHi: function(){
        console.log('hi')
    },
}

person.sayHi();
person.sayHi(1, 2);