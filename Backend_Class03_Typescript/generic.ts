// generic.ts -> generalize[일반화하다]

// type G<T> = {
//   first: T;
//   second: number;
// };

// const test: G<string> = {
//     first: "문자넣어야 함",
//     second: 1234,
//   };

type G<T, K> = {
  first: T;
  second: K;
};

const test: G<string, number> = {
  first: "문자넣어야 함",
  second: 1234,
};

// 위에껄로 요약됨

// type A = {
//   frist: string;
//   second: number;
// };

// type B = {
//   first: boolean;
//   second: number;
// };

// type C = {
//   first: number;
//   second: number;
// };

// type D = {
//   first: { name: string; price: number };
// };

// type HamburgerSet<> = {main, side, drink}
type HamburgerSet<T, K, J> = {
  main: T;
  side: K;
  drink: J;
};

type Moring = "머핀";
type NotMoring = "참깨빵";
type Rice = "라이스";

const sanghaiBurger: HamburgerSet<string, string[], string> = {
  main: "상하이버거",
  side: ["감자튀김, 치킨너겟"],
  drink: "제로콜라",
};

type Hamburger<T> = {
  bread: T;
  contents: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};

type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";

type Coffee = "드립커피" | "아메리카노" | "디카페인" | "라떼";

type Beverage = "콜라" | "스프라이트" | "제로콜라" | "환타";

const MacMoring: HamburgerSet<
  Hamburger<Rice | Moring>,
  Side,
  Coffee | Beverage
> = {
  main: {
    bread: "라이스",
    contents: "토마토에그",
  },

  side: "감자튀김",

  drink: "드립커피",
};

// const a = fetch("https").then((v) => v.json)

type Success<T> = {
  result: "success";
  value: T;
};

type Failure = {
  result: "fail";
  value: "error";
};

// type Response_<T> = Success<T> | Failure;

// const getResponse = (a: Response_<string[]>) => {
//   if (a.result == "success") {
//     console.log(a.value); // a.value = string
//     a.value.forEach((v) => console.log(v));
//   } else {
//     console.log(a.value);
//   }
// };

// getResponse({ result: "success", value: ["냉면", "고기", "불닭", "마라탕"] });
// getResponse({ result: "fail", value: "error" });

type Response__<T> = Success<T> | Failure;

const getResponse = (b: Response__<number>) => {
  if (b.result === "success") {
    console.log(b.value + 100);
  } else {
    console.log(b.value);
  }
};

// getResponse({ result: "success", value: 20 });
// getResponse({ result: "fail", value: "error" });
