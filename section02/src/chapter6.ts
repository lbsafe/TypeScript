// any 타입
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
// 변수에 지정할 경우 모든 타입의 값을 할당 받을 수 있다.
// type 검사를 실행하지 않기 때문에 사용을 지양한다.
// 다른 타입의 값으로도 넣을 수 있다.

let anyVar: any = 10;

// anyVar = 'hello';
// anyVar = true;
// anyVar = {};
// anyVar = () =>{};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown 타입
// any 타입과 다르게 다른 타입의 값으로 넣을 수 없다.
// any 타입과 다르게 toUpperCase 같은 특정 타입의 기능은 사용할 수 없다.
// unknown 타입은 if문을 통한 typeof 연산자 조건 같이 타입을 밝혀 주었을 때만 unknown 타입의 변수를 다른 타입으로 정제하여 사용 가능하다.

let unknownVar : unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = ()=>{};

// num = unknownVar;

if(typeof unknownVar === 'number'){ // 타입 정제
    num = unknownVar;
}

// 변수에 저장할 타입이 확실하지 않을 때는 any 타입보다 unknown 타입을 활용하는게 안정적이다.