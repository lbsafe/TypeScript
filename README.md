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

### any 타입

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

### unknown 타입

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

### void 타입

> 함수나 변수가 반환하는 값이 없을 때 사용가능하다.

* 특징
    - void -> 공허 -> 아무것도 없다.
    - void -> 아무것도 없음을 의미하는 타입
    - undefined와 같은 역할을 한다.

```js
function func1(): string{
    return "hello";
}

function func2(): void{
    console.log('hello');
}

function func3(): undefined{
}

let a: void;
a = 1; // 불가능
a = 'hello'; // 불가능
a = {}; // 불가능
a = null // tsconfig.js 옵션에 strictNullChecks 옵션을 끄면 예외적으로 가능하다.
a = undefined; // 가능
```

### never 타입

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