// Unknown 타입

function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hi";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar; 다운 캐스팅 - 불가능
    // let str: string = unknownVar; 다운 캐스팅 - 불가능
    // let bool: boolean = unknownVar; 다운 캐스팅 - 불가능
}

// never 타입

function neverExam(){
    function neverFunc(): never{
        while(true){}
    }

    let num: number = neverFunc(); // 업 캐스팅 - 가능
    let str: string = neverFunc(); // 업 캐스팅 - 가능
    let bool: boolean = neverFunc(); // 업 캐스팅 - 가능

    // let never1: never = 10; 다운 캐스팅 - 불가능
    // let never2: never = 'hi'; 다운 캐스팅 - 불가능
    // let never3: never = true; 다운 캐스팅 - 불가능
}

// void 타입

function voidExam(){
    function voidFunc(): void{
        console.log('hi');
    }

    let voidVar : void = undefined;
}

// any 타입

function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar : never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; // 불가능
    // any 타입은 모든 타입의 부모, 자식 타입이 될 수 있다.
    // 예외로 any 타입은 never 타입에 다운 캐스팅은 할 수 없다.
}