// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        // grabbing the data. Each of these is an array of article objects
        const bp = data.data.articles.bootstrap;
        const js = data.data.articles.javascript;
        const jquery = data.data.articles.jquery;
        const node = data.data.articles.node;
        const tech = data.data.articles.technology;

        //creates each article headline, photo, authorName
        bp.forEach(article => {
            cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
        js.forEach(article => {
            cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
        jquery.forEach(article => {
            cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
        node.forEach(article => {
            cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
        tech.forEach(article => {
            cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    })

// This function creates an article card, with 3 three parameter
function createCard(headlineStr, imageUrl, authorStr){
    // creates elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const attrib = document.createElement('span');
    
    // classes; set the styles
    card.classList.add('card');
    headline.classList.add('headline');
    imgContainer.classList.add('img-container');
    author.classList.add('author');
    
    // sets the content
    headline.textContent = headlineStr;
    img.src = `${imageUrl}`;
    attrib.textContent = `By ${authorStr}`;

 // puts together; html structure    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(attrib);

    return card;
}