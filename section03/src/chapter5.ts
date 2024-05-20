// 타입 추론
// 타입 스크립트는 범용적으로 변수를 사용할 수 있도록 추론한다. (타입 넓히기)

// 타입스크립트가 변수 선언 시 타입을 추론하는 기준은 변수의 초기 값이다.
let a = 10;
let b = "hi";
let c = {
    id: 1,
    name: "오건희",
    profile: {
        nickname: "lbsafe"
    }
}
let {id, name, profile} = c;
let [one, two, three] = ["one", 2, true];

// 함수의 반환값 타입도 추론한다. 이때 초기화 값이 아닌 return문 다음에 오는 반환값을 기준으로 한다.
// 함수의 매개변수도 기본값을 기준으로 추론한다.
function fuc(message = "hello"){
    return "hello";
}

// 변수를 선언하고 초기 값을 지정하지 않으면 암묵적인 any 타입으로 추론한다.
// 명시적 any 타입과 암묵적 any 타입은 다르다. 명시적으로 any 타입으로 지정해주면 any 타입만 가능하다.
// 암묵적인 any 타입일 경우 다음에 넣어주는 값에 따라 타입이 변하는걸 any 타입의 진화라고 한다.
// 암묵적인 any 타입은 혼란을 야기함으로 지양한다.

let d;
d = 1;
d.toFixed();

d = "hello";
d.toUpperCase();

// let이 아닌 const로 변수 선언 시 타입에 맞는 추론이 아닌 리터럴 타입으로 지정된다.
// const로 선언 시 변수는 상수이기에 변하지 않는다.
const num = 10;
const str = "hello";

// 여러 타입의 요소를 저장하는 배열을 선언하면 각 요소에 맞는 유니온 타입을 갖는 배열 타입으로 추론된다.
let arr = [1, "hi"];

