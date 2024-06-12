// 인덱스드 엑세스 타입 (indexed access type)
// index를 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입
// index에 들어가는 문자열은 값이 아니라 타입이다.
// 객체 배열 튜플에 모두 사용이 가능하다.

// 객체
interface Post{
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

function printAutorInfo_before (author: {id: number; name: string; age: number;}){
    console.log(`${author.name}-${author.id}`);
}

// 스트링 리터럴 타입["author"]을 index라고 부른다.
// 인덱스에 들어가는 문자열은 값이 아니라 타입이다.
// 중첩으로 대괄호를 사용하여 가져온 객체타입으로부터 특정 프로퍼티를 또 가져올 수 있다.
// function printAutorInfo (author: Post["author"]["id"])
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

// 배열
// 인덱스에 어떤 숫자를 넣던 간에 앞에가 배열 타입이면 그냥 배열의 요소 타입을 추출한다.
// [number] or [0], [1], [2] 등 어떤 숫자든 가능
type PostList = {
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

// 튜플
// 튜플 타입은 각각의 타입을 뽑아올 수 있다.
// 길이가 고정된 배열이기에 존재하지 않는 인덱스의 타입은 추출할 수 없다.
// 튜플 인덱스에 number를 넣어주면 튜플 타입 안에 최적의 공통 타입(유니온 타입)을 가져온다.

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number];

// type Tup3 = Tup[3]; // 존재하지 않는 인덱스 error!