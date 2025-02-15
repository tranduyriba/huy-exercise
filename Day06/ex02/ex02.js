const users = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];

function getAllEmails(users) {

    return users.reduce((emails, user) => {
        emails.push(user.email);
        return emails;
    }, [])
}

const emails = getAllEmails(users);

console.log(emails)