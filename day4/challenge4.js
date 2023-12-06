const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = readFile("./challenge4.txt");

const inputArr = input.split("\r\n");

//console.log(inputArr);

const partOne = () => {
  let points = 0;
  let data = inputArr.map((card) => card.split(" | "));
  //console.log(data);

  data = data.map((s) => {
    //console.log(s);

    const wins = s[0].split(" ").map((stringNumber) => Number(stringNumber));
    //console.log("Wins: ", wins);
    const card = s[1].split(" ").map((stringNumber) => Number(stringNumber));
    //console.log("Card: ", card);

    return [wins, card];
  });

  data.forEach((game) => {
    let winsOnCard = 0;
    //console.log("Game: ", game);
    const wins = game[0];
    const card = game[1];

    wins.forEach((win) => {
      if (card.includes(win)) {
        winsOnCard = winsOnCard == 0 ? 1 : winsOnCard * 2;
      }
    });
    points += winsOnCard;
  });
  //console.log("Wins on Card: ", winsOnCard);
  // console.log(data);
  console.log("points: ", points);
};

partOne();
