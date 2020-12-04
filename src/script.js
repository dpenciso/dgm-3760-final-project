const entryTitle = document.querySelector("#title");
const entryContent = document.querySelector("#entry");
const gratefulFor = document.querySelector("#gratefulFor");
const submitButton = document.querySelector(".custom-submit");
const ratingNum = 5;


function submitEntry() {
  const entryInfo = {
    title: entryTitle.value,
    entry: entryContent.value,
    grateful: gratefulFor.value,
    rating: ratingNum
  };
  console.log(entryInfo)
  fetch('/entries', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(entryInfo)
  }).then(response => response.json())
  .then(data => {
      console.log(data)
  })
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  submitEntry()
});



