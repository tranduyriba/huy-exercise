function printN(n) {
    if (n <= 0) {
        console.log("Vui lòng nhập vào số nguyên dương");
        return;
    }
    let row = ""
    for (let i = 1; i <= n; i++) {
            row += i + " ";
            console.log(row)
    }
}

printN(5)