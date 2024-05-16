// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "keonhee"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// 불가능 tup1 = [1, 2, 3];
// 불가능 tup1 = ["hi", 2];
let tup2 = [1, "2", true];
export {};
// 불가능 tup2 = ["2", 1, true];
// 불가능 tup2 = ["2"];
