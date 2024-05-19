// 타입 별칭
// - 공통적으로 적용 되어야 하는 부분을 효율적으로 작업할 수 있다.
// - 같은 스코프 내에서 중복 된 이름으로 선언하지 않게 주의한다.
// - 함수 안에서 선언은 가능하다.
function fun() {
}
let user = {
    id: 1,
    name: "오건희",
    nickname: "lbsafe",
    birth: "1998.04.26",
    bio: "안녕",
    location: "인천광역시"
};
let user2 = {
    id: 2,
    name: "뿌까",
    nickname: "뿌까",
    birth: "2014.10.05",
    bio: "멍",
    location: "인천광역시"
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 1,
};
export {};
