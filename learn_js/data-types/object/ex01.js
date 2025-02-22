// Object = Đối tượng

// Object literal: Đối tượng nguyên bản (gốc rễ)

// Function Contructor: Hàm tạo (new Number, new String)

let user = {
    name: 'Huy',
    age: 21,
    email: 'huy@gmail.com',
    address:'Ha Noi',
    "shipping-address": 'Hoai Duc',
    getName: function () {
        return ok;
    }
}

// shipping

//Thêm mới

user.height = 170;
user["weight"] = 90;
console.log(user);

// Xóa

delete user.name;
console.log(user)

for (let key in user) {
    console.log(key)
};
for (let value in user) {
    console.log(user[value])
}

// Phương thức .key

Object.key(user)