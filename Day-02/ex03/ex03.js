/**
 * Kiểm tra số đối xứng
 * Viết chương trình kiểm tra xem một số nguyên n có phải là số đối xứng hay không (số đọc từ trái sang phải giống số đọc từ phải sang trái).
 * Ví dụ:
 * Input: 121 → Output: true
 * Input: 123 → Output: false
 */

function kiemTraDoiXung(n) {
    if (n < 0) return "Số nhập vào không hợp lệ";
    let num = 0;
    let original = n;
    let m = 0;
    while (n > 0) {
        m = n % 10;
        num = num*10 + m
        n = n/10 - m/10;
    }
    if (num === n) {
        return `Số ban đầu nhập vào là ${original}. Số đảo lại là ${num}. Vì thế Đây là số đối xứng` //Không tìm ra được lỗi sai chỗ này.
    } else {
        return `Số ban đầu nhập vào là ${original}. Số đảo lại là ${num}. Vì thế Đây KHÔNG PHẢI là số đối xứng`
    }
}

console.log(kiemTraDoiXung(123))