// 제네릭 인터페이스
// 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때 반드시 타입 변수에 타입을 직접 할당해야한다.

interface KeyPair<K, V>{
    key: K,
    value: V
};

// 타입 변수에 할당할 타입을 지정한다.
let keyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value : ['hi', 'hello'],
};

// 기존 인덱스 시그니처
interface NumberMap {
    [key: string] : number;
};

let numberMap1: NumberMap = {
    key: -123,
    key2: 123,
    
};

// 제네릭의 인덱스 시그니처 활용
// 제네릭 인터페이스와 인덱스 시그니처를 함께 사용하면 value의 타입을 유연하게 정의가 가능하다.
interface Map<V> {
    [key: string]: V;
};

let stringMap: Map<string> = {
    key: 'value'
};

let booleanMap: Map<boolean>= {
    key: true
};

// 제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: "hello"
}

// 제네릭 인터페이스 활용 예시
// 객체 타입으로 조합 된 복잡한 객체 타입을 제네릭 인터페이스를 사용하여 더 깔끔하게 분리가 가능하다.
// -> 유저 관리 프로그램
// -> 유저 구분: 학생 / 개발자

interface Student{
    type: "student";
    school: string;
}

interface Developer{
    type: "developer";
    skill: string;
}

interface User<T>{
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>){
    const school = user.profile.school
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser);

const developerUser: User<Developer> = {
    name: '오건희',
    profile: {
        type: 'developer',
        skill: 'TypeScript'
    }
};

const studentUser: User<Student> = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '땡땡학교'
    }
};