// 제네릭
// - 함수의 인수에 따라서 반환 값의 타입을 가변적으로 정의해준다.
// -> 모든 타입에 두루두루 쓸 수 있는 범용적인 함수

// 제네릭 함수
// <T> = 타입 변수
// 타입 변수는 함수를 호출할 때 인수의 타입에 따라 타입 변수에 저장되는 타입이 변한다.
// 타입변수 선언 후 매개 변수의 타입을 T로, 반환값의 타입을 T로 바꿔준다.
function func<T>(value: T): T{
    return value;
}

let num = func(10); // let num: number

let bool = func(true); // let bool: boolean

let str = func("string"); // let str: string

// 명시적으로 타입을 직접 정의하는 것도 가능하다.
let arr = func<[number, number, number]>([1, 2, 3]);