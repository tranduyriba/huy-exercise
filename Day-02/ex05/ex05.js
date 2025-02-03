/**
 * Bài 5: Đếm số lần xuất hiện của ký tự
 * Viết chương trình nhập vào một chuỗi và một ký tự. Tìm và in ra số lần ký tự đó xuất hiện trong chuỗi.
 * Ví dụ:
 * Input: Chuỗi = "javascript", Ký tự = 'a' → Output: 2
 */

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("javascript", "a"));
