const cards = [
    'clair-de-lune-lenormand-14152.jpeg',
    'clair-de-lune-lenormand-14153.jpeg',
    'clair-de-lune-lenormand-14154.jpeg',
    'clair-de-lune-lenormand-14155.jpeg',
    'clair-de-lune-lenormand-14156.jpeg',
    'clair-de-lune-lenormand-14157.jpeg',
    'clair-de-lune-lenormand-14158.jpeg',
    'clair-de-lune-lenormand-14159.jpeg',
    'clair-de-lune-lenormand-14160.jpeg',
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
  $h3.text('Pull 7 Oracle Cards');

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

