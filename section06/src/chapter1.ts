// 타입스크립트의 클래스
// 클래스를 만들기 전 객체로 먼저 표현하면 헷갈리지 않는다.
// 타입스크립트의 클래스는 자바스크립트의 클래스로 취급과 동시에 type으로도 취급된다.

const employee = {
    name: '오건희',
    age: 27,
    position: 'developer',
    work() {
        console.log("일함");
    }
};

class Employee{
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfiicer extends Employee{
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee('오건희', 27, '개발자');
console.log(employeeB);

const employeeC: Employee = {
    name : "",
    age : 0,
    position : "",
    work() {},
}