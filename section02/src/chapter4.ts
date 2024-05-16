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
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 1,
};