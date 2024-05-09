// trying to make palindrome checker

const input = document.getElementById('input');

function reverseString(str) {
    return str.split('').reverse().join('');
}

function check() {
    const value = input.value.toLowerCase();
    const reverse = reverseString(value);

    if(value.toUpperCase().toLowerCase() === reverse) {
        document.getElementById('outputText').innerHTML = `<span style="color: rgb(166, 218, 149)"> ${value} </span> is a palindrome!`;
    } else {
        document.getElementById('outputText').innerHTML = `<span style="color: rgb(230, 69, 83)"> ${value} </span> is not a palindrome!`;
    }

    if(value === "") document.getElementById('outputText').innerHTML = ' <span style="color: rgb(231, 130, 132)"> please type something first!!! </span>';

    input.value = "";
}