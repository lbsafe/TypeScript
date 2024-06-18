// 조건부 타입
// extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의한다.

type A = number extends string ? string : number;

type ObjA = {
    a : number;
};

type ObjB = {
    a : number;
    b : number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number? string : number;

let varA : StringNumberSwitch<number> // varA: string
let varB : StringNumberSwitch<string> // varB: number

// 제네릭과 조건부 타입과 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined; // 함수 오버로딩
function removeSpaces(text: any){ // 오버토드 시그니처의 타입을 따라가기에 타입 정의는 필요하지 않다. (매개변수만 any 타입으로 정의한다.)
    if(typeof text === "string"){
        // replaceAll(A, B) 첫번째 인수에 해당하는 문자를 모두 찾아내 두번째 인자로 바꿔주는 메서드
        return text.replaceAll(" ", ""); // 공백 제거
    }else{
        return undefined;
    }
}

let result = removeSpaces("hi im KeonHee");
result.toUpperCase();

let result2 = removeSpaces(undefined);