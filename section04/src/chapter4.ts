// 사용자 정의 타입 가드
// 이미 만들어진 타입이던가 라이브러리가 제공하는 타입일 경우 서로소 유니온 타입을
// 만들기 위한 리터럴 프로퍼티를 직접 만들지 못할 때 유용하다

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal){
    if("isBark" in animal){
        // 강아지
    }else if("isScratch" in animal){
        // 고양이
    }
}

function warning2(animal: Animal){
    if(isDog(animal)){
        // 강아지
        animal;
    }else if(isCat(animal)){
        // 고양이
        animal;
    }
}