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

>types/node npm 에 따르면 특정버전 이후로 undici-types 에 대한 디펜던시가 발생한다.

**해결방법**

1. node_modules 삭제

    ```js
    npm uninstall node_modules
    ```

2. 20버전 이상의 오류가 발생하지 않는 아래 버전으로 재설치

    ```js
    npm i @types/node@20.8.0
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
***