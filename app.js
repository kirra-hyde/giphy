"use strict";

console.log("Let's get this party started!");

/** postGiphy: Post each gif to the gif canvas on the DOM */
function postGiphy(giphy) {
  $(".giphy-canvas").append(`<img src="${giphy.data.data[0].images.downsized.url}">`);
}

/** addGiphy: Get search value and send request for gif matching value */
async function addGiphy(event) {
  event.preventDefault();
  let searchTerm = $("#search-term").val();

  let giphy = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}
  &api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1`);

  postGiphy(giphy);
}

$("#submit").on("click", addGiphy);

/** deleteGiphy: Delete all gifs in giphy-canvas */
  function deleteGiphy() {
    $(".giphy-canvas").empty();
  }

$("button").on("click", deleteGiphy);




