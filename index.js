// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
};


function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the global variable bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'some customer';

// Function to attempt changing the constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new customer'; // This will cause an error
}
