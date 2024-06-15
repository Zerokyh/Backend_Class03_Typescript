// Hybrid Type
// type Coffee = Bean & Liquid

// literal Type
type Direction = "North" | "South" | "West" | "East"; // 4개로 제한됨

const destination: Direction = "North";

type PrimaryColor = "#05141F" | "#ffffff";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";

const sectionBg: SecondaryColor = "#589000";

type FontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;
const component: {
  color: PrimaryColor | SecondaryColor;
  fontSize: FontSize;
}[] = [
  {
    color: "#05141F",
    fontSize: 16,
  },
  {
    color: "#ffffff",
    fontSize: 14,
  },
  {
    color: "#5D7D2B",
    fontSize: 20,
  },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
