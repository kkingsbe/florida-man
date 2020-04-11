var month = localStorage.getItem("month")
var day = localStorage.getItem("day")
let apiKey = "AIzaSyD95CPeV3wq0QPRM0XyPmYB8-h62BUffgs"
console.log(`Florida Man ${month} ${day}`)

fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=003161816120397676198:wnb8ykt3fac&q=florida man ${month} ${day}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    for(article of data.items) {
      let source = article.displayLink
      let title = article.title
      let url = article.link
      let card = $(`<div class='card' onclick=navigateTo('${url}')></div>`)
      let cardHeader = $(`<p class='card-header'>${source}</p>`)
      let cardBody = $(`<p class='card-body'>${title}</p>`)
      card.append(cardHeader)
      card.append(cardBody)
      $(".card-container").append(card)

    }
  })

function navigateTo(url) {
  window.location.href = url
}