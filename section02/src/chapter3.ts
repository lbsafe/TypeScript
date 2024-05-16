// object
// 객체 리터럴 타입
let user: {
    id?: number; // ? 선택적 프로퍼티 유무를 선택할 수 있다.
    name: string;
} = {
    id: 1,
    name: "오건희",
};

// user = {
//     name: "홍길동",
// }

let config:{
    readonly apikey: string; // 읽기 전용 프로퍼티 값이 바뀌면 안되는 프로퍼티
} = {
    apikey: 'api key'
}

//config.apikey = "hacked";