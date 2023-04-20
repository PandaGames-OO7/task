//getting the id of span tag 
let result = document.querySelector('#result');
//Taking User input and convert them into integer
const number_1 = parseInt(prompt('Enter first Number'));
const number_2 = parseInt(prompt('Enter second Number'));
const number_3 = parseInt(prompt('Enter third Number'));

//defining function
const lessThanHund = (num1, num2, num3) => {
    let sum = (num1 + num2 + num3);
    console.log(sum)
    if (sum < 100) {
        return true;
    }
    else {
        return false;
    }
};

// outputing result by calling function and storing its output
result.innerHTML = `lessThanHund (${number_1}, ${number_2}, ${number_3}) -> ${lessThanHund(number_1, number_2, number_3)}`; 