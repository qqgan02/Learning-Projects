const numInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

const ref = [
    {
      rom: "M",
      num: 1000
    },
    {
      rom: "CM",
      num: 900
    },
    {
      rom: "D",
      num: 500
    },
    {
      rom: "CD",
      num: 400
    },
    {
      rom: "C",
      num: 100
    },
    {
      rom: "XC",
      num: 90
    },
    {
      rom: "L",
      num: 50
    },
    {
      rom: "XL",
      num: 40
    },
    {
      rom: "X",
      num: 10
    },
    {
      rom: "IX",
      num: 9
    },
    {
      rom: "V",
      num: 5
    },
    {
      rom: "IV",
      num: 4
    },
    {
      rom: "I",
      num: 1
    },
  ]

const numToRoman = (input, index=0, result="") => {
  // Base case
  if (input < 1) {
    return result;
  }
      
  // loop until input is bigger than one of the symbols
  while (input < ref[index].num) {
    index += 1;
  }

  if (input >= ref[index].num) {
    result += ref[index].rom;
    return numToRoman(input - ref[index].num, index, result);
  }
}

const verifyInput = () => {
  if (!numInput.value) {
    outputText.innerText = "Please enter a valid number";
  } else if (numInput.value <= 0) {
    outputText.innerText = "Please enter a number greater than or equal to 1";
  } else if (numInput.value >= 4000) {
    outputText.innerText = "Please enter a number less than or equal to 3999";
  } else {
    outputText.innerText = numToRoman(numInput.value);
  }
}

convertButton.addEventListener("click", verifyInput);
