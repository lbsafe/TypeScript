// 분산적인 조건부 타입
// 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // c: string | number;
// 타입 변수에 유니온 타입을 할당하게 되면 number와 string 두개가 분리되어서 전달 된다.
// StringNumberSwitch<number> |  => string
// StringNumberSwitch<string>    => number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계 분리 및 유니온으로 묶임
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계 각각의 결과 계산
// number |
// string |
// number

// 결과 - 중복 제외
// number | string

// 실용적인 예제
// 유니온에서 특정 타입만 제거하는 타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean 유니온 타입에 never 타입이 있다면 사라진다. (공집합은 합집합 하여도 원본 집합이다.)
// => number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string