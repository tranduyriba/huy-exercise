const data = [];

function handleRegister(name, password, email) {
    if (!name, !email, !password) {
        return ("Dữ liệu nhập vào chưa đầy đủ")
    }

    const user = {
        name,
        password,
        email,
        role: "user"
    }

    data.push(user)

}

function handleLogin(email, password) {
    let user = data.find(user => email === user.email && password === user.password)
    if (user) {
        return user;
    } else {
        console.log("Thông tin đăng nhập không hợp lệ");
        return null;
    }

}

const dataRegister1 = handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
const dataRegister2 = handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("Dữ liệu đã đăng ký:", data);
console.log("Thông tin đăng nhập:", dataLogin);
