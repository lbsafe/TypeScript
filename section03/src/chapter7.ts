// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

// 타입 가드
// typeof 등 연산자를 활용해 조건문과 함께 타입을 좁히는 표현
// 여러가지 타입 가드가 존재한다.

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person){    
    if(typeof value === 'number'){ // 타입 가드
        console.log(value.toFixed());
    }else if(typeof value === 'string'){ // 타입 가드
        console.log(value.toUpperCase());
    }else if(value instanceof Date){ // value가 Date 객체인지 물어보는 표현 
        console.log(value.getTime());
    }else if(value && 'age' in value){
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
    
    // 조건을 Date와 null 둘 다 통과해서 에러 발생 instanceof를 사용한다.
    // else if(typeof value === 'object'){ 
    //     console.log(value.getTime()); 
    // }
};