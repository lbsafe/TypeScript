// void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
// 반환하는 값이 없을 때 사용

function func1(): string{
    return "hello";
}

function func2(): void{
    console.log('hello');
}

function func3(): undefined{
}

let a: void;
// a = 1; // 불가능
// a = 'hello'; // 불가능
// a = {}; // 불가능
// a = null // tsconfig.js 옵션에 strictNullChecks 옵션을 끄면 예외적으로 가능하다.
a = undefined; // 가능

// never 타입
// never -> 존재하지 않는
// 불가능한 타입
// 실행시 종료나 무한 루프와 같이 반환하는 값이 존재 하는게 모순인 경우 사용한다.
// never 타입인 경우 어떠한 값도 변수에 저장이 불가능 하다.

function func4(): never {
    while (true){}
}

function func5(): never{
    throw new Error();
}

let anyVar: any;

let b: never;
// b = 1; // 불가능
// b = 'hello'; // 불가능
// b = {}; // 불가능
// b = null; // 불가능
// b = undefined; // 불가능
// b = anyVar; 불가능