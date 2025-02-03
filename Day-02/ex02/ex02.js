/**
 * Bài 2: Đảo ngược một số
 * Viết một chương trình nhập vào một số nguyên dương n. In ra số đảo ngược của nó.
 * Ví dụ:
 * Input: 1234
 * Output: 4321
 */

function reverseNumber(n) {
    if (n <= 0) {
        console.log("Vui long nhap vao mot so hop le")
    }
    let num = 0;
    let m = 0;
    while (n > 0) {
        m = n % 10;
        num = num*10 + m
        n = n/10 - m/10;
    }
    return num;
}

console.log(reverseNumber (1234))