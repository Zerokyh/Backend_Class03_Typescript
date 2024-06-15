// annotation.ts
const coffee: string = "아메리카노";
const isIcecream: boolean = false;
const cars: string[] = ["제네시스", "테슬라", "모닝"];
const lotto: number[] = [1, 12, 22, 24, 34, 37];
// const cake: object = { name: "치즈케이크", price: 3000 };
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
};

// student : 객체 이름, 프로그래밍 수업들, 나이, 현재 재학중인지
const student: {
  name: string;
  classes: string[];
  age: number;
  isAttending: boolean;
} = {
  name: "홍길동",
  classes: ["TypeScript", "Java"],
  age: 25,
  isAttending: true,
};

const test: null = null;
const test1: undefined = undefined;

const test2: any = "이것은 최후의 보루"; // 쓰는 것을 지양해야함, 차라리 JS를 사용

const add = (a: number, b: number): number => a + b; // 결과값의 자료형은 ()다음에 작성
add(3, 1); // 4
const add1 = (a: number, b: string): string => a + b; // 숫자 + 문자열 = 문자열
