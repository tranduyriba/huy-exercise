// Kiểm tra 1 biến có phải một hàm hay không?

/**
 * Callback là 1 hàm được sử dụng như một đối số
 * 
 */

// const getA = () => {
//     console.log("a")
// }

// setTimeout((getA) => {
//     console.log("a");
// }, 2000)

// setTimeout((getB) => {
// console.log("b")
// }, 2000)

// setTimeout((getC) => {
//     console.log("c")
// }, 2000)

// getA();
// getB();
// getc();

//IIFE Function

(function (name) {
    console.log("Duy")
})("Duy")

// Hàm Closure

const sumA = (a) => {
    const sumB = (b) => {
        return a + b;
    }
    return sumB;
}

// Giải thuật đệ quy -- 1 hàm in ra chính nó thì gọi là Đệ quy

const print = (n) => {
    if (n > 0) {
        console.log(n);
        print(n - 1)
    }
}

print(10);

// Bài tập: Sử dụng đệ quy để tính tổng 1 số từ số 1 đến chính nó

const sumN = (n) => {
if (n === 1) return 1;
return n + SumN(n - 1)
}
console.log(sumN(10));

