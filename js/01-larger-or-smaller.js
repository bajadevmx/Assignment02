let num1 = prompt('Enter one number?')
let num2 = prompt('Enter a second number?')
if (num1 > num2){
    document.write(`${num1} is greater than ${num2}`)
   }   else if (num1 < num2){
        document.write(`${num1} is smaller than ${num2}`)
    }   else {
        document.write(`${num1} is equal to ${num2}`)
    }