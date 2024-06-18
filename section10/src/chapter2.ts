// 맵드 타입 기반의 유틸리티 타입2

// Pick<T, K>
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
};

// 이해를 위한 Pick 타입 직접 구현
// 타입변수 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입의 키 값들을 추출한 유니온 타입의 서브 타입만 가능
// => K extends "title" | "tags" | "content" | "thumbnailURL"
// => "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};

// 타이틀과 컨텐츠 프로퍼티만 있는 객체 타입으로 새롭게 타입을 정의한다.
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠"
}

// Omit<T, K>
// -> 생략하다, 빼다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// 이해를 위한 Omit 타입 직접 구현
// Exclude<T, U> 앞에 전달한 타입 변수에서 뒤에 전달한 타입 변수를 제거한 타입 반환
// T = Post, K = "title"
// => Pick<Post, Exclude<keyof Post, "title">>
// => Pick<Post, Exclude<"title" | "tags" | "content" | "thumbnailURL", "title">>
// => Pick<Post, "tags" | "content" | "thumbnailURL">
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
}

// Recode<K, V>
// 객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 좀 더 제한적인 객체 타입을 정의
// 첫번째 타입 변수로 객체의 프로퍼티 키를 유니온으로 두번째 타입 변수로는 키들의 value 타입을 받는다.
// Recode 타입을 통해 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있다.

// Before
type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
    watch: {
        url: string;
    };
}

// 이해를 위한 Recode 타입 직접 구현
type Recode<K extends keyof any, V> = {
    [key in K]: V
};

// After
type Thumbnail = Record<"large" | "medium" | "small" | "watch", 
{url: string; size: number}
>;