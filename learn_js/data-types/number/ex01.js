// Number là kiểu dữ liệu nguyên thủy

// Hàm tạo là Number

// console.log(Number);

// let a = 10;

// console.log(typeof a)

// // Số NaN

// // Ép kiểu số thất bại sẽ trả về NaN
// // - Các phép toán có toán hạng không phải là số.

// console.log("s" - 4) // Đây là 1 ví dụ trả về kết quả NaN

// Infinity : Số vô cùng

// Integer: số nguyên

// console.log(Number.parseInt(12.6)); // Ép kiểu số nguyên

// console.log(Number.parseFloat(12)); // Ép kiểu số thực


var numbers = [
  1,
  5,
  9,
  "2",
  8,
  "a",
  undefined,
  null,
  NaN,
  Infinity,
  -Infinity,
  true,
  false,
];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    if (typeof numbers[i] !== "boolean" && !Number.isNaN(numbers[i]) && numbers[i] / 0 !== Infinity && numbers[i] % 2 === 0 ) {
        sum += numbers[i];
    }
}
console.log(sum)



