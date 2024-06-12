// 템플릿 리터럴 타입
// 스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능
// 문자열로 여러가지의 상황들을 표현해 되는 경우 사용한다.

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal : ColoredAnimal = "black-cat";