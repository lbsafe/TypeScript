// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 숫자를 지정하지 않아도 자동으로 숫자가 0부터 들어간다.
// 첫 숫자를 설정해주면 다음 숫자는 자동으로 설정한 값에서 +1 이 할당된다.
// 중간 숫자 부터 할당하면 그 전 숫자는 0부터 시작한다.
// enum은 컴파일 결과가 사리지지 않는다. 컴파일 시 객체로 변환된다.

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