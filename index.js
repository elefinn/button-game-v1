import "./styles.css";

let quotes = ['I told you not to push,',
'You suck at listening',
'Your a dick',
'What is wrong with you?',
'Your momma has chest hair',
'Stop touching me!',
'Imma beat you like a red-headed stepchild.',
'Im gonna fuck you up if you push that button one more time',
'Thats it, this is your last chance',
'This is why you cant have nice things',
'You know what? I hate you.',
'Dont you ever get tired of being hated?'
]


let button = document.getElementById('btn')
button.addEventListener('click', function(){
document.getElementById('display').innerHTML = newQuote();});

let display = document.getElementById("display")

function newQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  let nextQuote = quotes[randomNumber];
  return nextQuote}
