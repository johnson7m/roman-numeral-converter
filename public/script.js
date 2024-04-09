const numberInput = document.getElementById('number'); 
const convertBtn = document.getElementById('convert-btn');
const convertBtn2 = document.getElementById('convert-btn2');
const results = document.getElementById('output');
const objectArr = [
  {
    number: 1,
    numeral: 'I',
  },
  {
    number: 4,
    numeral: 'IV',
  },
  {
    number: 5,
    numeral: 'V',
  },
  {
    number: 9,
    numeral: 'IX',
  },
  {
    number: 10,
    numeral: 'X',
  },
  {
    number: 40,
    numeral: 'XL',
  },
  {
    number: 50,
    numeral: 'L',
  },   
  {
    number: 90,
    numeral: 'XC',
  },
  {
    number: 100,
    numeral: 'C',
  },
  {
    number: 400,
    numeral: 'CD',
  },
  {
    number: 500,
    numeral: 'D',
  },
  {
    number: 900,
    numeral: 'CM',
  },
  {
    number: 1000,
    numeral: 'M',
  }               
]




convertBtn.addEventListener('click', () => {
  const inputVal = numberInput.value;
  const validationMessage = isValid(inputVal);
  
  if (validationMessage) {
    results.innerText = validationMessage;
  }
  else {
    const romanNumeral = convertToRoman(inputVal);
    results.innerText = romanNumeral;
  }

});


function isValid(value) {
  const num = Math.floor(parseInt(value, 10));
  if (isNaN(num)) {
    return "Please enter a valid number";
  }
  if (num > 3999) {
     return "Please enter a number less than or equal to 3999";
  } else if (num < 1) {
    return "Please enter a number greater than or equal to 1";
  }
  return null; 
}



function convertToRoman(num) {
  let result = '';

  for (let i = objectArr.length - 1; i >= 0; i--) {
    while (num >= objectArr[i].number) {
      result += objectArr[i].numeral;
      num -= objectArr[i].number;
    }
  }

  return result;
}