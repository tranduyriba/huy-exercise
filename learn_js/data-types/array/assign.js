// Object.assign(target, ...source)

// const target = {
//     a: 1,
//     b: 2,
// };

// const source = {
//     c: 3,
//     d: 4,
// }

// const result = Object.assign(target, source); //copy nông

// const obj4 = {...obj} // Copy nông

// console.log(result)

// freeze: Đóng băng đối tượng

const obj = {
    name: "huy",
    age: 17,
    profile: {
        job: "dev",
        exp: 2,
    }

}

// Copy sâu

const obj2 = structuredClone(obj) // Cách 1

const obj3 = JSON.parse(JSON.stringify(obj)) // Cách 2



// Object.freeze(obj) // Đóng băng

Object.seal(obj) // Đống băng thuộc tính hiện có, không thể thay đổi, thêm bớt thuộc tính, có thể thay đổi giá trị

