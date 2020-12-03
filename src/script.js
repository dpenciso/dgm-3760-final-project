const entryTitle = document.querySelector("#title");
const entryContent = document.querySelector("#entry");
const gratefulFor = document.querySelector("#gratefulFor");
const submitButton = document.querySelector(".custom-submit");
const ratingNum = 5;


async function submitEntry() {
  const data = {
    title: entryTitle.value,
    entry: entryContent.value,
    grateful: gratefulFor.value,
    rating: ratingNum,
    date: Date.now,
  };
  console.log(data)
  await fetch('http://localhost:3000/entries', {
      method: 'POST',
      headers: { 'Access-Control-Allow-Orgin': 'Content-Type', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  }).then(response => response.json())
  .then(data => {
      console.log(data)
  })
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  submitEntry()
});



