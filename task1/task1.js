// <!-- javaScript file -->

const input = document.querySelector('input');
const button = document.querySelector('button');
const addListItem = document.querySelector('div ul');
let userInput = input.length;

//function that appends lists
button.addEventListener('click', toggle_btn = () => {
    if (input.value == '') {
        alert("!Oops, you must enter into input field");
    }
    else {
        let list = document.createElement('li'); //creating li element
        list.textContent = `${input.value}`; //inserting userinputs fron the inpur field into textcontant of the list
        addListItem.append(list); //appends or adding the list item below the existing list-items
        clear();
    }
});
// this function clears the input field for next time
const clear = () => {
    input.value = '';
}

