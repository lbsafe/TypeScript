// 타입 변수 응용하기

// 첫번째 사례
// 매개변수 A, B의 타입이 다를 경우
// 새로운 타입 변수를 생성해서 해결한다.
function swap<T, U>(a: T, b: U){
    return [b, a];
}

const [a, b] = swap("1", 2);

// 두번째 사례
// 배열 사용시
function returnFirstValue<T>(data: [T, ...unknown[]]){
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "hi"]);
// hello

// 세번째 사례
// 타입 제한하기
// (length가 number인 프로퍼티를 가지고 있는 객체를 확장하면서 T를 제한한다.)
function getLenth<T extends {length : number}>(data : T){
    return data.length;
}

let var1 = getLenth([1, 2, 3]); // 3

let var2 = getLenth("12345"); // 5

let var3 = getLenth({length:10}); // 10

// let var4 = getLenth(10); // length 프로퍼티가 없는 값은 제한된다.