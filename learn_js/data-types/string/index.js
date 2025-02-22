// Chuỗi (String): Nguyên thủy
/**
 * - Tập hợp các ký tự
 * - Để xử lý chuỗi thì cần:
 * -- Học các hàm để xử lý chuỗi
 * -- Tìm một số giải thuật liên quan đến chuỗi
 * -- Cách đọc các ký tự trong chuỗi
 */

// Khai báo chuỗi

let string = "Duy"
let temp = String("Duy")
let temp2 = new String("Duy");

//Các thuộc tính và phương thức
// 1.  .length -> Trả về độ dài

console.log("Duy".length)

// 2. charAt(index) => Trả về ký tự tại vị trí index (index bắt đầu từ 0)

// 3. charCodeAt(index) => Trả về mã ASCII của ký tự theo index

console.log(temp.charCodeAt(3));

// 4. Hàm concat(value1, value 2,...) dùng để nối các chuỗi lại với nhau

//5. indexOf(value) => Trả về index của ký tự đầu tiên được tìm thấy . Nếu không tìm thấy sẽ trả về -1

//6. lastIndex(value) => Trả về index của ký tự cuối cùng được tìm thấy. Nếu không tìm thấy sẽ trả về -1

// 7. includes(value) => Tìm chuỗi con trong chuỗi cha và trả về true/false

//8. slice(start, end) => Trả về 1 chuỗi được cắt từ chuỗi cha bắt đầu từ vị trí start cho đến end-1

// 9. replace(search, with) => Tìm kiếm chuỗi thứ đầu tiên được tìm thấy trong chuỗi cha và thay thế chuỗi thứ 2 vào chuỗi cha

// 10. replaceAll(search, with) => Thay thế chuỗi thứ 2 vào toàn bộ chuỗi được tìm thấy trong chuỗi cha

// 11. split() => Tách chuỗi thành mảng với ký tự đưa vào.

//12. toLowerCase và toUpperCase => Chuyển toàn bộ thành chữ thường hoặc chữ HOA

// 13. trim() => Loại bỏ khoảng trắng ở hai đầu ký tự. Hoặc dùng trimStart() hoặc trimEnd() để loại bỏ khoảng trống ở vị trí tương ứng.

// Bài tập: Cắt username của email

let email = "huynm@fullstack.edu.vn"

let index = email.indexOf('@');
console.log(index);

let useName = email.slice(0, index);

console.log(userName)


// Kiểm tra 1 chuỗi có được viết hoa toàn bộ hay không


