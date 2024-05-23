// 클래스
// 객체를 만들어 내는 툴

let studentA = {
    name: "오건희",
    grade: "A+",
    age: 27,
    study(){
        console.log("열심히 공부중");
    },
    introduce(){
        console.log("안녕하세요!");
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study(){
        console.log("밥 먹는 중");
    }

    introduce(){
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}

class StudentDeveloper extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programing(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper('오건희', 'A+', 27, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programing();

// 인스턴스 : 클래스를 이용해서 만든 객체
// 스튜던트 인스턴스
// let studentB = new Student('오뿌까', 'A', 10);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
