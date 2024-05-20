// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입
// 타입 좁히기를 할때 더 직관적으로 객체 타입을 정의하는 방법
// 리터럴 타입을 응용하기 때문에 각각의 객체들이 서로소 집합의 관계를 가져서 서로 교집합이 없다.

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

// User = 서로소 관계의 객체 타입들을 유니온 타입으로 묶은 서로소 유니온 타입
type User = Admin | Member | Guest;

function login(user:User){
    switch(user.tag){
        case 'ADMIN':{
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case 'MEMBER':{
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case "GUEST":{
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
}

// 복습 겸 한가지 사례

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING",
}

type FailedTask = {
    state: "FAILED",
    error: {
        message : "오류 발생 원인",
    },
}

type SuccessTask = {
    state: "SUCCESS",
    response: {
        data: "데이터",
    },
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task:AsyncTask){
    switch(task.state){
        case "LOADING":{
            console.log("로딩 중");
            break;
        }
        case "FAILED":{
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS":{
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}