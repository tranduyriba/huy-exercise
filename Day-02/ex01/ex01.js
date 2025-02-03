/**
 * Bài 1: Tìm số nguyên tố trong một khoảng
Viết một chương trình nhập vào hai số nguyên a và b. 
In ra tất cả các số nguyên tố nằm trong khoảng từ a đến b.
 */

function isPrime(a, b) {
    if (a > b) {
        let sum  = a + b;
        a = sum - a;
        b = sum - b;
    }
    console.log(`Các số nguyên tố trong khoảng tử ${a} đến ${b} là:`)
    for (let i = a; i <= b; i++) {
        if (i % 2 !== 0 ) {
        console.log(i)
        } 
    }
}

let result = isPrime(21, 1);
console.log(result);