const API_KEY = "80oSbt3JJJUEWMEM8GBkw4G7sIl9h5ti"
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=music&api-key=${API_KEY}`
const button = document.querySelector("button")
const input = document.querySelector('input');
const articleSection = document.querySelector('#article-list');


async function getData() {
  let response = await axios.get(`${BASE_URL}&fq=${input.value}`)
  removeArticlelist()
  displayArticles(response.data.response.docs)
}


button.addEventListener('click',getData)

function displayArticles(articles) {
  articles.forEach((article) => {
    console.log(article)
    let articleDiv = document.createElement("div")
    articleDiv.innerHTML = `
    <h2>${article.headline.main}</h2>
    <p>${article.byline.original}</p>
    <img src="https://static01.nyt.com/${article.multimedia[0].url}"/>`
    articleDiv.setAttribute (`id`, "articles")

    articleSection.append(articleDiv)
    console.log(articleSection)
  })
}


function removeArticlelist() {
  const oldArticles = document.getElementById("article-list")
  while (oldArticles.firstChild) {
    oldArticles.removeChild(oldArticles.firstChild)
  }
  // oldArticles.querySelectorAll("*").forEach(n=>n.remove())
}
  