// /**
//  * Hàm tạo luôn được viết Hoa chữ cái đầu
//  */

// function User(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// const user1 = new User("Duy", 25, "Dev")

// console.log(user1)

// function = Person(name) {
//     this.name = name;
// }

// Person.prototype.sayhi = function () {
//     console.log(`Hi ${this.name}`)
// }
// const huy = new Person("Huy");

// huy.sayhi();

// // Computed Property Name (Tên Thuộc tính động)

// const property = "name";

// const user3 = {
//     firstName: "Nguyen";
//     [property]: "Huy";
// }

// console.log(user)

// // Khi nào dùng COnst và let ()

// console.log(Object.keys(user1)) //Trả về các key của 1 Đối tượng;
// console.log(Object.values(user1)) //Trả về các giá trị của Value;
// console.log(Object.entries(user1)) //Trả về 1 mảng


// Bài tập ứng dụng:
// Viết 1 hàm kiểm tra xem đối số truyền vào có phải là 1 Object hay không?

// function isObject(value) {
//    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//     return "Đối số truyền vào là Object"
//    } else {
//     return "Đối số truyền vào KHÔNG PHẢI là Object"
//    }
// }

// console.log(isObject(23))

// Bài tập 2: 

// const options = {
//     limit: 20,
//     page: 1,
//     keyword: "du an 1",
//     category: "Fairy tail"
// }

// function query(limit, page, keyword) {
//     options.limit = limit;
//     options.page = page;
//     options["keyword"] = keyword
//     console.log(options)
//     return `?limit=${options["limit"]}&page=${options["page"]}&keyword=${options["keyword"].replaceAll(" ", "+")}`
// }

// console.log(query(30, 2, "du an 2"))

// console.log(`?${Object.entries(options).map((item) => {
//     return item.join("=");
// }).join("&").replaceAll(" ", "+")}`
// )

// Chuyển đổi chuỗi thành mảng

// const queryString = "?limit=20&page=1&keyword=du+an+1&category=Fairy+tail";

// // const object5 = {
// //     limit,
// //     page,
// //     keyword,
// // }
// let temp = queryString.replaceAll("+", " ").split("&")
// console.log(temp.forEach((item) => {
//     return item.split("=");
// }))
// // console.log(Object.fromEntries(temp))


