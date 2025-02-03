/**
 * Bài 4: Tính giai thừa của một số
Viết chương trình tính giai thừa của một số nguyên n (n!).

Ví dụ:

Input: 5 → Output: 120 (5! = 5 × 4 × 3 × 2 × 1)
 */

function giaiThua(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i; 
    }
    console.log(`${n}! = ${result}`)
}
giaiThua(5)