const datas = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Eve", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
];

const validData = [];
const invalidData = [];

datas.forEach(user => {
  if (user.name && user.age > 0) {
    validData.push(user);
  } else {
    invalidData.push(user);
  }
});

console.log("Dữ liệu hợp lệ:", validData);
console.log("Dữ liệu không hợp lệ:", invalidData);