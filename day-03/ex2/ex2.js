/**
 * Bài 2: Viết hàm chuyển họ và tên thành dạng tên chuẩn
 * Tên chuẩn đáp ứng các yêu cầu:
 * Không có khoảng trắng ở đầu và cuối
 * Chỉ duy nhất chữ cái đầu tiên của các từ trong tên đầy đủ (cả họ và tên) được viết hoa
 * Ví dụ: const fullName = " nGuyễN MẠnh hUY "
 * Kết quả: "Nguyễn Mạnh Huy"
 */


const formatFullName(fullName) => {
    fullName = fullName.trim();
    fullName = fullName.toLowerCase();
    fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

    for (let i = 1; i <= fullName.length; i++) {
        let char = fullName.charAt(i);
        if (char === " ") {
            let index = i + 1;
            fullName = fullName.slice(0, index) + fullName.charAt(index).toUpperCase() + fullName.slice(index + 1)
        }
    }

}


console.log(formatFullName(" nGuyễN MẠnh hUY "))