var quote = '';
var selectedQuote;
//select one quote randomly from "quotes" array
function getRandomQuote(){
return quotes[Math.floor(Math.random() * quotes.length )];
}
//print the selected quote on a screen
function printQuote(quote){
  selectedQuote = getRandomQuote();
    quote += '<p class="quote">' + selectedQuote.quote + '</p>';
    quote += '<p class="source">' + selectedQuote.source + '</p>';
  var quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = quote;
}
printQuote(quote);
