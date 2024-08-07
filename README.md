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

**:warning: 주의 사항1 - tsc/tsx 에러 발생 시**

>**Restricted** : (기본) 실행 정책으로 명령어를 하나씩 실행 가능하며 스크립트 파일을 로드하여 실행할 수 없음  
**RemoteSigned** : 로컬에서 본인이 생성한 스크립트만 실행 가능하며, 인터넷에서 다운로드한 스크립트는 신뢰된 배포자에 의해 서명된 것만 실행 가능

**해결방법**

* VSCODE를 관리자 권환으로 실행 후 터미널에 입력

    ```js
    Set-ExecutionPolicy RemoteSigned
    ```

<p align="center"><img src="https://github.com/lbsafe/TypeScript/assets/65703793/a2c9d39a-14c2-413c-a7e6-a6cb1b15f68b" alt="tsc error" width="100%"></p>

**:warning: 주의 사항2 - undici-types 에러 발생 시**

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

9. allowJs

    > Javascript 파일 허용
    
    * TypeScript 파일이 아닌 Javascript 파일도 허용한다.
    * ```"allowJs": true```
    
    ```js    
    {
        "compilerOptions": {
            "target": "ESNext",
            "module": "ESNext",
            "outDir": "dist",
            "strict": true,
            "moduleDetection": "force",
            "strictNullChecks": false,
            "allowJs": true,
            "skipLibCheck": true
        },
        "include": ["src"]
    }
    ```

9. esModuleInterop

    > 폴트로 내보낸 값이 없는 모듈에서도 값을 불러 오게 허용해주는 옵션

    * node.js 프로그램에 react-dom 이나 react 같은 외부 라이브러리, 외부 패키지를 설치하고 불러올 때,  
    디폴트로 내보낸 값이 없을 수 있기 때문에 보통은 해당 옵션을 켜둔다.
    * ```"esModuleInterop": true```

    ```js
    {
        "compilerOptions": {
            "target": "ES5",
            "module": "CommonJS",
            "strict": true,
            "allowJs": true,
            "esModuleInterop": true,
        },
        "include": ["src"]
    }
    ```

10. jsx

    > 타입스크립트 컴파일러가 JSX 문법을 해석하게 해주는 옵션

    * react의 jsx 문법을 TypeScript 컴파일러가 해석할 수 있게 해준다.
    * ```"jsx": "react-jsx"```

    ```js
    {
        "compilerOptions": {
            "target": "ES5",
            "module": "CommonJS",
            "strict": true,
            "allowJs": true,
            "esModuleInterop": true,
            "jsx": "react-jsx"
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

## 서로소 유니온 타입

> 교집합이 없는 타입들로만 만든 유니온 타입

* 타입 좁히기를 할때 더 직관적으로 객체 타입을 정의하는 방법
* 리터럴 타입을 응용하기 때문에 각각의 객체들이 서로소 집합의 관계를 가져서 서로 교집합이 없다.
* 동시에 여러가지 상태를 표현해야 하는 객체 타입을 정의 할 때 선택적 프로퍼티를 사용하는 것 보다 상태에 따라 타입들을 나누어 state나 tag 등의 리터럴타입 프로퍼티를 추가해서 서로소 유니온 타입을 만들어주는 것이 효율 적이다.
* 서로소 유니온 타입을 switch 문을 이용하여 코드가 더 직관적이게 만들어 준다.

    ```js
    type Admin = {
        tag: "ADMIN";
        name: string;
        kickCount: number;
    };

    type Member = {
        tag: "MEMBER";
        name: string;
        point: number;
    };

    type Guest = {
        tag: "GUEST";
        name: string;
        visitCount: number;
    }

    // User = 서로소 관계의 객체 타입들을 유니온 타입으로 묶은 서로소 유니온 타입
    type User = Admin | Member | Guest;

    function login(user:User){
        switch(user.tag){
            case 'ADMIN':{
                console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
                break;
            }
            case 'MEMBER':{
                console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
                break;
            }
            case "GUEST":{
                console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
                break;
            }
        }
    }
    ```

* 예시) 비동기 작업의 결과를 처리하는 객체

    ```js
    type LoadingTask = {
        state: "LOADING",
    }

    type FailedTask = {
        state: "FAILED",
        error: {
            message : "오류 발생 원인",
        },
    }

    type SuccessTask = {
        state: "SUCCESS",
        response: {
            data: "데이터",
        },
    }

    type AsyncTask = LoadingTask | FailedTask | SuccessTask;

    function processResult(task:AsyncTask){
        switch(task.state){
            case "LOADING":{
                console.log("로딩 중");
                break;
            }
            case "FAILED":{
                console.log(`에러 발생 : ${task.error.message}`);
                break;
            }
            case "SUCCESS":{
                console.log(`성공 : ${task.response.data}`);
                break;
            }
        }
    }
    ```
***

## 함수 타입 정의

> 타입스크립트에서의 함수 타입이란?  
어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지를 뜻한다.

```js
// 생략 가능 매개변수도 기본값을 기준으로 추론하기에
// func():number 반환값에 타입은 생략 가능하다.
function func(a:number, b:number): number{
    return a + b;
}
```
* **화살표 함수의 타입을 정의하는 방법**
    ```js
    const add = (a:number, b:number) => a + b;
    ```

* **함수의 매개변수**

    * 필수 매개변수 (name = '오건희')
    * 선택적 매개변수 (tall?:number)
    * 선택적 매개변수는 값이 존재하지 않을 수 있기에 필수 매개변수 앞에 올 수 없다.

    ```js
    // tall(parameter) tall: number | undefined
    function introduce(name = '오건희', age:number, tall?:number){
        console.log(`name : ${name}`);
        if(typeof tall === 'number'){
            console.log(`tall : ${tall + 10}`);
        }
    }
    introduce("오건희", 27, 180);
    introduce("오건희", 27);
    ```

* rest 파라미터

    ```js
    // 매개변수의 갯수에 제한을 두고 싶다면 튜플 타입으로 지정해도 가능하다
    // ex) [number, number, number]
    function getSum(...rest: number[]){
        let sum = 0;
        rest.forEach((it) => (sum += it));

        return sum;
    }

    getSum(1, 2, 3); // 6
    getSum(1, 2, 3, 4, 5); // 15
    ```
***

## 함수 타입 표현식

> 타입별칭을 이용해 함수의 타입을 별도로 정의하는 방법  
매개 변수의 갯수와 타입을 맞춰줘야 한다.

```js
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
// const add: (a: number, b: number) => number = (a, b) => a + b; 와 동일
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
```

* **호출 시그니처 (콜 시그니처) 방식**

```js
type Operation2 = {
    (a:number, b:number):number;
    name: string; // 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name;
```
***

## 함수 타입 호환성

> 특정 함수 타입을 다른 함수 타입으로 취금해도 괜찮은가를 판단한다.

**타입의 호환 조건**
1. 반환값의 타입이 호환 되는가
2. 매개변수의 타입이 호환 되는가

**:one: 기준1. 반환 값이 호환 되는가 (반환값)**
```js
type A = ()=> number;
type B = ()=> 10;

let a:A = ()=> 10;
let b:B = ()=> 10;

a = b; // 업 캐스팅으로 호환 가능하다.
b = a; // number 타입을 number 리터럴 타입으로 다운 캐스팅 했기 때문에 호환이 불가능하다.
```

**:two: 기준2. 매개변수가 호환 되는가 (매개변수)**

* 매개변수 기준으로 호환성을 판단하면 업 캐스팅은 호환 불가능하고 다운 캐스팅일 때만 허용된다.
* 함수타입 A와 B를 매개 변수를 기준으로 호환성을 판단한다.
* A(부모타입) B(서브타입) 일 경우 A가 B의 조건을 갖고 있지 않기 때문에 업캐스팅일 때 호환이 불가능
* 반대로 B는 A의 서브타입으로 A의 조건을 갖고 있어서 다운캐스팅일 때 호환 가능하다.


**2-1. 매개변수의 개수가 같을 때**
```js
type A = (value:number)=> void;
type B = (value:10)=> void;

let a:A = (value)=> {};
let b:B = (value)=> {};

A = B; // 업 캐스팅 호환 불가능
B = A; // 다운 캐스팅 호환 가능
```

**:heavy_check_mark: 매개변수의 호환 예시**
```js
type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal)=> {
    console.log(animal)
};
let dogFunc = (dog: Dog)=> {
    console.log(dog.name);
    console.log(dog.color);
};

animalFunc = dogFunc; // 업 캐스팅 호환 불가능 color 프로퍼티가 없다.
dogFunc = animalFunc; // 다운 캐스팅 호환 가능

let testFunc = (animal: Animal)=>{
    console.log(animal.name);
    // console.log(animal.color); // 애니멀 타입에는 color 프로퍼티가 없어서 불가능하다.
}

let testFunc2 = (dog: Dog)=>{
    console.log(dog.name);
}
```

**2-2. 매개변수의 개수가 다를 때**

* 할당하려는 함수 쪽의 매개변수의 갯수가 더 적을 때만 호환이 가능하다.
* 기본적으로 매개변수의 타입이 같아야만 호환이 가능하다.

```js
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1의 매개변수의 개수가 더 많다. (2개 = 1개)
func2 = func1; // func2의 매개변수의 개수가 더 적다. (1게 = 2개) 호환 불가능
```
***

## 함수 오버로딩

> 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법  
(Javascript에서는 지원이 안되고 Typescript에서만 지원된다.)

**오버로딩 예시**
* 하나의 함수 func
* 모든 매개변수의 타입 number
* Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
* Ver2. 매개변수 3개 -> 이 매개변수들을 다 더한 값 출력

**:one: 어떤 버전들이 있는지 알려준다. -> 오버로드 시그니쳐**

```js
function func(a: number): void;
function func(a: number, b: number, c: number): void;
```

**:two: 실제 구현부 -> 구현 시그니쳐**

```js
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 선택적 프로퍼티로 매개변수를 정의
function func(a: number, b?: number, c?: number) {
    // b와 c가 존재할 때
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a + b + c);
    }else{
        console.log(a * 20);
    }
}

func(1);
func(1, 2, 3);
```
***

## 사용자 정의 타입 가드

> 이미 만들어진 타입이던가 라이브러리가 제공하는 타입일 경우 서로소 유니온 타입을  
만들기 위한 리터럴 프로퍼티를 직접 만들지 못할 때 유용하다.

**:one: 사용자 정의 타입 가드 만들기**
```js
type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 함수에 반환값 타입으로 이 함수가 true를 리턴한다면 타입을 지정한다.
// A is B
function isDog(animal: Animal): animal is Dog{
    // 타입 단언을 통해 Dog 타입으로 (타입 좁히기)간주하고 isBark가 있을때 true를 리턴
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}
```

**:two: 사용자 정의 타입 가드 활용**
```js
// Before
function warning(animal: Animal){
    if("isBark" in animal){
        // 강아지
    }else if("isScratch" in animal){
        // 고양이
    }
}

// After
function warning2(animal: Animal){
    if(isDog(animal)){
        // 강아지
        animal;
    }else if(isCat(animal)){
        // 고양이
        animal;
    }
}
```
***

## 인터페이스

> 타입에 이름을 지어주는 또 다른 문법  
객체의 구조를 정의하는데 특화된 문법(상속, 합침 등 특수한 기능 제공)

**인터페이스의 특징** 
* 인터페이스는 선택적 프로퍼티(?), 읽기전용(readonly), 메서드 타입의 정의 등 타입별칭과 동일한 기능을 제공한다.
* 메서드의 타입을 정의할 때 호출 시그니처를 이용할 경우 메서드의 이름이 소괄호 앞에 붙는다.
* 함수 오버로딩을 구현할 때는 함수 타입 표현식이 아닌 호출 시그니처를 이용한다.

**타입 별칭과의 차이점**

* 인터페이스는 객체 타입을 정의하는데 특화되어 있어서, 타입 별칭과 다르게 유니온과 인터섹션 타입은 만들 수 없다.
* 유니온과 인터섹션 타입을 인터페이스에 활용이 필요한 경우, 따로 타입 별칭에 활용하거나 type 주석을 이용한다.

```js
interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a:number, b:number): void;
}

const person: Person | number = { // 인터페이스의 유니온 타입 활용 (타입 주석)
    name: '오건희',
    sayHi: function(){
        console.log('hi')
    },
}

person.sayHi();
person.sayHi(1, 2);
```

### 인터페이스의 확장

* B extends A
* A의 모든 프로퍼티를 갖고 있는 상태에서 B의 프로퍼티를 추가(상속)하는 방법
* 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다.
* 다시 정의할 타입은 원본 타입의 서브 타입이어야만 한다. (number 타입 -> number 리터럴 타입)
* 인터페이스가 아닌 타입 별칭이여도 객체 타입이라면 확장이 가능하다.
* 인터페이스는 여러가지 인터페이스를 또 확장하는 다중 확장도 가능하다. (다중 확장)

```js
interface Animal{
    name: string;
    age: number;
}

interface Dog extends Animal{
    isBark: boolean;
}

const dog: Dog ={
    name: "",
    age: 1,
    isBark: true
}

interface Cat extends Animal{
    isScratch: boolean;
}

interface Chicken extends Animal{
    isFly: boolean;
}

// 타입 별칭의 확장
type Animal2 = {
    name: string;
    color: string;
}

interface Dog2 extends Animal2{
    isBark: boolean;
}

const dog2: Dog2 ={
    name: "",
    color: "",
    isBark: true
}

// 다중 확장
interface DogCat extends Dog, Cat{}

const dogcat: DogCat ={
    name: "",
    age: 1,
    isBark: true,
    isScratch: true,
}
```

### 인터페이스 선언 합치기
 
* 기존 타입 별칭에서 동일한 이름으로 정의가 불가능 했다면, 인터페이스는 가능하다.
* 동일한 이름의 인터페이스는 합쳐지기 때문이다.
* 동일한 프로퍼티를 중복으로 정의할 경우, 타입을 다르게 정의하는 것 불가능하다.
* 확장과는 다르게 합침은 프로퍼티를 기존 타입의 서브타입으로 선언해도 불가능 하다.

```js
interface Person {
    name: string;
}

interface Person {
    // name: number; 다른 타입으로 정의했기에 합치기가 불가능해진다.
    age: number;
}

interface Developer extends Person{ // 확장은 기존의 프로퍼티를 서브타입으로 선언 가능
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27
}
```

**활용 예시) 모듈 보강**

> 기존의 인터페이스에서 없는 프로퍼티를 사용할 경우 인터페이스 합침을 활용한다.

```js
interface Lib{
    a: number,
    b: number
}

interface Lib{ // 인터페이스 합치기로 c 프로퍼티를 추가한다.
    c: string
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hi" // 후에 추가해야 할 프로퍼티가 생긴 상황
}
```
***

## JavaScript 클래스란?

> 객체를 만들어 내는 툴이다.

* Before

    ```js
    let studentA = {
        name: "오건희",
        grade: "A+",
        age: 27,
        study(){
            console.log("열심히 공부중");
        },
        introduce(){
            console.log("안녕하세요!");
        }
    }
    ```
* After
    - **필드**

        > 클래스가 만들어 낼 객체가 갖게 될 프로퍼티

    - **생성자**

        >실제로 객체를 생성하는 역할을 하는 함수(메서드)  
        필드를 매개변수로 사용해서 실제로 만들 객체(this)의 프로퍼티로 설정해 준다.

    - **인스턴스**

        >클래스를 이용해서 만든 객체

    ```js
    class Student {
        // 필드
        name;
        grade;
        age;

        // 생성자
        constructor(name, grade, age){
            this.name = name;
            this.grade = grade;
            this.age = age;
        }

        // 메서드
        study(){
            console.log("밥 먹는 중");
        }

        // 메서드 안에서 생성자 활용
        introduce(){
            console.log(`안녕하세요! ${this.name}입니다.`);
        }
    }

    // 스튜던트 인스턴스
    let studentB = new Student('오뿌까', 'A', 10);
    console.log(studentB);
    studentB.study();
    studentB.introduce();
    ```

### 클래스의 확장(상속)

* 클래스도 TypeScript의 인터페이스 처럼 확장(상속)이 가능하다.
* class A extends B
* 클래스의 확장 시 생성자의 매개변수는 확장 받을 클래스의 매개변수를 추가해준다.
* ```super()``` 함수를 호출해서 생성자의 매개변수를 인수로 전달한다.

```js
class StudentDeveloper extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    // Student 매개변수 name, grade, age 추가
    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age); // super 함수 사용
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programing(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper('오건희', 'A+', 27, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programing();
```
***

## TypeScript의 클래스

> TypeScript의 클래스는 JavaScript의 클래스로 취급과 동시에 **type** 으로도 취급된다.

```js
//  클래스를 만들기 전 객체로 먼저 표현하면 헷갈리지 않는다.

// 클래스로 만들 객체 모양
const employee = {
    name: '오건희',
    age: 27,
    position: 'developer',
    work() {
        console.log("일함");
    }
};

class Employee{
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

const employeeB = new Employee('오건희', 27, '개발자');
console.log(employeeB);

// 클래스를 타입으로 취급하여 사용
const employeeC: Employee = {
    name : "",
    age : 0,
    position : "",
    work() {},
}
```
### TypeScript의 클래스 확장(상속)

```js
class ExecutiveOfiicer extends Employee{
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
```

### 접근 제어자 (access modifier)
> 클래스를 만들때 특정 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법  
(pubic, private, proteced)


* **public** - 접근에 제한이 없는 상태 (기본 값)
* **private** - 클래스 외부에서는 프로퍼티에 접근 및 읽기 불가능 클래스 내부에서만 접근 가능하다.
* **proteced** - 클래스 외부에서는 접근이 불가능하지만 파생(확장) 클래스에서는 접근이 가능하다.

```js
class Employee{
    // 필드
    private name: string;
    protected age: number;
    position: string; // public

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfiicer extends Employee{
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    fun(){
        //this.name; // private로 설정 시 확장 클래스에서도 접근이 불가능 하다.
        this.age; // proteced로 설정 시 확장 클래스에서는 접근이 가능 하다.
    }
}

const employee = new Employee('오건희', 27, '개발자');
// employee.name = '오거니'; // 외부 접근 불가능
// employee.age = 26; // 외부 접근 불가능   
employee.position = '퍼블리셔';
```

### :exclamation:생성자에 접근 제어자 설정
> 생성자에 접근 제어자 를 설정하면 필드가 자동으로 필드를 정의하고 필드의 값 초기화도 해준다.

```js
class Employee2{
    // 필드 생략

    // 생성자 - 접근제어자 설정 자동 필드정의 및 필드값 초기화
    constructor(private name: string, protected age: number, public position: string) {}

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

const employee2 = new Employee('오건희', 27, '개발자');
employee2.position = '퍼블리셔';

console.log(employee2);
```

### 인터페이스와 클래스

* 인터페이스는 무조건 public 필드만 정의가 가능하다.
* private 필드가 필요할 경우 따로 정의 해줘야한다.

```js
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// 캐릭터 클래스는 캐릭터인터페이스를 구현한다.
class Character implements CharacterInterface{    

    constructor(public name: string, public moveSpeed: number, private extra: string){}

    move(): void{
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
```
***

## 타입 조작하기

> 기본 타입이나 별칭 또는 인터페이스로 만든 원래 존재하던 여러가지 타입들을 타입스크립트의 특수한 문법을  
이용해서 상황에 따라 각각 다른 타입으로 변환하는 기능

1. [제네릭][link1]

[link1]: https://github.com/lbsafe/TypeScript#%EC%A0%9C%EB%84%A4%EB%A6%AD "제네릭"

2. [인덱스드 엑세스 타입][link2]

[link2]: https://github.com/lbsafe/TypeScript#%EC%9D%B8%EB%8D%B1%EC%8A%A4%EB%93%9C-%EC%97%91%EC%84%B8%EC%8A%A4-%ED%83%80%EC%9E%85-indexed-access-type "인덱스드 엑세스 타입"

3. [keyof 연산자][link3]

[link3]: https://github.com/lbsafe/TypeScript#keyof-%EC%97%B0%EC%82%B0%EC%9E%90 "keyof 연산자"

4. [Mapped(맵드) 타입][link4]

[link4]: https://github.com/lbsafe/TypeScript#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85-mapped-type "Mapped(맵드) 타입"

5. [템플릿 리터럴 타입][link5]

[link5]: https://github.com/lbsafe/TypeScript#%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%A6%AC%ED%84%B0%EB%9F%B4-%ED%83%80%EC%9E%85 "템플릿 리터럴 타입"

6. [조건부 타입][link6]

[link6]: https://github.com/lbsafe/TypeScript#%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85 "조건부 타입"

***

## 제네릭
>함수의 인수에 따라서 반환 값의 타입을 가변적으로 정의해준다.  
-> 모든 타입에 두루두루 쓸 수 있는 범용적인 함수

### 제네릭 함수
* ```<T>``` = 타입 변수
* 타입 변수는 함수를 호출할 때 인수의 타입에 따라 타입 변수에 저장되는 타입이 변한다.
* 타입변수```<T>``` 선언 후 매개 변수의 타입을 T로, 반환값의 타입을 T로 바꿔준다.
* 명시적으로 타입을 직접 정의하는 것도 가능하다.

```js
function func<T>(value: T): T{
    return value;
}

let num = func(10); // let num: number

let bool = func(true); // let bool: boolean

let str = func("string"); // let str: string

// 명시적 타입 직접 정의. (튜플)
let arr = func<[number, number, number]>([1, 2, 3]);
```

### 타입 변수 응용하기

* 첫번째 사례

    >매개변수 A, B의 타입이 다를 경우  
    -> 새로운 타입 변수를 생성해서 해결한다.

    ```js
    function swap<T, U>(a: T, b: U){
        return [b, a];
    }

    const [a, b] = swap("1", 2);
    ```

* 두번째 사례

    > 어떤 타입의 배열이든 다 받을 수 있고, 배열의 첫 번째 요소를 반환하고 그 타입을 추론하는 사례

    ```js
    /*
    // 튜플타입의 지정이 필요 없을 경우
    // -> 타입 변수를 배열타입과 함께 쓴다.
    // -> 배열에 여러 타입이 존재할 경우 유니온 타입으로 추론된다.
    function returnFirstValue<T>(data:  T[]){
        return data[0];
    }
    */

    // 유니온 타입이 아닌 정확한 타입을 추론하고 싶다면 튜플타입으로 사용해준다.
    function returnFirstValue<T>(data: [T, ...unknown[]]){ // 튜플
        return data[0];
    }

    let num = returnFirstValue([0, 1, 2]);
    // 0

    let str = returnFirstValue([1, "hello", "hi"]);
    // hello
    ```


* 세번째 사례

    > 타입 제한하기  
    -> length가 number인 프로퍼티를 가지고 있는 객체를 확장(extends)하면서 T를 제한한다.

    ```js
    function getLenth<T extends {length : number}>(data : T){
        return data.length;
    }

    let var1 = getLenth([1, 2, 3]); // 3

    let var2 = getLenth("12345"); // 5

    let var3 = getLenth({length:10}); // 10

    // length 프로퍼티가 없는 값은 제한된다. error!
    // let var4 = getLenth(10);
    ```

### 타입 변수 응용 - map

* map 메서드의 결과 값 타입이 반드시 전달 받은 인수의 타입과 같지 않을 수 있다.
* 새로운 타입 변수(U)를 생성해서 이를 해결 해준다.

```js
const arr = [1, 2, 3];
const newArr = arr.map((it) => it*2);
// [2, 4, 6]

// arr: string    // item: string   // 반환 값 U: number
function map<T, U>(arr: T[], callback: (item: T)=> U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it));
```

### 타입 변수 응용 - forEach

```js
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T)=> void){
    for(let i = 0; i<arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it)=>{
    console.log(it.toFixed());
})

forEach(['123','456'], (it)=>{
    it;
});
```

### 제네릭 인터페이스 & 제네릭 타입 별칭

**:one: 제네릭 인터페이스**

> 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때 반드시 타입 변수에 타입을 직접 할당해야한다.

```js
interface KeyPair<K, V>{
    key: K,
    value: V
};

// 타입 변수에 할당할 타입을 지정한다.
let keyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value : ['hi', 'hello'],
};
```

**:two: 제네릭의 인덱스 시그니처 활용**

> 제네릭 인터페이스와 인덱스 시그니처를 함께 사용하면 value의 타입을 유연하게 정의가 가능하다.

```js
// 기존 인덱스 시그니처
interface NumberMap {
    [key: string] : number;
};

let numberMap1: NumberMap = {
    key: -123,
    key2: 123,
    
};

// 제네릭 인터페이스 인덱스 시그니처
interface Map<V> {
    [key: string]: V;
};

let stringMap: Map<string> = {
    key: 'value'
};

let booleanMap: Map<boolean>= {
    key: true
};
```

**:three: 제네릭 타입 별칭**

```js
type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: "hello"
}
```

**:four: 제네릭 인터페이스 활용 예시**

> 객체 타입으로 조합 된 복잡한 객체 타입을 제네릭 인터페이스를 사용하여 더 깔끔하게 분리가 가능하다.

**예시)**
- 유저 관리 프로그램  
- 유저 구분: 학생 / 개발자

```js
interface Student{
    type: "student";
    school: string;
}

interface Developer{
    type: "developer";
    skill: string;
}

// Before 기존의 서로소 유니온을 통한 타입 좁히기
interface User{
    name: string;
    profile: Student | Developer;
}

function goToSchool(user: User){
    if(user.profile.type !== 'student'){
        console.log('잘 못 오셨습니다.');
        return;
    }

    const school = user.profile.school
    console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
    name: '오건희',
    profile: {
        type: 'developer',
        skill: 'TypeScript'
    }
};

const studentUser: User = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '땡땡학교'
    }
};


// After 제네릭 인터페이스로 코드 간소화
interface User<T>{
    name: string;
    profile: T;
}

// 서로소 유니온 타입을 통한 타입 좁히기는 필요 없어진다.
function goToSchool(user: User<Student>){
    const school = user.profile.school
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); student 타입이 아니기에 error 발생!

const developerUser: User<Developer> = {
    name: '오건희',
    profile: {
        type: 'developer',
        skill: 'TypeScript'
    }
};

const studentUser: User<Student> = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '땅땅학교'
    }
};
```
### 제네릭 클래스

> 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와 다르게 클래스의 생성자를 호출할때,  
생성자의 인수로 전달 되는 값을 기준으로 티입이 추론 된다.

```js
class List<T> {
    constructor(private list: T[]){}

    push(data: T){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("3");
```

### 프로미스와 제네릭

* 자바스크립트의 내장 클래스인 프로미스는 타입스크립트에서 제네릭 클래스로 타입이 선언되어 있다.
* 프로미스 생성자를 호출할 때 타입 변수를 할당해주면, 비동기 처리 결과 값의 타입을 직접 명시할 수 있다.
* 프로미스는 resolve나 reject를 호출해서 전달하는 비동기 작업의 결과값을 자동으로 추론하지 않는다.
    - 타입 변수 정의를 하지 않으면 비동기 작업 처리의 결과값이 unknown 타입으로 추론된다.
* 프로미스는 resolve의 타입은 정의가 가능하지만 reject 즉 실패의 타입은 정의가 불가능 하다. (reject: any)
    - 타입 좁히기를 통해 프로젝트의 상황에 맞게 형태를 좁혀서 사용한다.

```js
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20);
        reject("실패 이유"); // any type
    }, 3000);
});

// 성공
// response: number
promise.then((response)=>{
    console.log(response * 10); // 20
});

// 실패
// err: any
// 프로미스의 catch 메서드를 사용하면 매개변수의 타입을 정확히 알 수 없다.
// err 매개변수를 사용할 때에는 타입 좁히기를 통해 프로젝트의 상황에 맞게 형태를 좁혀서 사용한다.
promise.catch((err)=>{
    if(typeof err === "string"){
        console.log(err);
    }
});
```

**활용 예시**
* 프로미스를 반환하는 함수의 타입을 정의
* ex) 서버로부터 하나의 게시글 데이터를 불러오는 함수

```js
interface Post{
    id: number;
    title: string;
    content: string;
}

// 프로미스가 클래스이기 때문에 타입으로도 활용할 수 있다.
function fetchPost(): Promise<Post>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠"
            })
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    console.log(post.id); // post.id: number
    console.log(post.title); // post.title: string
    console.log(post.content); // post.content: string
})
```
***

## 인덱스드 엑세스 타입 (indexed access type)

> index를 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입  
복잡하고 큰 타입에서 필요한 타입만 추출이 가능하게 해줘서 유용하다.

* index에 들어가는 문자열은 값이 아니라 타입이다.
* 객체, 배열, 튜플에 모두 사용이 가능하다.
* 스트링 리터럴 타입["author"]을 인덱스라고 부른다.
    - 인덱스에 들어가는 문자열은 값이 아니라 타입이다.
* 중첩으로 대괄호를 사용하여 가져온 객체타입으로부터 특정 프로퍼티를 또 가져올 수 있다.
    - function printAutorInfo (author: Post["author"]["id"])

**:one: 객체**

```js
interface Post{
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

// Before
function printAutorInfo (author: {id: number; name: string; age: number;}){
    console.log(`${author.name}-${author.id}`);
}

// After
function printAutorInfo (author: Post["author"]){
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "오건희",
        age: 27,
    },
};

printAutorInfo(post.author);
```

**:two: 배열**

* 인덱스에 어떤 숫자를 넣던 간에 앞에가 배열 타입이면 그냥 배열의 요소 타입을 추출한다.  
* 인덱스는 [number] or [0], [1], [2] 등 어떤 숫자든 가능

```js
type PostList{
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printListInfo (author: PostList[number]["author"]){
    console.log(`${author.name}-${author.id}`);
}

const post2: PostList[0] = {
    title: "게시글 제목",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "오건희",
        age: 27,
    },
};

printAutorInfo(post.author);
```

**:three: 튜플**

* 튜플 타입은 각각의 타입을 뽑아올 수 있다.
* 길이가 고정된 배열이기에 존재하지 않는 인덱스의 타입은 추출할 수 없다.
* 튜플 인덱스에 number를 넣어주면 튜플 타입 안에 최적의 공통 타입(유니온 타입)을 가져온다.

```js
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number]; // number | string | boolean 유니온 타입

// type Tup3 = Tup[3]; // 존재하지 않는 인덱스로 error!
```
***

## keyof 연산자

> 특정 객체 타입으로부터 프로퍼티 키들을 스트링 유니온 타입으로 추출한다.

* 어떤 객체의 프로퍼티의 갯수가 많거나, 프로퍼티의 이름이 수정되거나 추가되어도 문제 없이 유니온 타입으로 키를 추출할 수 있다.
* keyof 연산자 뒤에는 반드시 타입이 와야 한다.

```js
interface Person{
    name: string;
    age: number;
}

// 모든 문자열 값이 person 객체의 key라고 볼수 없기에 string 타입은 return에서 에러가 발생한다.
// -> name2라는 값을 전달하면 person 객체에는 name2라는 프로퍼티가 없기에 문제가 된다.

// Before
// 유니온 타입으로 설정하면 비효율적으로 작업하게 된다.
function getPropertyKey_Before(person: Person, key: "name" | "age"){
    return person[key]
}

// After
// Person 객체 타입으로부터 모든 프로퍼티의 키를 유니온 타입으로 추출한다.
// keyof Person = "name" | "age"
function getPropertyKey(person: Person, key: keyof Person){
    return person[key]
}

const person: Person = {
    name: "오건희",
    age: 27
}

getPropertyKey(person, "name"); // 오건희
```

### keyof typeof 같이 쓰기

> type을 정의할때 typeof 연산자를 사용하면 어떤 변수의 type을 추론해서 타입 별칭에 정의 해준다.

```js
type Person2 = typeof person2; // person2 = 변수
/*
    변수의 타입을 추론해서 정의

    type Person2 = {
        name: string;
        age: number;
    }
*/

// keyof 연산자 우측에 객체 타입을 바로 쓰지 않더라도 "keyof typeof 변수" 형태로도 사용 가능하다.
function getPropertyKey2(person2: Person2, key: keyof typeof person2){
    /*
        type Person2 = {
            name: string;
            age: number;
        }

        => typeof로 타입 추론 후 keyof로 유니온 타입으로 바꿔준다.

        key: keyof typeof person2 => key: "name" | "age"
    */


    return person2[key]
}

const person2 = {
    name: "오건희",
    age: 27
}

getPropertyKey2(person2, "name"); // 오건희
```
***

## 맵드 타입 (Mapped Type)

> 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
* 맵드 타입은 인터페이스로는 만들 수 없다. 타입 별칭으로만 가능하다.
* ?를 붙여 줌으로써 선택적 프로퍼티로도 활용이 가능하다.

```js
interface User{
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
// [key in 스트링 리터럴 유니온 타입]?: value(인덱스드 엑세스 타입);

/*
    {
        id : user["id"] -> number
        name : user["name"] -> string
        age : user["age"] -> number
    }
*/
            /* key */              /* value */
    [key in "id" | "name" | "age"]?: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():User{
    // ... 기능
    return{
        id: 1,
        name: "오건희",
        age: 27,
    }
}

function updateUser(user: PartialUser){
    // ... 수정하는 기능
}

updateUser({
    // id: 1,
    // name: "오건희",
    age: 26,
});
```

**맵드 타입의 활용 예시**
```js
// keyof 연산자를 응용한 모든 프로퍼티 boolean 타입으로 변환
type BooleanUser = {
    [key in keyof User]: boolean;
}

// 모든 프로퍼티 readonly 속성으로 변환하기
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}
```
***

## 템플릿 리터럴 타입
* 스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능
* 문자열로 여러가지의 상황들을 표현해 되는 경우 사용한다.

```js
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal : ColoredAnimal = "black-cat";
```
***

## 조건부 타입

> extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의한다.

```js
type A = number extends string ? string : number; // string

type ObjA = {
    a : number;
};

type ObjB = {
    a : number;
    b : number;
};

type B = ObjB extends ObjA ? number : string; // number
```

### 제네릭과 조건부 타입

```js
type StringNumberSwitch<T> = T extends number? string : number;

let varA : StringNumberSwitch<number> // varA: string
let varB : StringNumberSwitch<string> // varB: number
```

### 제네릭과 조건부 타입과 함수 오버로딩

```js
// 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
// 오버토드 시그니처의 타입을 따라가기에 타입 정의는 필요하지 않다.
// (매개변수만 any 타입으로 정의한다.)
function removeSpaces(text: any){
// replaceAll(A, B) 첫번째 인수에 해당하는 문자를 모두 찾아내 두번째 인자로 바꿔주는 메서드
    if(typeof text === "string"){
        return text.replaceAll(" ", ""); // 공백 제거
    }else{
        return undefined;
    }
}

let result = removeSpaces("hi im KeonHee");
result.toUpperCase();

let result2 = removeSpaces(undefined);
```

### 분산적인 조건부 타입

> 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법

```js
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // c: string | number;
// 타입 변수에 유니온 타입을 할당하게 되면 number와 string 두개가 분리되어서 전달 된다.
// StringNumberSwitch<number> |  => string
// StringNumberSwitch<string>    => number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계 분리 및 유니온으로 묶임
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계 각각의 결과 계산
// number |
// string |
// number

// 결과 - 중복 제외
// number | string
```

**:one: 실용적인 예제 1**

* 유니온에서 특정 타입만 제거하는 타입

    ```js
    type Exclude<T, U> = T extends U ? never : T;

    type A = Exclude<number | string | boolean, string>;
    // 1단계
    // Exclude<number, string> |
    // Exclude<string, string> |
    // Exclude<boolean, string>

    // 2단계
    // number |
    // never |
    // boolean

    // 결과
    // number | never | boolean 유니온 타입에 never 타입이 있다면 사라진다. (공집합은 합집합 하여도 원본 집합이다.)
    // => number | boolean
    ```

**:two: 실용적인 예제 2**

* 유니온에서 특정 타입만 뽑아내는 타입

    ```js
    type Extract<T, U> = T extends U ? T : never;

    type B = Extract<number | string | boolean, string>;
    // 1단계
    // Extract<number, string> |
    // Extract<string, string> |
    // Extract<boolean, string>

    // 2단계
    // never |
    // string |
    // never

    // 결과
    // string
    ```

**:exclamation: 분산적인 조건부 타입이 되지 않게 막기**

* extends 양 옆에 []를 사용한다.

    ```js
    type StringNumberSwitch<T> = [T] extends [number] ? string : number;

    let d: StringNumberSwitch<boolean | number | string>; // number
    ```

### infer
> inference -> 추론하다.  
조건부 타입 내에서 특정 타입만 추론해 오는 기능

```js
type FuncA = ()=> string;

type FuncB = ()=> number;

type ReturnType<T> = T extends () => infer R ? R : never;
// infer R => 조건식을 참으로 만드는 타입을 추론

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // never
// number 타입이 서브 타입이 되도록 하는 () => infer R 타입은 없기에 추론 불가능으로 never 반환
```

**예제**
```js
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입에 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
```
***

## 유틸리티 타입

> 타입스크립트가 자체적으로 제공하는 특수한 타입  
=> 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해서 실무에 자주 사용되는 타입들을 미리 만들어 놓은 것


### 맵드 타입 기반의 유틸리티 타입

* **:one: ```Partial<T>```**

    > -> 부분적인, 일부분의  
    -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // 이해를 위한 Partial 타입 직접 구현
    type Partial<T> = {
        [key in keyof T]? : T[key];
    };

    const draft: Partial<Post> = {
        title: "나중에 짓자",
        content: "초안",
    };
    ```

* **:two: ```Required<T>```**

    >-> 필수의, 필수적인  
    -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // 이해를 위한 Required 타입 직접 구현
    type Required<T> = {
        [key in keyof T]-?: T[key];
    }

    const withThumbnailPost: Required<Post> = {
        title: "타입스크립트",
        tags: ["ts"],
        content: "",
        thumbnailURL: "https://...",
    };
    ```

* **:three: ```Readonly<T>```**

    >-> 읽기전용, 수정불가  
    -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // 이해를 위한 Readonly 타입 직접 구현
    type Readonly<T> = {
        readonly [key in keyof T]: T[key];
    }

    const readonlyPost: Readonly<Post> = {
        title: "보호 된 게시글 입니다.",
        tags: [],
        content: "",
    }

    // readonlyPost.title = "변환"; 수정 불가능
    ```

* **:four: ```Pick<T, K>```**

    >-> 뽑다, 고르다  
    -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // 이해를 위한 Pick 타입 직접 구현
    // 타입변수 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입의 키 값들을 추출한 유니온 타입의 서브 타입만 가능
    // => K extends "title" | "tags" | "content" | "thumbnailURL"
    // => "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
    type Pick<T, K extends keyof T> = {
        [key in K]: T[key];
    };

    // 타이틀과 컨텐츠 프로퍼티만 있는 객체 타입으로 새롭게 타입을 정의한다.
    const legacyPost: Pick<Post, "title" | "content"> = {
        title: "옛날 글",
        content: "옛날 컨텐츠"
    }
    ```

* **:five: ```Omit<T, K>```**

    >-> 생략하다, 빼다  
    -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // 이해를 위한 Omit 타입 직접 구현
    // Exclude<T, U> 앞에 전달한 타입 변수에서 뒤에 전달한 타입 변수를 제거한 타입 반환
    // T = Post, K = "title"
    // => Pick<Post, Exclude<keyof Post, "title">>
    // => Pick<Post, Exclude<"title" | "tags" | "content" | "thumbnailURL", "title">>
    // => Pick<Post, "tags" | "content" | "thumbnailURL">
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    const noTitlePost: Omit<Post, "title"> = {
        content: "",
        tags: [],
        thumbnailURL: "",
    }
    ```

* **:six: ```Recode<K, V>```**

    > 객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 좀 더 제한적인 객체 타입을 정의  
    첫번째 타입 변수로 객체의 프로퍼티 키를 유니온으로 두번째 타입 변수로는 키들의 value 타입을 받는다.  
    Recode 타입을 통해 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있다.

    ```js
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    };

    // Before
    type ThumbnailLegacy = {
        large: {
            url: string;
        };
        medium: {
            url: string;
        };
        small: {
            url: string;
        };
        watch: {
            url: string;
        };
    }

    // 이해를 위한 Recode 타입 직접 구현
    type Recode<K extends keyof any, V> = {
        [key in K]: V
    };

    // After
    type Thumbnail = Record<"large" | "medium" | "small" | "watch", 
    {url: string; size: number}
    >;
    ```

### 조건부 타입 기반의 유틸리티 타입

* **:one: ```Exclude<T, U>```**

    > -> 제외하다, 추방하다  
    -> T에서 U를 제거하는 타입

    ```js
    // 이해를 위한 Exclude 타입 직접 구현
    type Exclude<T, U> = T extends U ? never : T;
    // 1단계
    // Exclude<string, boolean> |
    // Exclude<boolean, boolean>

    // 2단계
    // string |
    // never 

    // 최종
    // string

    type A = Exclude<string | boolean, boolean>;
    ```


* **:two: ```Extract<T, U>```**

    > -> T에서 U를 추출하는 타입

    ```js
    // 이해를 위한 Extract 타입 직접 구현
    type Extract<T, U> = T extends U ? T : never;

    type B = Extract<string | boolean, boolean> // boolean
    ```

* **:three: ```ReturnType<T>```**

    > -> 함수의 반환값 타입을 추출하는 타입

    ```js
    // 이해를 위한 ReturnType 직접 구현
    type ReturnType<T extends (...args : any) => any> = T extends(
        ...args: any
    ) => infer R 
        ? R 
        : never;

    function funcA(){
        return "hello";
    }

    function funcB(){
        return 10;
    }

    type RetrunA = ReturnType<typeof funcA> // string

    type RetrunB = ReturnType<typeof funcB> // number
    ***
    ```
***

## 타입스크립트로 리액트 시작하기

### Setting (마이그레이선)
1. 리액트 설치
    ```js
    npx create-react-app .
    ```

2. 타입 선언 패키지 설치
    ```js
    npm i @types/node @types/react @types/react-dom @types/jest
    ```

3. tsconfig.json 생성 및 설정
    ```js
    {
        "compilerOptions": {
            "target": "ES5",
            "module": "CommonJS",
            "strict": true,
            "allowJs": true,
            // 디폴트로 내보낸 값이 없는 모듈에서도 값을 불러 오게 허용해주는 옵션
            "esModuleInterop": true,
            // 타입스크립트 컴파일러가 JSX 문법을 해석하게 해주는 옵션
            "jsx": "react-jsx"
        },
        "include": ["src"]
    }
    ````

4. 모든 js 파일을 jsx로 변경
    ```js
    App.js -> App.jsx
    index.js -> index.jsx
    ```
5. 개별 파일을 tsx로 변경 및 오류 해결

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';

    // createRoot 메서드는 null 타입을 인수로 받지 않지만
    // document.getElementById() 메서드가 null 타입의 값을 반활 할 수 있기에
    // as HTMLElement 이라고 단언해준다.
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    ```
### 상태관리와 Props 1

> useState와 Props 사용하기

**타입스크립트에서의 useState와 Props의 특징**

1. 리액트의 useState() 메서드는 초기값으로 전달한 인수의 타입에 따라  
state와 setState의 타입을 자동으로 추론한다. (제네릭 함수)

2. 리액트는 기본적인 기능(onChange 등)들에 대한 타입을 제공하기기에  
이벤트 핸들러를 사용 시, 매개변수 e의 타입은 미리 정의 된 이벤트 객체 타입을 불러와 사용한다.  
(각 정의 된 타입은 해당 메서드 이벤트 객체 e에 마우스 커서를 올려서 확인 가능)  
```React.ChangeEvent<HTMLInputElement>```

3. props를 전달 받을 경우 props의 타입을 별도로 지정해주고 매개변수의 타입으로 설정한다.  
children(div 등)을 전달하고 싶으면 받는 컴포넌트 쪽에서 children props를 따로 정의해줘야 한다.  
```children: ReactElement```

**활용 예시**

* App.tsx

    ```js
    import { useEffect, useRef, useState } from "react";
    import Editor from "./components/Editor";
    import "./App.css";

    // 인터페이스로 객체의 구조 정의
    interface Todo {
        id: number;
        content: string;    
    }

    function App() {
        // useState의 인수가 Todo의 배열 타입으로 text와 setText도 Todo 배열로 추론
        const [todos, setTodos] = useState<Todo[]>([]);

        const idRef = useRef(0); // number 추론

        const onClickAdd = (text: string) => {
            setTodos([
                ...todos,
                {
                    id: idRef.current++,
                    content: text,
                },
            ]);
        };

        useEffect(() => {
            console.log(todos);
        }, [todos]);

        
        return (
            <div className="App">
                <h1>Todo</h1>
                <Editor onClickAdd={onClickAdd}>
                    <div>child</div> <!-- props로 children 전달 -->
                </Editor>
            </div>
        );
    }

    export default App;
    ```
* components/Editor.tsx

    ```js
    import { useState } from "react";

    // props를 전달 받을 경우 Props의 타입을 별도로 지정해준다.
    interface Props {
        onClickAdd: (text: string) => void;
        children: ReactElement; // children을 받을 떄 기본 타입 ReactElement
    }

    // 매개변수의 타입을 Porps로 지정
    const Editer = (props: Props) => {
        // useState의 인수가 string 타입으로 text와 setText도 string으로 추론
        const [text, setText] = useState("");

        // 매개변수 e의 타입은 미리 정의 된 이벤트 객체 타입을 불러와 사용한다.
        // React.ChangeEvent<HTMLInputElement>
        const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
        };

        const onClickBtn = () => {
            props.onClickAdd(text);
            setText("");
        };

        return (
            <div>
                {props.children} <!-- 전달 받은 children -->
                <input type="text" value={text} onChange={onChangeInput} />
                <button onClick={onClickBtn}>추가</button>
            </div>
        );
    };

    export default Editer;
    ```

### 상태관리와 Props 2

> useState를 useReducer로 바꾸고 별도의 파일로 타입 관리하기

**타입스크립트에서의 useReducer와 Props의 특징**

1. 공통으로 여러 컴포넌트에서 사용되는 타입은 별도의 타입스크립트 파일로 분리해준다.

2. 타입스크립트에서는 useReducer를 이용할때 action 객체 타입을 서로소 유니온 타입으로 정의하기 때문에 dispatch를 호출할때 하는 실수(오타 등)를 방지할 수 있다.

* src/types.ts
    ```js
    // 공통으로 사용되는 타입을 타입스크립트 파일을 분리하고 export로 내보내준다.
    // 타입 별칭이나 인터페이스로 만든 타입도 별도의 파일로 분리 가능
    export interface Todo {
        id: number;
        content: string;
    }
    ```

* App.tsx

    ```js
    import { useEffect, useReducer, useRef } from "react";
    import Editor from "./components/Editor";
    import "./App.css";
    import { Todo } from "./types"; // 타입 파일 불러오기
    import TodoItem from "./components/TodoItem";

    // 타입 별칭
    type Action =
        | {
            type: "CREATE";
            data: {
                id: number;
                content: string;
            };
        }
        | {
            type: "DELETE";
            id: number;
        };

    /*
    위와 동일하다.
    type Action = {
        type: "CREATE";
        data: {
            id: number;
            content: string;
        };
    } | {
        type: "DELETE";
        id: number;
    };
    */

    // 상태 변화를 직접 처리하는 함수 reducer
    // reducer(현재의 state, 요청의 내용이 담긴 액션 객체)
    function reducer(state: Todo[], action: Action) {
        switch (action.type) {
            case "CREATE": {
                // 새롭게 만들어지는 값
                return [...state, action.data];
            }
            case "DELETE": {
                // filter를 통한 id가 동일하지 않은 요소들만 반환
                return state.filter((item) => item.id !== action.id);
            }
        }
    }

    function App() {
        // useReducer(상태 변화를 직접 처리하는 함수 reducer, 초기값 [])
        // 상태 변화를 요청하기만 하는 함수 dispatch
        const [todos, dispatch] = useReducer(reducer, []);

        const idRef = useRef(0);

        const onClickAdd = (text: string) => {
            dispatch({
                type: "CREATE",
                data: {
                    id: idRef.current++,
                    content: text,
                },
            });
        };

        const onClickDelete = (id: number) => {
            dispatch({
                type: "DELETE",
                id: id,
            });
        };

        useEffect(() => {
            console.log(todos);
        }, [todos]);

        return (
            <div className="App">
                <h1>Todo</h1>
                <Editor onClickAdd={onClickAdd} />
                <div>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onClickDelete={onClickDelete}
                        />
                    ))}
                </div>
            </div>
        );
    }

    export default App;
    ```

* component/TodoItem.tsx
    ```js
    import { Todo } from "../types"; // 타입파일 불러오기

    interface Props extends Todo { // 불러온 타입파일을 확장하여 사용
        onClickDelete: (id: number) => void; // 전달 받은 props 타입 정의
    }

    const TodoItem = (props: Props) => {
        const onClickBtn = () => {
            props.onClickDelete(props.id);
        };

        return (
            <div>
                {props.id}번 : {props.content}
                <button onClick={onClickBtn}>삭제</button>
            </div>
        );
    };

    export default TodoItem;
    ```

### 타입스크립트 Context API

> context를 만들고 useContext 대신 커스텀 훅을 이용해서 context를 사용한다.

**타입스크립트에서의 Context API 특징**

1. ```createContext<T>(value)``` 는 한개의 타입 변수를 사용하는 제네릭 함수이며,  
하나의 매개 변수를 필수로 받고 있는 함수이다.  
그렇기 때문에 인수를 필수로 전달해야하니 초기값 null 을 넣어주고,  
컴포넌트를 통해 전달할 value의 타입을 제네릭과 유니온을 이용하여 
명시적으로 타입을 직접 정의해준다.  
ex) ```createContext<Todo[] | null>(null)```

2. createContext를 사용할 때, 타입이 null과의 유니온 타입 ```<T | null>``` 으로 지정되어 있기 때문에  
context를 사용할 컴포넌트에서 useContext를 사용하면,  
바로 사용이 불가능 하며 옵셔닐체이닝(?)으로 사용 해야 한다.  
이를 해결 하기 위해서는 커스텀 훅을 생성해서 그 안에서 타입 좁히기를 해준다.

* App.tsx

    ```js
    import { createContext, useContext, useEffect, useReducer, useRef } from "react";
    import Editor from "./components/Editor";
    import "./App.css";
    import { Todo } from "./types";
    import TodoItem from "./components/TodoItem";

    type Action =
        | {
            type: "CREATE";
            data: {
                id: number;
                content: string;
            };
        }
        | {
            type: "DELETE";
            id: number;
        };

    function reducer(state: Todo[], action: Action) {
        switch (action.type) {
            case "CREATE": {
                return [...state, action.data];
            }
            case "DELETE": {
                return state.filter((item) => item.id !== action.id);
            }
        }
    }

    // 초기값을 null로 넣은 후 전달할 변수의 타입을 제네릭 유니온 타입으로 지정
    export const TodoStateContext = createContext<Todo[] | null>(null);
    export const TodoDispatchContext = createContext<{
        onClickAdd: (text: string) => void;
        onClickDelete: (id: number) => void;
    } | null>(null);

    export function useTodoDispatch() {
        const dispatch = useContext(TodoDispatchContext);

        if (!dispatch) throw new Error("TodoDispatchContext error");

        return dispatch;
    }

    function App() {
        const [todos, dispatch] = useReducer(reducer, []);

        const idRef = useRef(0);

        const onClickAdd = (text: string) => {
            dispatch({
                type: "CREATE",
                data: {
                    id: idRef.current++,
                    content: text,
                },
            });
        };

        const onClickDelete = (id: number) => {
            dispatch({
                type: "DELETE",
                id: id,
            });
        };

        useEffect(() => {
            console.log(todos);
        }, [todos]);

        return (
            <div className="App">
                <h1>Todo</h1>
                <!-- Provider 설정 -->
                <TodoStateContext.Provider value={todos}>
                    <TodoDispatchContext.Provider
                        value={{ onClickAdd, onClickDelete }}
                    >
                        <Editor />
                        <div>
                            {todos.map((todo) => (
                                <TodoItem key={todo.id} {...todo} />
                            ))}
                        </div>
                    </TodoDispatchContext.Provider>
                </TodoStateContext.Provider>
            </div>
        );
    }

    export default App;
    ```

* components/Editor.tsx
    ```js
    import { useState } from "react";
    // 커스텀 훅을 불러와 준다.
    import { useTodoDispatch } from "../App";

    interface Props {}

    const Editer = (props: Props) => {
        // const dispatch = useContext(TodoDispatchContext);
        // 커스텀 훅을 이용한다 옵셔널 체이닝 방지

        const dispatch = useTodoDispatch();

        const [text, setText] = useState("");

        const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
        };

        const onClickBtn = () => {
            // dispatch?.onClickAdd(text);
            // 옵셔널 체이닝은 사용을 지양한다.
            
            // 옵셔널 체이닝을 사용하지 않고, dispatch 사용 가능
            dispatch.onClickAdd(text);
            setText("");
        };

        return (
            <div>
                <input type="text" value={text} onChange={onChangeInput} />
                <button onClick={onClickBtn}>추가</button>
            </div>
        );
    };

    export default Editer;
    ```

* components/TodoItem.tsx
    ```js
    import { useTodoDispatch } from "../App";
    import { Todo } from "../types";

    interface Props extends Todo {}

    const TodoItem = (props: Props) => {
        const dispatch = useTodoDispatch();

        const onClickBtn = () => {
            dispatch.onClickDelete(props.id);
        };

        return (
            <div>
                {props.id}번 : {props.content}
                <button onClick={onClickBtn}>삭제</button>
            </div>
        );
    };

    export default TodoItem;
    ```
***

## 타입스크립트 외부 라이브러리 사용법

> 타입스크립트 환경에서는 자바스크립트와 다르게 외부 라이브러리 또한 타입 검사 기능을 수행하여, 오류가 발생하고 바로 사용이 불가능하다.

* react-router-dom 과 같은 타입스크립트로 제작 된 라이브러리는 바로 사용이 가능하다.
* [npmjs][npmjs_link] 에서 사용하고자 하는 라이브러리 이름 옆에 TS 마크가 아니라면,  
DT 마크를 눌러서 해당 라이브러리의 타입 정보를 제공하는 패키지를 추가로 설치하여 사용한다.
* @types 로 시작하는 타입 정보를 제공하는 패키지를 Definitely types 로 부른다.

[npmjs_link]: https://www.npmjs.com/ "npmjs"

```js
// 1. 라이브러리 패키지 설치
npm i lodash
// 2. 라이브러리 타입 정보 패키지 설치
npm i @types/lodash
```
***

## 타입스크립트 템플릿

> 타입스크립트로 리액트 프로젝트를 시작 시 빠르게 세팅해주는 도구

```js
npx create-react-app my-app --template typescript
```
***