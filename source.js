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
  return shuffleDeck(deckOfCards);
}

function shuffleDeck(deck) {
  var i = 0;
  while (i < 1000) {
    var card1 = Math.floor(Math.random() * 52);
    var card2 = Math.floor(Math.random() * 52);
    var tempCard = deck[card1];
    deck[card1] = deck[card2];
    deck[card2] = tempCard;
    i++;
  }

  return deck;
}
function updatePlayerTotal(playersHand) {
  var total = 0;
  playersHand.forEach(card => {
    total += card.weight;
    $("#playerTotal").text("Player Total: " + total);
  });
}
var deck = makeDeck();
var dealersHand = new Array();
var playersHand = new Array();
playersHand.push(deck.pop());
dealersHand.push(deck.pop());
playersHand.push(deck.pop());
dealersHand.push(deck.pop());
$("#playerC0").append(playersHand[0].value + " " + playersHand[0].suit);
$("#dealerC0").append("Face Down");
$("#playerC1").append(playersHand[1].value + " " + playersHand[1].suit);
$("#dealerC1").append(dealersHand[1].value + " " + dealersHand[1].suit);
updatePlayerTotal(playersHand);
$("#dealerTotal").text("Dealers Total: " + dealersHand[1].weight);

var cardIndex = 1;
document.getElementById("hitBtn").addEventListener("click", function() {
  if (cardIndex < 4) {
    cardIndex++;
    playersHand.push(deck.pop());
    $("#playerC" + cardIndex).append(
      playersHand[cardIndex].value + " " + playersHand[cardIndex].suit
    );
    updatePlayerTotal(playersHand);
  } else {
    alert("Can't have more than 5 cards");
  }
});

document.getElementById("standBtn").addEventListener("click", function() {
  $("#dealerC0").text(dealersHand[0].value + " " + dealersHand[0].suit);
  var cardIndex = 1;
  while (getDealerTotal(dealersHand) < 17) {
    cardIndex++;
    dealersHand.push(deck.pop());
    $("#dealerC" + cardIndex).append(
      dealersHand[cardIndex].value + " " + dealersHand[cardIndex].suit
    );
  }
});

function getDealerTotal(dealersHand) {
  var total = 0;
  dealersHand.forEach(card => {
    total += card.weight;
    $("#dealerTotal").text("Dealers Total: " + total);
  });
  return total;
}
console.log(deck);
