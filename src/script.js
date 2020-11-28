const entryTitle = document.querySelector("#title").value;
const entryContent = document.querySelector("#entry").value;
const gratefulFor = document.querySelector("#gratefulFor").value;
const submitButton = document.querySelector(".custom-submit");
const ratingNum = 5;

// const data = {
//   title: entryTitle,
//   entry: entryContent,
//   grateful: gratefulFor,
//   rating: ratingNum,
//   date: Date.now,
// };

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(entryTitle);

  // fetch("http://localhost:3000/entries", {
  //   method: "POST",
  //   headers: {
  //     "Access-Control-Allow-Orgin": "Content-Type",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Success:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
});

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

// getRating();

// function getRating() {
//   var ele = document.getElementsByName("exampleRadios");

//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       rating = ele[i].value;
//     }
//   }
// }

// let data = {
//   title: entryTitle,
//   entry: entryContent,
//   grateful: gratefulFor,
//   rating: rating,
//   date: Date.now,
// };

// submitButton.addEventListener("click", (event) => {
//   console.log(event);
//   fetch("http://localhost:3000/entries", {
//     method: "POST",
//     headers: {
//       "Access-Control-Allow-Orgin": "Content-Type",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then(console.log("Success"));
// });
