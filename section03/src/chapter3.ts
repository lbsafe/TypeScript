// 객체 타입 간의 호환성
// 객체 타입은 프로퍼티를 기준으로 업/다운 캐스팅 관계를 가진다.
// 조건이 더 적은 객체가 슈퍼타입이 되고, 조건이 더 많은 객체가 서브타입이 된다.

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

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
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
// programmingBook = book;

// 초과 프로퍼티 검사
// 객체 타입의 변수를 초기화 할때 객체 리터럴을 사용하면 추가 프로퍼티를 검사한다.
// 객체 타입에 정의 된 프로퍼티만 넣어야 한다.

let book2: Book = {
    name: "프론트개발",
    price: 30000,
    // skill: "reactjs"
}

let book3: Book = programmingBook; // 초기화 시 객체 리터럴을 사용하지 않아 가능하다.

function func(book: Book){}

func(programmingBook);