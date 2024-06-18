// 맵드 타입 기반의 유틸리티 타입

// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
};

// 이해를 위한 Partial 타입 직접 구현
type Partial<T> = {
    [key in keyof T]? : T[key];
};

const draft: Partial<Post> = {
    title: "나중에 짓자",
    content: "초안",
};

// Required<T>
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// 이해를 위한 Required 타입 직접 구현
type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
    title: "타입스크립트",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};

// Readonly<T>
// -> 읽기전용, 수정불가
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

// 이해를 위한 Readonly 타입 직접 구현
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: "보호 된 게시글 입니다.",
    tags: [],
    content: "",
}

// readonlyPost.title = "변환"; 수정 불가능