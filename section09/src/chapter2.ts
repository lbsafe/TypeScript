// infer
// inference -> 추론하다.
// 조건부 타입 내에서 특정 타입만 추론해 오는 기능

type FuncA = ()=> string;

type FuncB = ()=> number;

type ReturnType<T> = T extends () => infer R ? R : never;
// infer R => 조건식을 참으로 만드는 타입을 추론

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // never
// number 타입이 서브 타입이 되도록 하는 () => infer R 슈퍼 타입은 없기에 추론 불가능으로 never 반환

// 예제
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입에 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string