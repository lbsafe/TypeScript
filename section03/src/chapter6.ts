// 타입 단언
// 프로퍼티의 값을 나중에 초기화 해주는 등의 작업을 할 때 as 키워드를 사용하고 그 다음에 type을 명시하면 컴파일 시 해당 type으로 간주한다.

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "오건희";
person.age = 27;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "뿌까",
    color: "tan",
    breed: "인천",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 (단언식)
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다.

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // 불가능
let num3 = 10 as unknown as string; // 다중 단언 시 가능하지만 최대한 피해야한다.

// const 단언
// const 단언은 변수 선언 시 const로 선언한 것 처럼 동일한 효과를 보이게 해준다.
// as const 를 붙여서 초기화 한 객체는 readonly가 붙으면서 프로퍼티의 값을 수정할 수 없게 된다.

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow"
} as const;

// cat.name = "냥이"; // 불가능

// Non Null 단언
// 어떤 값이 null이거나 undefined가 아니라고 타입스크립트 컴파일러에게 알려주는 역할을 한다.

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "오건희"
}

//const len: number = post.author?.length;
const len: number = post.author!.length;