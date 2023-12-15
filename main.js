


var quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
];

var quate =document.getElementById("quote");
var auther =document.getElementById("auther");
var btn =document.getElementById("generateButton");
 
    var quoteIndex ;
    var randomIndex ;
    var selectedQuote=[]; 
      btn.onclick = function () {
        if(selectedQuote.length == quotes.length){
            selectedQuote=[];
        }
         do { randomIndex = Math.floor(Math.random() * quotes.length); 
        } while (quoteIndex == randomIndex || selectedQuote.includes(randomIndex));
        
         quoteIndex = randomIndex;
         selectedQuote.push(quoteIndex);
        console.log(selectedQuote);
         quote.innerHTML = quotes[randomIndex].quote;
         auther.innerHTML = quotes[randomIndex].author;
    }

