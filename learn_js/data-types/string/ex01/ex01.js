let fullName = "Nguyễn Mạnh Huy";

let length = fullName.length;
console.log(length);

for (let i = 0; i <= length; i++) {
    if (fullName[i] >= 97 ) {
        console.log("Tên không được viết hoa toàn bộ")
    } else {
        console.log("Tên được viết hoa toàn bộ")
    }
}