function isPerfectNumber(n) {
    if (n <= 0) {
        return "So vua nhap Khong phai so hoan hao"
    }
    let sum = 0;
    for (let i = 0; i <= n/2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return `${n} la so hoan hao`
    } else {
        return `${n} khong phai so hoan hao`
    }
}

console.log(isPerfectNumber(28));