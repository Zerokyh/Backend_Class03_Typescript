console.log("이게 마 타입스크립트다!");

// tsc test.ts 입력시 not command라고 뜨면 typescript가 설치 되지않은 것, 설치해야함
// npm[실행해줘] [설치해줘] [전역으로] [타스]
// npm install -g typescript
// npm install -g ts-node

const cookie = {
  name: "화이트쿠키비키",
  price: 2500,
};

console.log(`${cookie.name}은 가격이 ${cookie.price}이다`);
