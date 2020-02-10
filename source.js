function makeDeck() {
  var deckOfCards = new Array();
  var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  suits.forEach(suitTemp => {
    values.forEach(valueTemp => {
      var weightTemp;
      if (valueTemp == "J" || valueTemp == "K" || valueTemp == "Q") {
        weightTemp = 10;
      } else if (valueTemp == "A") {
        weightTemp = 1;
      } else {
        weightTemp = parseInt(valueTemp);
      }
      var card = { suit: suitTemp, value: valueTemp, weight: weightTemp };
      deckOfCards.push(card);
    });
  });
  console.log(deckOfCards);
}

makeDeck();
