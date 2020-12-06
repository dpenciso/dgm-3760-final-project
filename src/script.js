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
  submitEntry()
});

async function getEntries() {
  let url = '/entries';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderEntries() {
  let entries = await getEntries();
  let sortedEntries = entries.reverse()
  let html = '';
  sortedEntries.forEach(entry => {
      let htmlSegment = `<div class="card custom-card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${entry.title}</h3>
        <h5 class="card-title">${entry.date.slice(0,10)}</h5>
        <p class="card-text">${entry.entry.slice(0,50)}...</p>
        <h6 class="card-subtitle mb-2 text-muted">Rating: ${entry.rating}</h6>
        <a href="#" class="card-link">View/Edit</a>
      </div>
    </div>`;
      html += htmlSegment;
  });

  let loadedEntries = document.querySelector('.loadedEntries');
  loadedEntries.innerHTML = html;
}

renderEntries();


