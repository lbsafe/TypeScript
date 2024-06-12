// 제네릭 클래스
// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와 다르게 클래스의 생성자를 호출할때
// 생성자의 인수로 전달 되는 값을 기준으로 티입이 추론 된다.

class List<T> {
    constructor(private list: T[]){}

    push(data: T){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("3");
stringList.print();