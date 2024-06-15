// optional

// substract 함수 (a, b) number
const substract = (a: number, b?: number | undefined): number => {
  if (b === undefined) {
    return 0;
  } else {
    return a - b;
  }
};

// optional: ? undefined 일수도 있음
type Food = {
  name: string;
  price: number;
  kcal?: number;
};

// kcal은 있어도 되고 없어도 됨
const lunch: Food = {
  name: "냉면",
  price: 9000,
};

// keyof , key을 정해주는 것
// obj {k:v}
type Course = {
  name: string;
  classroom: "A" | "B" | "C" | "D";
};

type A = keyof Course;
const test1: A = "name"; // "name" and "classroom만" 가져올 수 있음
