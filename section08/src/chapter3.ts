// 맵드 타입 (Mapped Type)
// 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
// 맵드 타입은 인터페이스로는 만들 수 없다. 타입 별칭으로만 가능하다.
// ?를 붙여 줌으로써 선택적 프로퍼티로도 활용이 가능하다.

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
})

// keyof 연산자를 응용한 모든 프로퍼티 boolean 타입으로 변환
type BooleanUser = {
    [key in keyof User]: boolean;
}

// 모든 프로퍼티 readonly 속성으로 변환하기
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}