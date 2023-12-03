const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = readFile("./challenge2.txt");

const inputArr = input.split("\r\n");

//console.log(inputArr);

const partOne = () => {
  const maxCubes = { red: 12, green: 13, blue: 14 };
  let total = 0;

  inputArr.map((game, index) => {
    let possible = true;
    let draws = game.split("; ");
    console.log("Game Id: ", index + 1);
    //console.log(draws);

    draws.forEach((handfull) => {
      const hand = handfull.split(", ");
      console.log(hand);

      hand.forEach((cube) => {
        //console.log("cube:", cube);
        const [number, color] = cube.split(" ");
        //console.log(number, color);
        if (Number(number) > maxCubes[color]) {
          possible = false;
          console.log("not possible");
        }
      });
    });
    if (possible) {
      console.log("possible");
      total += index + 1;
    }
    console.log("Total: ", total);
  });
};

partOne();

const partTwo = () => {
  let powerSum = 0;

  inputArr.map((game, index) => {
    let minCubes = { red: 0, green: 0, blue: 0 };
    let draws = game.split("; ");
    console.log("Game Id: ", index + 1);
    //console.log(draws);

    draws.forEach((handfull) => {
      const hand = handfull.split(", ");
      console.log(hand);

      hand.forEach((cube) => {
        //console.log("cube:", cube);
        const [number, color] = cube.split(" ");
        //console.log(number, color);

        if (Number(number) > minCubes[color]) {
          minCubes[color] = Number(number);
        }
      });
      console.log(minCubes);
    });

    console.log("Min cube values: ", Object.values(minCubes));
    powerSum += Object.values(minCubes).reduce((a, c) => a * c, 1);
    console.log("PowerSum: ", powerSum);
  });
};

partTwo();
