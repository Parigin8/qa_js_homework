var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function isValidEmail(email) {
    let Pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    return Pattern.test(email);
}

let trustedEmails = [];

for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    if (isValidEmail(person.email)) {
        trustedEmails.push(person.email);
    }
}

console.log(trustedEmails);
