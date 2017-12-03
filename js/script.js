var randomQuote = "";
var selectedQuote;
//select one quote randomly from "quotes" array
function getRandomQuote(){
return quotes[Math.floor(Math.random() * quotes.length )];
}
//print the selected quote on a screen
function printQuote(randomQuote){
  var quote = "";
  selectedQuote = getRandomQuote();
    quote += '<p class="quote">' + selectedQuote.quote + '</p>';
    quote += '<p class="source">' + selectedQuote.source
      quote += '<span class="citation">' + selectedQuote.citation + '</span>'
      quote += '<span class="year">' + selectedQuote.year + '</span></p>';
  var quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = quote;
  quote = randomQuote;
}
printQuote(randomQuote);
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
