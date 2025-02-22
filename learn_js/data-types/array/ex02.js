function sortName(customers) {
    return customers.sort((a, b) => {
        let nameA = a.split(" ").pop().toLowerCase().split("").shift().at(-2).toLowerCase().split("").shift();
        let nameB = b.split(" ").pop().toLowerCase().split("").shift().at(-2).toLowerCase().split("").shift();

        if (nameA < nameB) {
            return -1;
        }

    })
}


let customers = [
  "Trần Ngọc Duy",
  "Nguyễn Mạnh Huy",
  "Nguyễn Nhật Huy",
  "Tạ Hoàng An",
  "Đặng Ngọc Sơn",          
  "Phan Tuấn Mạnh",
  "Ngô Văn Công",
  "Nguyễn Minh Hoàng",
];

console.log(sortName(customers))