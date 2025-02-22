// Prototype

let users = {
    name: 'Huy',
    email: 'huy@gmail.com',
    detail: {
        age: 21,
        job: "Dev",
        history: [
            {
                year: 2020,
                name: "Job 1",
            },
        ],
    },
    getInfo: function() {
        return this.name + " " + this.email
    }
}

let users2 = {
    name: 'Duy',
    email: 'Duy@gmail.com',
    detail: {
        age: 21,
        job: "Dev",
        history: [
            {
                year: 2020,
                name: "Job 1",
            },
        ],
    },
    getInfo: function() {
        return this.name + " " + this.email
    }
}


Object.prototype.getInfo =  function(name, email) {
    return name + " " + email;
}

let info = users.getInfo(users.name, users.email);
let info2 = users2.getInfo();

console.log(info);
console.log(info2);