// six quotes to be selected randomly
var quotes = [
  ["If you're going through hell, keep going.", "Winston Churchill","",""],
  ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Mark Twain","1904",""],
  ["Fall seven times and stand up eight.", "Japanese Proverb","",""],
  ["Tomorrow belongs to those who can hear it coming","David Bowie","",""],
  ["All you need is love. But a little chocolate now and then doesn't hurt.","Charles Schulz","",""],
  [ "Love is a smoke and is made with the fume of sighs.","William Shakespeare", "",""]
];

function getRandomQuotes(){
return quotes[Math.floor(Math.random() * quotes.length )];
}
function printQuote(){
  var quoteBoxDiv = document.getElementById('quote-box').innerHTML;
  quoteBoxDiv.innerHTML = <p class="quote"></p>
                          <p class="source"></p>
                          <span class="citation"> </span>
                          <span class="year"> </span>
}
printQuote(getRandomQuotes());










// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
