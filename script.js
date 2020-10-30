const quotecontainer = document.getElementById('quotecont');
const quotes = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('new_quote');
const loader = document.getElementById('loader');

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
    showload();
    
}


btn.addEventListener('click', callquote);


callquote();



