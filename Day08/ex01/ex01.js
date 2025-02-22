/**
 * Bài tập: Trò chơi đoán số bí mật 🎲
Yêu cầu:
Máy tính chọn ngẫu nhiên một số nguyên trong khoảng từ 1 đến 100 (sử dụng Math.random() và Math.floor()).
Người chơi nhập dự đoán qua prompt().
Nếu số nhập vào lớn hơn số bí mật, chương trình hiển thị "Số bạn đoán quá lớn!".
Nếu số nhập vào nhỏ hơn số bí mật, chương trình hiển thị "Số bạn đoán quá nhỏ!".
Nếu đoán đúng, chương trình hiển thị "Chúc mừng! Bạn đã đoán đúng số bí mật!" và kết thúc trò chơi.
Người chơi có tối đa 7 lần đoán. Nếu hết lượt mà vẫn chưa đoán đúng, chương trình thông báo "Bạn đã thua! Số bí mật là X" và kết thúc trò chơi.
Gợi ý:
Dùng Math.random() để tạo số ngẫu nhiên từ 1 đến 100.
Dùng prompt() để lấy dữ liệu đầu vào từ người chơi.
Dùng alert() để hiển thị thông báo.
Dùng vòng lặp for hoặc while để giới hạn số lượt đoán.
 */


let number = 0;
while (number <= 7) {
    if (number < 7) {
        let secretNumber = Math.floor(Math.random() * 100)
    let selectNumber = prompt("Mời chọn số")
    if (!selectNumber || Number.isNaN(selectNumber) || selectNumber < 0) {
        alert("Vui lòng nhập vào số hợp lệ")
    } else if (selectNumber > secretNumber) {
        alert(`Số bạn đoán quá lớn! Số bí mật là ${secretNumber}`)
    } else if(selectNumber < secretNumber) {
        alert(`Số bạn đoán quá nhỏ! Số bí mật là ${secretNumber}`)
    } else {
        alert("Chúc mừng! Bạn đã đoán đúng số bí mật!")
    }
    } else {
        alert("Bạn đã hết lượt chơi!")
    }
    number += 1;
}