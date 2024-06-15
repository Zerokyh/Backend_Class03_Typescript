// typeAlias:별칭, 별명

// type TTest = string | string[];

// const americano: TTest = "디카페인 아아";

type Bean = {
  shot: number;
  hasDecaffine: boolean;
};

type Liquid = {
  name: string;
  kcal: number;
  ingredients: string[];
};

type Carbonated = {
  isZero: boolean;
};

type Milk = {
  isLowFat: boolean;
  isSoy: boolean;
};

// Coffee : name, kcal, shot, hasDecaffine, ingredients
type Coffee = Bean & Liquid;

// beverage: name, kcal, ingredients,
type Beverage = Carbonated & Liquid;

// const latte: Coffee = {
//   name: "라떼",
//   kcal: 240,
//   shot: 2,
//   hasDecaffine: false,
//   ingredients: ["케냐산 원두", "시럽"],
// };

type LatteCoffee = Bean & Liquid & Milk;

// const americano: Coffee = {};
// const Coke:Beverage ={};
// const densedLatte: LatteCoffee = {};

type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};

type MyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};

// const newButton: MyTypograph & MyButton = {};
