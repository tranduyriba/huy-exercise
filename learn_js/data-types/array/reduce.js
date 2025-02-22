// Vòng lặp Reduce

/**
 * Vòng lặp Reduce có 2 tham số
 * 1. Callback: Nhận vào 3 tham số
 * + Pre Value
 * ++ Nếu không có giá trị khởi tạo thì nó sẽ lấy phần tử đầu tiên của mảng làm giá trị
 * ++ Nếu có giá trị khởi tạo thì nó sẽ lấy giá trị khởi tạo làm giá trị
 * ++ Return lần trước của callback sẽ là giá trị của prev hiện tại
 * 
 * + Current Value
 * + Index
 * 
 * 2. Initialvalue
 * 
 * => Giá trị trả về của Reduce sẽ là lần return cuối cùng của Callback
 */

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue;
// }, 0);

// console.log(result)

/**
 * Ví dụ 01: Tìm max sử dụng reduce
 */

// let number = [5, 2, 1, 4, 10, 7]

// const result = number.reduce((prev, curr) => {
//    return prev < curr ? curr : prev;
// })

// console.log(result)

/**
 * 
 */

