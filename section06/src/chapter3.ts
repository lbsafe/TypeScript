// 인터페이스와 클래스
// 인터페이스는 무조건 public 필드만 정의가 가능하다.
// private 필드가 필요할 경우 따로 정의 해줘야한다.

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// 캐릭터 클래스는 캐릭터인터페이스를 구현한다.
class Character implements CharacterInterface{    

    constructor(public name: string, public moveSpeed: number, private extra: string){}

    move(): void{
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}