const cards = [
    'chinese-fortune-reading-cards-14952.png',
    'chinese-fortune-reading-cards-14953.png',
    'chinese-fortune-reading-cards-14954.png',
    'chinese-fortune-reading-cards-14955.png',
    'chinese-fortune-reading-cards-14956.png',
    'chinese-fortune-reading-cards-14957.png',
    'chinese-fortune-reading-cards-14958.png',
    'chinese-fortune-reading-cards-14959.png',
  ];

//create a div for the new card
  const $newCard = $('<div>');

//create class for div
  $newCard.addClass('new-card');

//append new div
  $('main').append($newCard);

//create h3 tag WITH TEXT for "add a card"
  const $h3 = $('<h3>');

//h3 text
  $h3.text('Pull A Fortune Card');

//append h3 tag to div
  $newCard.append($h3);

//ADDING CARDS

  //function that will be used to add a new div each time 
const randomCard = () => {
//create a new div every time the function runs
const $oracleCards = $('<div>');

    //appends that div to the main tag 
    $('main').append($oracleCards);

    //add new class
    $oracleCards.addClass('oracle-cards');

    //gotta get a random index so that the cards are randomized
    const index = Math.floor((Math.random()*cards.length));

    console.log(cards[index])

    $oracleCards.css('background-image', `url(${cards[index]})`);
  }

//PLEASE WORK!

  $newCard.on('click', 
    (event) => {
    console.log('event');

    randomCard()
});

  