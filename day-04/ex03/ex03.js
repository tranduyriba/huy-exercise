/***
Bài 3: Gộp giỏ hàng từ nhiều nguồn
Tình huống thực tế: Một người dùng có thể thêm sản phẩm vào giỏ hàng từ nhiều thiết bị khác nhau. Khi đăng nhập, cần gộp tất cả sản phẩm lại, tăng số lượng nếu sản phẩm trùng nhau.

Yêu cầu:
Viết hàm mergeCarts(cart1, cart2) để gộp hai giỏ hàng lại thành một.

Dữ liệu mẫu:

let cart1 = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 },
];

let cart2 = [
  { id: 1, name: "Laptop", quantity: 2 },
  { id: 3, name: "Keyboard", quantity: 1 },
];

console.log(mergeCarts(cart1, cart2));
// Kết quả mong muốn:
// [
//   { id: 1, name: "Laptop", quantity: 3 },
//   { id: 2, name: "Mouse", quantity: 2 },
//   { id: 3, name: "Keyboard", quantity: 1 }
// ]
 */

function mergeCarts(cart1, cart2) {
    let mergedCart = [...cart1];

    cart2.forEach(item2 => {
        let existingItem = mergedCart.find(item1 => item1.id === item2.id);
        if (existingItem) {
            existingItem.quantity += item2.quantity;
        } else {
            mergedCart.push(item2);
        }
    });

    return mergedCart;
}

let cart1 = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 },
];

let cart2 = [
  { id: 1, name: "Laptop", quantity: 2 },
  { id: 3, name: "Keyboard", quantity: 1 },
];

console.log(mergeCarts(cart1, cart2));
