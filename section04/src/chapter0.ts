// 함수 타입 정의

// 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지
function func(a:number, b:number): number{
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a:number, b:number) => a + b;

// 함수의 매개변수

// 필수 매개변수 name = '오건희'
// 선택적 매개변수 tall?:number
// 선택적 매개변수는 필수 매개변수 앞에 올 수 없다.
function introduce(name = '오건희', age:number, tall?:number){
    console.log(`name : ${name}`);
    if(typeof tall === 'number'){
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("오건희", 27, 180);

introduce("오건희", 27);

// rest 파라미터
// 타입을 튜플 타입으로 지정해도 가능하다
function getSum(...rest: number[]){
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15