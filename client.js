console.log('linked up');
var nameArray = ['Tom', 'David', 'Brendin', 'Ben'];

$(document).ready(function() {
  appendDOM();
  newGame();
  correctPerson();
});

// append our 4 photos onto DOM
function appendDOM() {
  $('.container').append('<div><img data-name="Tom" date-number="1" src="https://github.com/tombrossart.png" alt="Profile image of Tom"></div>');
  $('.container').append('<div><img data-name="David"  date-number="2" src="https://github.com/sohlinspire.png" alt="Profile image of David"></div>');
  $('.container').append('<div><img data-name="Brendin"  date-number="3" src="https://github.com/BrendinBarone.png" alt="Profile image of Brendin"></div>');
  $('.container').append('<div><img data-name="Ben"  date-number="4" src="https://github.com/Benjaminhaesemeyer.png" alt="Profile image of Ben"></div>');
}

// click listener that fills in random new guy in span based off of randomNumber
function newGame() {
  $('#new-game').on('click', function(){
    var ranNum = randomNumber(0, 3);
    var newGuy = nameArray[ranNum];
    $('span').text(newGuy);
    console.log(newGuy);
    console.log(ranNum);
  });
}

// click listener to determine if correct img chosen
function correctPerson() {
  $('.container').on('click', 'img', function() {
    var currentGuy = $('#current-name').text();      // how do we correctly select the current guy? this
    if($(this).data('name') === currentGuy) {
      $(this).addClass('.winner');
      $('.win').append('<div id="winner"></div>');
      $(this).animate({height: "+=300", width: "+=300"}).delay(1200).animate({height: "150", width: "150"});
    //  alert("Great Job!");
      setTimeout(resetGame, 2000);
    //  confirm("Play again! Click 'Play Again'");    //this was our basic version of prompt the player to play again
   }
    else {
      alert("Try again");
    }
    console.log(currentGuy);
  });
}

function resetGame() {
    //  $('c').remove();
     $('#new-game').click();
     $(this).removeClass('.winner');
     $('.win div').remove();
}

// random number generator
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
