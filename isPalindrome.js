const reverseString = require('./reverseString')

function isPalindrome(word) {

    return word.toLowerCase() === reverseString(word).toLowerCase()
    // return word.toLowerCase() === word.toLowerCase().split('').
    //     reverse().join('').replaceAll(',', '')
}

module.exports = isPalindrome