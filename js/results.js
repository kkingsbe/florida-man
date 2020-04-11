var month = localStorage.getItem("month")
var day = localStorage.getItem("day")
var key = "8281d9210268d55e2121e39e823fec75"
console.log(`Florida Man ${month} ${day}`)
fetch(`https://gnews.io/api/v3/search?q=florida+man+${month}&token=${key}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(article of data.articles) {
      let source = article.source.name
      let title = article.title
      let url = article.url
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