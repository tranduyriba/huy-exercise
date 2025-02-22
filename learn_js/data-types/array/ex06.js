// Deep Copy and Shallow Copy

// 1. Shallow copu (copy nông)

const obj1 = {
    name: "Huy",
    age: 21,
    profile: {
        job: "Dev",
        exp: 1,
    }
}
const obj2 = {
    name: "Duy",
    age: 24,
    profile: {
        job: "Dev",
        exp: 1,
    }
}

const obj3 = JSON.parse(JSON.stringify(obj1));

