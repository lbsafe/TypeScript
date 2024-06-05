// map 메서드
// map 메서드의 결과 값 타입이 반드시 전달 받은 인수의 타입과 같지 않을 수 있다.
// 그렇기에 새로운 타입 변수를 생성해서 이를 해결 해준다.

const arr = [1, 2, 3];
const newArr = arr.map((it) => it*2);
// [2, 4, 6]


function map<T, U>(arr: T[], callback: (item: T)=> U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it));

// forEach
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T)=> void){
    for(let i = 0; i<arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it)=>{
    console.log(it.toFixed());
})

forEach(['123','456'], (it)=>{
    it;
});