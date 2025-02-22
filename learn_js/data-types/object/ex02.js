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
        console.log("ok")
    }
}

users.getInfo();