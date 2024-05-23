// 접근 제어자 (access modifier)
// 클래스를 만들때 특정 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법
// pubic private proteced

// public - 접근에 제한이 없는 상태 (기본 값)
// private - 클래스 외부에서는 프로퍼티에 접근 불가능 (읽기도 불가능) 클래스 내부 메서드에서만 접근 가능하다.
// proteced - 클래스 외부에서는 접근이 불가능하지만 파생(확장) 클래스에서는 접근이 가능하다.

class Employee{
    // 필드
    private name: string;
    protected age: number;
    position: string; // public

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
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

    // 메서드
    fun(){
        // this.name; // private로 설정 시 확장 클래스에서도 접근이 불가능 하다.
        this.age; // proteced로 설정 시 확장 클래스에서는 접근이 가능 하다.
    }
}

const employee = new Employee('오건희', 27, '개발자');
// employee.name = '오거니'; // 접근 불가능
// employee.age = 26; // 접근 불가능   
employee.position = '퍼블리셔';

// 생성자에 접근 제어자를 설정하면 필드가 자동으로 필드를 정의하고 필드의 값 초기화도 해준다.
class Employee2{
    // 필드 생략

    // 생성자
    constructor(private name: string, protected age: number, public position: string) {}

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

const employee2 = new Employee('오건희', 27, '개발자');
employee2.position = '퍼블리셔';

console.log(employee2);