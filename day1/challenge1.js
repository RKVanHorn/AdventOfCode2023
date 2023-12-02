const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = readFile("./challenge1.txt");

//const inputArr = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

const inputArr = input.split("\r\n");
let numInputArr = [];

// for (i = 0; i < numInputArr.length; i++) {
//   //console.log("it includes 4");
//   let newWord = numInputArr[i].replace("four", "4");
//   numInputArr.splice(i, 1, newWord);
// }
// const numberArr = [
//   "two1nine",
//   " eightwothree",
//   "abcone2threexyz",
//   " xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];

/**Part two solution */
inputArr.forEach((str) => {
  str = str
    /** I copied the top three from someone else's solution
     * as I wasn't sure how to handle the edge cases.
     * I know there are better ways than to hard code the edge cases */
    .replaceAll("eightwo", "82")
    .replaceAll("twone", "21")
    .replaceAll("oneight", "18")
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9");

  numInputArr.push(str);
  return numInputArr;
});
//console.log(numInputArr);

/**Part 1 solution */

let numArr = [];

numInputArr.forEach((str) => {
  let tempArr = str.split("").filter(Number);
  numArr.push(parseInt(tempArr[0] + tempArr[tempArr.length - 1]));
});

//console.log(numArr);

const sum = numArr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
