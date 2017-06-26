console.log('linked up');
var nameArray = ['Tom', 'David', 'Brendin', 'Ben'];
var ranNum = randomNumber(1,4);

$(document).ready(function() {
  $('.container').append('<div><img data-name="Tom" date-number="1" src="https://github.com/tombrossart.png" alt="Profile image of Tom"></div>');
  $('.container').append('<div><img data-name="David"  date-number="2" src="https://github.com/sohlinspire.png" alt="Profile image of David"></div>');
  $('.container').append('<div><img data-name="Brendin"  date-number="3" src="https://github.com/BrendinBarone.png" alt="Profile image of Brendin"></div>');
  $('.container').append('<div><img data-name="Ben"  date-number="4" src="https://github.com/Benjaminhaesemeyer.png" alt="Profile image of Ben"></div>');

  console.log($('img').data("name"));

console.log(randomNumber.data(1,4));
});


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
