// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract and store the command-line arguments
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: check if we have at least 2 arguments
if (args.length < 2) {
  console.log('Error: please enter at least 2 arguments');
  // stop the execution here
  // return
  // return;
  process.exit();
} 
  // iterate thoough the list of commande line arguments
  // forEach
  // c-style loop
  // for of
  // .map? => loop + transform each element => returns a new array

  // for (let i = 0= i < args.lenght; i++)
  // for of is more readable

  // make a variable to store the sum
  let total = 0;

  for (let arg of args) {
    // Convert to number
    // add the numbers
    
    const convertedNum = Number(arg);
    // Edge case: Check if each argument is a number or not

    if (isNaN(convertedNum)) {
      console.log("Error: please enter only numbers");
      process.exit();
    } 
    
    
    // Edge case: Check if the arguments are whole numbers and whether there are two arguments
    // arg % 1 === 0 => whole number
    // Number.isInteger()
    if (Number.isInteger(convertedNum)) {
      total += convertedNum;
    }
    // console.log('arg:', arg, 'Total:', total, 'type:', typeof convertedNum);
  }



  // print out the sum
  console.log('total:', total);

