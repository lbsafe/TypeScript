// keyof 연산자
// 특정 객체 타입으로부터 프로퍼티 키들을 스트링 유니온 타입으로 추출한다.
// 어떤 객체의 프로퍼티의 갯수가 많거나, 프로퍼티의 이름이 수정되거나 추가되어도 문제 없이 유니온 타입으로 추출할 수 있다.
// keyof 연산자 뒤에는 반드시 타입이 와야 한다.


interface Person{
    name: string;
    age: number;
}

// 모든 문자열 값이 person 객체의 key라고 볼수 없기에 string 타입은 return에서 에러가 발생한다.
// -> name2라는 값을 전달하면 person 객체에는 name2라는 프로퍼티가 없기에 문제가 된다.

// Before
// 유니온 타입으로 설정하면 비효율적으로 작업하게 된다.
function getPropertyKey_Before(person: Person, key: "name" | "age"){
    return person[key]
}

// After
// Person 객체 타입으로부터 모든 프로퍼티의 키를 유니온 타입으로 추출한다.
// keyof Person = "name" | "age"
function getPropertyKey(person: Person, key: keyof Person){
    return person[key]
}

const person: Person = {
    name: "오건희",
    age: 27
}

getPropertyKey(person, "name"); // 오건희




// typeof 연산자 같이 쓰기
// type을 정의할때 typeof 연산자를 사용하면 어떤 변수의 type을 추론해서 타입 별칭에 정의 해준다.

type Person2 = typeof person2; // person2 = 변수
/*
    type Person2 = {
        name: string;
        age: number;
    }
*/

// keyof 연산자 우측에 객체 타입을 바로 쓰지 않더라도 "keyof typeof 변수" 형태로도 사용 가능하다.
function getPropertyKey2(person2: Person2, key: keyof typeof person2){
    /*
        type Person2 = {
            name: string;
            age: number;
        }

        => typeof로 타입 추론 후 keyof로 유니온 타입으로 바꿔준다.

        key: keyof typeof person2 == key: "name" | "age"
    */


    return person2[key]
}

const person2 = {
    name: "오건희",
    age: 27
}

getPropertyKey2(person2, "name"); // 오건희