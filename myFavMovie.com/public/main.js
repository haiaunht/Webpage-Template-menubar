const quotes = document.querySelectorAll(".quotes")
const displayQuote = document.getElementById("quote")
const characterQuote = document.getElementById("whosaid")
const button = document.getElementById("submit-button")

button.addEventListener("click", () => {
  let random = Math.floor(Math.random()*quotes.length)
  console.log(quotes[random])

  //parent and previous sibling
  let quote = quotes[random]
  let whosaid = quotes[random].parentElement.previousElementSibling

  console.log(whosaid)

  displayQuote.innerHTML = quote.textContent 
  characterQuote.innerHTML = `By ${whosaid.textContent}`

})


let synopsisButton = document.getElementById("synopsis")
synopsisButton.addEventListener("click", () => {
  document.getElementById("synopsis").classList.toggle(".hidden")
})
