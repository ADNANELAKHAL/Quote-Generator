const quotecontainer = document.getElementById('quotecont');
const quotes = document.getElementById('quote');
const author = document.getElementById('author');
const playbtn = document.getElementById('anim');
const btn = document.getElementById('new_quote');
const loader = document.getElementById('loader');
const toggleswitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const twitterbnt = document.getElementById('twitter');
const draws = document.getElementById('canv');


// loding
function loading(){
    loader.hidden=false;
    quotecontainer.hidden=true;

}
function showload(){
    if(!loader.hidden){
        quotecontainer.hidden = false;
        loader.hidden = true;
    }
}
// import quote
async function callquote(){
    loading();
    const proxyurl  = 'https://cors-anywhere.herokuapp.com/';
    const apiurl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyurl + apiurl);
        const data = await response.json();
        console.log(data.quoteAuthor);
        author.innerText = data.quoteAuthor;
        quotes.innerText = data.quoteText;
    }catch(error){
        console.log(error);

    }
    showload()    
}


function tweetequote(){
    const quote = quotes.innerText;
    const Author = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');

}
twitterbnt.addEventListener('click',tweetequote);
btn.addEventListener('click', callquote);


callquote();

// Dark Mode Styles
function darkMode() {
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}
// Light Mode Styles
function lightMode() {
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}
// switch to other mode
function switchmode(event){
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}


toggleswitch.addEventListener('change',switchmode);


