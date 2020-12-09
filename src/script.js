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

submitButton.addEventListener("click", submitEntry)

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

        <button type="button" class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter${entry.date}">
          View Entry
        </button>

        <div class="modal fade" id="exampleModalCenter${entry.date}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">${entry.title}</br>(${entry.date.slice(0,10)})</br>${entry.rating}/5</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ${entry.entry}</br></br>Today I am grateful for ${entry.grateful}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="deleteEntry()">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      html += htmlSegment;
  });

  let loadedEntries = document.querySelector('.loadedEntries');
  loadedEntries.innerHTML = html;
}

renderEntries();

function thisone() {
  console.log("working")
}

function deleteEntry() {
  return fetch('/entries/:id', {
      method: 'DELETE',
  }).then(response => response.json())
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}