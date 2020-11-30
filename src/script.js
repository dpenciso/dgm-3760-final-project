const entryTitle = document.querySelector("#title");
const entryContent = document.querySelector("#entry");
const gratefulFor = document.querySelector("#gratefulFor");
const submitButton = document.querySelector(".custom-submit");
const ratingNum = 5;



submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const data = {
    title: entryTitle.value,
    entry: entryContent.value,
    grateful: gratefulFor.value,
    rating: ratingNum,
    date: Date.now,
  };
  console.log(data);

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
