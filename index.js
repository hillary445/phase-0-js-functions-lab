//Function to calculate 10% of tax on amount
function calculateTax(amount){
    let taxValue = amount * (10/100)
    return taxValue;
}
//Function to convert to upper case
function convertToUpperCase(text){
    upperCase = text.toUpperCase();
    return upperCase;
}
//Function to find the maximum number
function findMaximum(num1, num2){
    if (num1 > num2){
        return num1 ;
    }else 
        return num2 ;
}
//Function to return a boolian if conditions are met
function isPalindrome(word){
    let rev = word.split("").reverse().join("");
    if (rev == word){
        return true
    }
        return false
}
//Funtion to calculate the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage){
    if (discountPercentage >= 100) {
        console.error("Invalid discount percentage");
    }
    let discountAmount = (originalPrice * (discountPercentage / 100));

    let finalPrice = (originalPrice - discountAmount)

    return finalPrice;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };