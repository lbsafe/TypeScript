# TypeScript

<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/1f35a5fe-74bd-4c5c-abf1-1223ca66f259" alt="ts" width="150px"></p>

## TypeScript 에 대하여
>자바스크립트를 더 안전하게 사용할 수 있도록 **타입 관련 기능들을 추가**한 언어  
(타입스크립트 = 자바스크립트의 확장판)
***

### :one: 타입 시스템이란
>언어의 타입 관련된 문법 체계
1. 값들을 어떤 기준으로 묶어 타입을 규정할 것인가
2. 코드의 타입을 언제 검사할 것인가
3. 어떻게 타입을 검사할 것인가

### :two: 타입 시스템

1. 정적 타입 시스템 (엄격함, 고정적)
    - ex) Java
    - 코드 실행 이전 모든 변수의 타입을 정적으로 결정함
    - 단점: 모든 변수에 타입 지정 타이핑 량 증가, 유연하지 않음

2. 동적 타입 시스템 (유연함)
    - ex) Javascript
    - 코드를 실행하면서 유동적으로 변수의 타입을 결정함
    - 단점: 코드 타입의 오류를 미리 검사할 수 없음
    - 단점: 에러 발생 위험도가 높다

### :three: TypeScript의 특징

* **점진적 타입 시스템 (Gradual Type System)**

    1. 동적 타입 시스템 + 정적 타입 시스템
    2. 모든 변수에 타입을 일일이 지정할 필요 없음
    3. 실행 전 검사를 통한 타입 안정성 확보
    4. 자동으로 변수의 타입을 추론함

### :four: TypeScript의 동작 과정

```html
            TypeScript
                 ↓
           (코드 AST 변환)
                 ↓
          AST(추상 문법 트리)
                 ↓
              타입검사 
            ↙       ↘  
     (검사실패)       (검사성공)                                      
         ↓                ↓
     컴파일 종료     AST Javascript 변환
                          ↓
                     AST(추상 문법 트리)
                          ↓
                      바이트 코드
                          ↓
                         실행
```
***

## TypeScript 기본 설치 및 사용법

**:one: node.js 패키지 초기화**

* 초기화 명렁어

    ```js
    npm init
    ```

**:two: npm i @types/node 설치하기**
> TypeScript 가 컴파일 하는 과정에서 Node.js의 기본 기능인 console.log 등의 타입을 알아 먹을 수 있게 해준다.

* 초기화 명렁어

    ```js
    npm i @types/node
    ```

    npm i @types/node@20.8.0

**:three: typescript 컴파일러 설치하기**

* 설치 명령어

    ```js
    npm i typescript -g
    ```

* 설치 확인하기

    ```js
    tsc -v
    ```

**:four: TSX(TypeScript Execute) 도구 설치하기**
> typescript 컴파일러와 node.js가 같이 있는 도구, 즉시 실행이 가능하다.

* 설치 명령어

    ```js
    npm i -g tsx
    ```

* 설치 확인하기

    ```js
    tsx -v
    ```

**:five: 컴파일 방법 및 실행하기**

1. tsc, node 명령어 사용하기

    1-1. tsc 로 컴파일 하기
    ```js
    tsc src/index.ts
    ```

    1-2. node 로 실행하기
    ```js
    node src/index.js
    ```

2. tsx 명령어로 즉시 실행 하기

    ```js
    tsx src/index.ts
    ```

**:warning: 주의 사항 undici-types 에러 발생 시**

>types/node npm 에 따르면 @types 버전이 20버전 이상으로 업데이트되면서  
특정 라이브러리에서 타입 검사 오류가 발생

**해결방법**

* tsconfig.json에 compilerOption 내부에 skibLibCheck 옵션을 추가

    ```js    
    {
        
        "compilerOptions": {
            "skipLibCheck": true
        }
    }
    ```

<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/aa40be8f-63b9-4b06-a3d3-1de8b7e92a9e" alt="tsc error" width="100%"></p>
<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/aeaaeb5a-a264-4a7c-bc27-4adcb909135a" alt="tsc error" width="600px"></p>

***

## TypeScript 컴파일러 옵션 설정하기

**:one: TypeScript 컴파일러 설정 파일 생성 (tsconfig.json)**

```js
tsc --init
```

**:two: 설정 옵션**

1. include

    > tsc가 컴파일할 타입스크립트 파일들의 범위와 위치를 설정한다.
    
    * src 경로 안에 모든 파일을 컴파일 한다.

    ```js    
    {
        "include": ["src"] 
    }
    ```
2. skipLibCheck

    > 타입 정의 파일(.d.ts 확장자를 갖는 파일을 의미)의 타입 검사를 생략하는 옵션
    
    * 불 필요한 타입 정의 파일의 타입 검사를 생략한다.

    ```js    
    {
        
        "compilerOptions": {
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```

3. target

    > 타입스크립트 코드를 컴파일 해서 만들어지는 자바스크립트 코드의 버전을 설정한다.
    
    * 컴파일 결과 생성 되는 자바스크립트 코드의 버전이 ES5로 생성된다.
    * 자바스크립트 최신버전 ```"target": "ESNext"```

    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```
    
4. module

    > 자바스크립트의 모듈 시스템을 설정한다.
    
    * 변환 되는 자바스크립트의 모듈 시스템을 ES 모듈로 설정한다.
    * ```"module": "ESNext"```

    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "module": "ESNext",
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```

5. outDir

    > 컴파일 결과 생성 될 자바스크립트 파일들이 위치할 곳을 설정한다.
    
    * 변환 되는 자바스크립트의 모듈 시스템을 ES 모듈로 설정한다.
    * ```"module": "ESNext"```

    ```js    
        {
            "compilerOptions": {
                "target": "ESNext",
                "module": "ESNext",
                "outDir": "dist",
                "skipLibCheck": true
            },
            "include": ["src"]
        }
    ```

6. strict

    > 엄격한 타입 검사
    
    * 타입스크립트는 매개변수 등의 타입을 프로그래머가 직접 지정하도록 권장한다.
    * ```"strict": true```

    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "module": "ESNext",
            "outDir": "dist",
            "strict": true,
            "skipLibCheck": true,
        },
        "include": ["src"]
    }
    ```

7. moduleDetection

    > 타입스크립트의 파일을 개별 모듈로 인식한다.
    
    * 타입스크립트는 파일을 기본적으로 전역 모듈로 인식해서 파일이 다르더라도 중복 된 변수를 선언 시 에러가 발생한다.
    * moduleDetection 옵션을 통해 컴파일 시 파일에 ```export {};```를 추가하여 파일들을 개별 모듈로 인식하게 설정해 준다.
    * 자동으로 추가 되는 모듈 시스템 코드는 module 옵션의 설정에 따라 바뀐다.
    * 옵션을 사용하지 않을 경우 각 파일에 ```export {};``` 를 추가하여 개별 모듈로 인식하게 한다.
    * ```"moduleDetection": "force"```
    
    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "module": "ESNext",
            "outDir": "dist",
            "strict": true,
            "moduleDetection": "force",
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```

8. strictNullChecks

    > 엄격한 null 검사
    
    * null 타입이 아닌 변수에 null 값을 넣는걸 허용한다.
    * 옵션 false 시 null 타입이 아닌 변수에도 null 값을 임시로 넣을 수 있다.
    * ```"strictNullChecks": false```
    
    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "module": "ESNext",
            "outDir": "dist",
            "strict": true,
            "moduleDetection": "force",
            "strictNullChecks": false,
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```
***

## Typescript의 타입 설정

```js
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 => 깂
let numA: 10 = 10;
// 불가능 numA = 12;

let strA: "hello" = "hello";
// 불가능 strA = "hi";

let bollA: true = true;
```
***

## Typescript의 배열과 튜플

```js
// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "keonhee"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// 불가능 tup1 = [1, 2, 3];
// 불가능 tup1 = ["hi", 2];

let tup2: [number, string, boolean] = [1, "2", true];
// 불가능 tup2 = ["2", 1, true];
// 불가능 tup2 = ["2"];

// 주의 - 배열 메서드를 사용할 때는 길이제한이 발동하지 않는다.
tup1.push(1);
tup1.pop();

// 튜플 활용하기
// 값을 잘못넣지 않도록 방지할 수 있다.
const users: [string, number][] = [
    ["오건희", 1],
    ["이미지", 2],
    ["뿌까", 3],
    ["테스트", 4],
    [5, "오류"], // 오류 발생
];
```
***

## TypeScript의 객체

```js
// object
// 객체 리터럴 타입
let user: {
    id?: number; // ? 선택적 프로퍼티 유무를 선택할 수 있다.
    name: string;
} = {
    id: 1,
    name: "오건희",
};

user = {
    name: "홍길동",
}

let config:{
    readonly apikey: string; // 읽기 전용 프로퍼티 값이 바뀌면 안되는 프로퍼티
} = {
    apikey: 'api key'
}

// 읽기 전용으로 값을 바꿀 수 없음
// config.apikey = "hacked";
```
***

## TypeScript 타입 별칭과 인덱스 시그니처

```js
// 타입 별칭
// - 공통적으로 적용 되어야 하는 부분을 효율적으로 작업할 수 있다.
// - 같은 스코프 내에서 중복 된 이름으로 선언하지 않게 주의한다.
// - 함수 안에서 선언은 가능하다.

function fun(){
    type User = {
        id: number;
    };
}

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "오건희",
    nickname: "lbsafe",
    birth: "1998.04.26",
    bio: "안녕",
    location: "인천광역시"
};

let user2: User = {
    id: 2,
    name: "뿌까",
    nickname: "뿌까",
    birth: "2014.10.05",
    bio: "멍",
    location: "인천광역시"
};

// 인덱스 시그니처
// - 키와 value의 규칙을 이용해서 객체 타입의 정의를 유연하게 해주는 문법
// - 별도의 프로퍼티를 정의하는 경우 타입이 기존의 시그니처 value와 일치하거나 호환해야 된다.
// - 규칙을 위반할 프로퍼티가 없으면 프로퍼티가 비어있어도 에러가 생기지 않으니 주의한다.
type CountryCodes = {
    [key : string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: "us",
    UnitedKingdom : "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    UnitedState: number; // 기존 시그니처의 value와 일치
    Korea: string; // 기존 시그니처의 value와 일치하지 않아 에러가 발생한다.
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea: "ko",
};
// 시그니처 프로퍼티만 있는 경우 에러가 발생하지 않는다.
let countryNumberCodes: CountryNumberCodes = {};
```
***

## Enum 타입 (TypeScript Only)

> 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

* 특징
    - Enum은 숫자를 지정하지 않아도 자동으로 숫자가 0부터 들어간다.

        ```js
        enum Role {
            ADMIN, // ADMIN = 0
            USER, // USER = 1
            GUEST, // GUEST = 2
        }
        ```
    - 첫 숫자를 설정해주면 다음 숫자는 자동으로 설정한 값에서 +1 이 할당된다.

        ```js
        enum Role {
            ADMIN = 10,
            USER, // USER = 11
            GUEST, // GUEST = 12
        }
        ```
    - 중간 숫자 부터 할당하면 그 전 숫자는 0부터 시작한다.

        ```js
        enum Role {
            ADMIN, // ADMIN = 0
            USER = 10,
            GUEST, // GUEST = 11
        }
        ```
    - Enum은 컴파일 시 결과가 사리지지 않는다. 컴파일 시 객체로 변환된다.

        ```js
        // 컴파일 결과
        var Role;
        (function (Role) {
            Role[Role["ADMIN"] = 0] = "ADMIN";
            Role[Role["USER"] = 1] = "USER";
            Role[Role["GUEST"] = 2] = "GUEST";
        })(Role || (Role = {}));
        ```

* 사용예시

    ```js
    // 숫자형 enum
    enum Role {
        ADMIN = 0,
        USER = 1,
        GUEST = 2,
    }

    // 문자형 enum
    enum Language {
        korean = 'ko',
        english = 'en',
    }

    const user1 = {
        name: "오건희",
        role: Role.ADMIN, // 0 관리자
        language: Language.korean,
    }
    const user2 = {
        name: "홍길동",
        role: Role.USER, // 1 일반유저
        language: Language.english,
    }
    const user3 = {
        name: "아무개",
        role: Role.GUEST // 2 게스트
    }

    console.log(user1,user2,user3);
    // result
    // { name: '오건희', role: 0, language: 'ko' } { name: '홍길동', role: 1, language: 'en' } { name: '아무개', role: 2 }
    ```
***

## any 타입 / unknown 타입 (TypeScript Only)

### :one: any 타입

> 특정 변수의 타입을 확실히 모를 때 사용한다.

* 특징
    - 변수에 지정할 경우 모든 타입의 값을 할당 받을 수 있다.
    - type 검사를 실행하지 않기 때문에 사용을 지양한다.
    - 다른 타입의 값으로도 넣을 수 있다.
    - :warning: 컴파일 시 에러가 생긴다.

```js
let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () =>{};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
```

### :two: unknown 타입

> any 타입과 마찬가지로 특정 변수의 타입을 모를 때 사용한다.

* 특징
    - any 타입과 다르게 다른 타입의 값으로 넣을 수 없다.
    - any 타입과 다르게 toUppercase 같은 특정 타입의 기능(연사자 등)은 사용할 수 없다.
    - unknown 타입은 if문을 통한 typeof 연산자 조건 같이 타입을 밝혀 주었을 때만 unknown 타입의 변수를 다른 타입으로 정제하여 사용 가능하다.

```js
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = ()=>{};

// num = unknownVar; 불가능

if(typeof unknownVar === 'number'){ // 타입 정제
    num = unknownVar;
}
```

**:exclamation: 변수에 저장할 타입이 확실하지 않을 때는 any 타입보다 unknown 타입을 활용하는게 안정적이다.**
***

## void 타입 / never 타입 (TypeScript Only)

### :one: void 타입

> 함수나 변수가 반환하는 값이 없을 때 사용가능하다.

* 특징
    - void -> 공허 -> 아무것도 없다.
    - void -> 아무것도 없음을 의미하는 타입
    - undefined와 같은 역할을 한다. (undefined로 명시해도 된다.)

```js
function func1(): string{
    return "hello";
}

function func2(): void{
    console.log('hello');
    // no return
}

function func3(): undefined{
    // no return
}

let a: void;
a = 1; // 불가능
a = 'hello'; // 불가능
a = {}; // 불가능
a = null // tsconfig.js 옵션에 strictNullChecks 옵션을 끄면 예외적으로 가능하다.
a = undefined; // 가능
```

### :two: never 타입

> 반환하는 값이 존재하는게 불가능한 모순인 경우 사용한다.

* 특징
    - never -> 존재하지 않는
    - 불가능한 타입
    - 실행시 종료나 무한 루프와 같이 반환하는 값이 존재 하는게 모순인 경우 사용
    - never 타입인 경우 어떠한 값도 변수에 저장이 불가능 하다.

```js
function func4(): never { // 무한루프
    while (true){}
}

function func5(): never{ // 실행시 종료
    throw new Error();
}

let anyVar: any;
let b: never;

b = 1; // 불가능
b = 'hello'; // 불가능
b = {}; // 불가능
b = null; // 불가능
b = undefined; // 불가능
b = anyVar; 불가능
```
***

## 타입 계층도

### 타입 계층도
<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/ff8f55e7-eb1b-47d9-8d41-430f0b7f6ea0" alt="타입계층도" width="100%"></p>

### 업 캐스팅 & 다운 캐스팅
<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/8f18913d-c6cb-4269-9c26-7fbd1b31ed69" alt="업다운캐스팅" width="100%"></p>

* 업 캐스팅

    - 서브타입(자식타입)의 값을 (슈퍼타입)부모타입의 값으로 취급하는 것
    - 가능하다

* 다운 캐스팅

    - (슈퍼타입)부모타입의 값을 서브타입(자식타입)의 값으로 취급하는 것
    - 불가능하다

```js
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
```

### 객체 타입 간의 호환성

- 객체 타입은 프로퍼티를 기준으로 업/다운 캐스팅 관계를 가진다.
- 조건이 더 적은 객체가 슈퍼타입이 되고, 조건이 더 많은 객체가 서브타입이 된다.

    ```js
    type Animal = { // 슈퍼타입(부모타입)
        name: string;
        color: string;
    };

    type Dog = { // 서브타입(자식타입)
        name: string;
        color: string;
        breed: string; // 추가 프로퍼티
    };

    let aniaml: Animal = {
        name: "기린",
        color: "yellow",
    };

    let dog: Dog = {
        name: "뿌까",
        color: "tan",
        breed: "닥스훈트",
    };

    aniaml = dog; // 업캐스팅 가능

    // dog = aniaml; // 다운캐스팅 불가능
    ```

* **초과 프로퍼티 검사**
    - 객체 타입의 변수를 초기화 할때 객체 리터럴을 사용하면 추가 프로퍼티를 검사한다.
    - 객체 타입에 정의 된 프로퍼티만 넣어야 한다.

    ```js
    type Book = { // 슈퍼타입
        name: string;
        price: number;
    };

    type ProgrammingBook = { // 서브타입
        name: string;
        price: number;
        skill: string;
    };

    let book: Book;
    let programmingBook: ProgrammingBook = {
        name: "프론트개발",
        price: 30000,
        skill: "reactjs"
    }

    book = programmingBook;
    // programmingBook = book; 불가능

    let book2: Book = {
        name: "프론트개발",
        price: 30000,
        // skill: "reactjs" // 불가능 객체 타입에 정의 되지 않음
    }

    let book3: Book = programmingBook; // 초기화 시 객체 리터럴을 사용하지 않아 가능하다.

    function func(book: Book){}
    func(programmingBook); // 초기화 시 객체 리터럴을 사용하지 않아 가능하다.
    ```
***

## 대수 타입

> 여러가지 타입을 합성해서 새롭게 만들어낸 타입으로 합집합 타입과 교집합 타입이 존재한다.

### :one: 합집합 타입 - Union 타입

> 어느 한쪽 조건에 해당 하는 프로퍼티를 갖거나 모든 조건에 해당하는 프로퍼티를 갖는 객체

1. 변수에서 합집합 타입을 적용하면 조건에 맞는 변수 값을 할당할 수 있다.

    ```js
    let a: string | number | boolean;

    a = 1;
    a = "hello";
    a = true;
    ```

2. 배열에서의 합집합 타입은 요소에 다양한 타입을 넣을 수 있게 해준다.

    ```js
    let arr: (number | string | boolean)[] = [1, "hi", true];
    ```
    
3. 객체에서의 합집합 타입은 한쪽의 조건에 해당하거나 모든 조건을 갖고 있어야 한다.

    ```js
    type Dog = {
        name: string;
        color: string;
    };

    type Person = {
        name: string;
        language: string;
    };

    type Union1 = Dog | Person;

    let union1: Union1 = {
        name: "",
        color: "",
    }

    let union2: Union1 = {
        name: "",
        language: "",
    }

    let union3: Union1 = {
        name: "",
        color: "",
        language: "",
    }

    // 에러 발생 조건에 해당하지 않음
    let union4: Union1 = {
        name: "",
    }
    ```

### :two: 교집합 타입 - Intersection 타입

>조건에 해당하는 모든 프로퍼티를 갖고 있는 객체

1. 기본 타입에서의 교집합 타입은 never 타입을 나타낸다.

    ```js
    // 교집합의 값이 존재하지 않는다.
    let variable: number & string;
    ```

2. 객체 타입에서의 교집합 타입을 사용하면 해당 조건의 프로퍼티를 모두 갖고 있는 객체만 가능하다.
    ```js
    type Intersection = Dog & Person;

    let intersection1: Intersection = {
        name: "",
        color: "",
        language: "",
    }
    ```
***

## 타입 추론

> 타입 스크립트는 범용적으로 변수를 사용할 수 있도록 추론한다. (타입 넓히기)

1. 변수

    >타입스크립트가 변수 선언 시 타입을 추론하는 기준은 변수의 초기 값이다.

    ```js
    let a = 10; // number
    let b = "hi"; // string
    let c = {
        id: 1, // number
        name: "오건희",
        profile: {
            nickname: "lbsafe" // string
        }
    }
    let {id, name, profile} = c; // number string string
    let [one, two, three] = ["one", 2, true]; // string number boolean
    ```

2. 함수
    >함수의 반환값 타입도 추론한다. 이때 초기화 값이 아닌 return문 다음에 오는 반환값을 기준으로 한다.  
    함수의 매개변수도 기본값을 기준으로 추론한다.

    ```js
    function fuc(message = "hello"){ // string
        return "hello"; // string
    }
    ```

3. 암묵적인 any 타입

    * 변수를 선언하고 초기 값을 지정하지 않으면 암묵적인 any 타입으로 추론한다.
    * 명시적 any 타입과 암묵적 any 타입은 다르다. 명시적으로 any 타입으로 지정해주면 any 타입만 가능하다.
    * 암묵적인 any 타입일 경우 다음에 넣어주는 값에 따라 타입이 변하는걸 any 타입의 진화라고 한다.
    * :warning:암묵적인 any 타입은 혼란을 야기함으로 지양한다.

    ```js
    let d; // 암묵적 any 타입
    d = 1; // number 타입으로 any 타입의 진화
    d.toFixed();

    d = "hello"; // string 타입으로 any 타입의 진화
    d.toUpperCase();
    ```

4. const

    * let 이 아닌 const 로 변수 선언 시 타입에 맞는 추론이 아닌 리터럴 타입으로 지정된다.
    * const로 선언 시 변수는 상수이기에 변하지 않는다.

    ```js
    const num = 10; // number 리터럴 타입 10
    const str = "hello"; // string 리터럴 타입 "hello"
    ```

5. 배열의 여러 타입의 요소
    > 여러 타입의 요소를 저장하는 배열을 선언하면 각 요소에 맞는 유니온 타입을 갖는 배열 타입으로 추론된다.

    ```js
    let arr = [1, "hi"]; // (string | number)[]
    ```
***

## 타입 단언

>프로퍼티의 값을 나중에 초기화 해주는 등의 작업을 할 때 as 키워드를 사용하고 그 다음에 type을 명시하면 컴파일 시 해당 type 으로 간주한다.

### 타입 단언의 규칙

1. 형식 값 as 단언 (A as B)
2. A가 B의 슈퍼타입이거나
3. A가 B의 서브타입이어야 한다.

```js
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // A가 B의 슈퍼타입이나 서브타입이 아니기에 불가능
let num3 = 10 as unknown as string; // 다중 단언 시 가능하지만 최대한 피해야한다.


type Person = {
    name: string;
    age: number;
};

// 나중에 초기화
let person = {} as Person;
person.name = "오건희";
person.age = 27;

// 초과 프로퍼티 검사 시
type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "뿌까",
    color: "tan",
    breed: "인천",
} as Dog;
```

### const 단언
> const 단언은 변수 선언 시 const로 선언한 것 처럼 동일한 효과를 보이게 해준다.  
as const 를 붙여서 초기화 한 객체는 readonly가 붙으면서 프로퍼티의 값을 수정할 수 없게 된다.

```js
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow"
} as const;

/*
let cat: {
    readonly name: "야옹이";
    readonly color: "yellow";
}
*/

// cat.name = "냥이"; // 수정 불가능
```
### Non Null 단언

>어떤 값이 null이거나 undefined가 아니라고 타입스크립트 컴파일러에게 알려주는 역할을 한다.

```js
type Post = {
    title: string;
    author?: string; // 있을 수도 없을 수도 있는 프로퍼티
};

let post: Post = {
    title: "게시글1",
    author: "오건희"
}

// 기존 const len: number = post.author?.length; ?를 !로 수정한다.
const len: number = post.author!.length;
```
***

## 타입 좁히기

> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

### 타입 가드

> typeof 등 연산자를 활용해 조건문과 함께 타입을 좁히는 표현  
여러가지 타입 가드가 존재한다.

**대표적인 타입 가드**
1. typeof
    * typeof 연산자는 피연산자의 자료형을 나타내는 문자열을 반환한다.
2. instanceof
    * instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별한다.
3. in
    * in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환한다.
    * in 연산자 뒤에는 null이나 undefined가 오면 안되기에 && 연산자를 활용한다.

```js
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
    }else if(typeof value === 'string'){
        console.log(value.toUpperCase());
    }else if(value instanceof Date){ // value가 Date 객체인지 물어본다.
        console.log(value.getTime());
    }else if(value && 'age' in value){ // value가 있을 때 age 프로퍼티가 value 값에 있는지 물어본다.
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
    
    // 조건을 Date와 null 둘 다 통과해서 에러가 발생한다. instanceof를 사용한다.
    // else if(typeof value === 'object'){ 
    //     console.log(value.getTime()); 
    // }
};
```
***