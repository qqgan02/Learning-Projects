const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const clearResult = () => {
  resultsDiv.textContent = "";
}

const validPhone = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }

  const regex = /^1?[\s\-]?(?:\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}\D*$/;

  if (regex.test(userInput.value)) {
    resultsDiv.textContent = "Valid US number: " + userInput.value;
  } else {
    resultsDiv.textContent = "Invalid US number: " + userInput.value;
  }
}


checkButton.addEventListener("click", validPhone);
clearButton.addEventListener("click", clearResult);
