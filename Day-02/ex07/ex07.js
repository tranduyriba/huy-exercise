/**
 * Bài 7: Tính tổng các chữ số
 * Viết chương trình nhập vào một số nguyên dương n và tính tổng các chữ số của nó.
 * Ví dụ:
 * Input: 1234 → Output: 10 (1 + 2 + 3 + 4)
 */

function sumOfDigits(n) {
    let sum = 0;
    let m = 0;
    while (n > 0) {
        m = n % 10;
        sum += m;
        n = n/10 - m/10;
    }
    return sum;
}

console.log(sumOfDigits(1234));