const customerEmailArray = [];

let customerEmails = customers.forEach((customer) => {
    customer.contacts.email.map((email) => customerEmailArray.push(email));
})

console.log(customerEmailArray)
