/**
 * Bài 1: Viết hàm in ra N số fibonacci
Hiển thị N số Fibonacci đầu tiên

Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonacci

Yêu cầu: Không dùng vòng lặp

Note: số fibonacci là gì anh tự search nha.
 */

const printFibonacci(n, a = 1, b = 1, result ="") => {
    if (n === 0) return result.trim();
    return printFibonacci(n - 1, b, a + b, result + a + " ")
};


// Lần 1: printFibonacci(n, a = 1, b = 1, result ="") => {
// //if (n === 0) return result.trim();
// trả về rỗng
// return printFibonacci(9, 1, 2, 1 )
// 
// Lần 2: Trả về
// 1 
// return printFibonacci(8, 2, 3, 1 1  )

// Lân 3:
// 1 3
 // return printFibonacci(7, 3, 5, 1 1 2  )

 // Lần 4: 
 // 1 3 5
 // return printFibonacci(6, 5, 8, 1 1 2 3  )