// 프로미스
// 자바스크립트의 내장 클래스인 프로미스는 타입스크립트에서는 제네릭 클래스로 타입이 선언되어 있다.
// 프로미스 생성자를 호출할 때 타입 변수를 할당해주면 비동기 처리 결과 값의 타입을 직접 명시할 수 있다.
// 타입 변수 정의를 하지 않으면 비동기 작업 처리의 결과값이 unknown 타입으로 추론된다.
// 프로미스는 resolve나 reject를 호출해서 전달하는 비동기 작업의 결과값을 자동으로 추론하지 않는다.
// 프로미스는 resolve의 타입은 정의가 가능하지만 reject 즉 실패의 타입은 정의가 불가능 하다.

const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20);
        reject("실패 이유"); // any type
    }, 3000);
});

// 성공
// response: number
// promise.then((response)=>{
//     console.log(response * 10); // 20
// });

// 실패
// err: any
// 프로미스의 catch 메서드를 사용하면 매개변수의 타입을 정확히 알 수 없다.
// err 매개변수를 사용할 때에는 타입 좁히기를 통해 프로젝트의 상황에 맞게 형태를 좁혀서 사용한다.
promise.catch((err)=>{
    if(typeof err === "string"){
        console.log(err);
    }
});


// 프로미스를 반환하는 함수의 타입을 정의
// ex) 서버로부터 하나의 게시글 데이터를 불러오는 함수

interface Post{
    id: number;
    title: string;
    content: string;
}

// 프로미스가 클래스이기 때문에 타입으로도 활용할 수 있다.
function fetchPost(): Promise<Post>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠"
            })
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    console.log(post.id);
    console.log(post.title);
    console.log(post.content);
})