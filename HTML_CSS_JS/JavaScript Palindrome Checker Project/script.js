const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function cleanInputText(text) {
    const regex = /\W|_/g;
    return text.replace(regex, '').toLowerCase();
}

function verifyInput() {
    //resultText.innerText = cleanInputText(textInput.value);
    if (!textInput.value) {
        alert("Please input a value");
        return;
    }

    let isPalindrome = 1;
    const pString = cleanInputText(textInput.value);
    for (let i = 0; i < pString.length; i++) {
        if (pString[i] !== pString[pString.length - 1 - i]) {
            isPalindrome = 0;
            break;
        }
        if (i >= pString.length - 1 - i){
            break;
        }
    }

    if (isPalindrome) {
        resultText.innerText = textInput.value + " is a palindrome";
    } else {
        resultText.innerText = textInput.value + " is not a palindrome";
    }
}

checkButton.addEventListener("click", verifyInput);
