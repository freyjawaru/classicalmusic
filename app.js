const API_KEY = "80oSbt3JJJUEWMEM8GBkw4G7sIl9h5ti"
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=music&api-key=${API_KEY}`
const button = document.querySelector("button")
const input = document.querySelector('input');
const articleSection = document.querySelector('.responses');


async function getData() {
  try {

    const response = await axios.get(`${BASE_URL}&fq=${input.value}`)
    removeArticlelist()
    displayArticles(response.data.response.docs)

  } catch (err) {
  }
}
 



button.addEventListener('click',getData)

  function displayArticles(articles) {
    articles.forEach((article) => {
      let articleDiv = document.createElement("div")
      articleDiv.innerHTML = `
    <a href="${article.web_url}">${article.headline.main}</a>
    <p>${article.byline.original}</p>
    <img src="https://static01.nyt.com/${article.multimedia[0].url}"/>`
      articleDiv.setAttribute(`id`, "articles")

      articleSection.append(articleDiv)
    
      })
    }


function removeArticlelist() {
 
        while (articleSection.firstChild) {
          articleSection.removeChild(articleSection.firstChild)
        }
      }
  