// 함수 타입 표현식

// 타입별칭을 이용해 함수의 타입을 별도로 정의하는 방법
// 매개 변수의 갯수와 타입을 맞춰줘야 한다.

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
// const add: (a: number, b: number) => number = (a, b) => a + b; 와 동일
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
    (a:number, b:number):number;
    name: string; // 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name;