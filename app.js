console.log("Let's get this party started!");

async function postGiphy(giphy) {
  $("#giphy-canvas").append(`<img src="${giphy.url}">`);
}


async function addGiphy() {
  let searchTerm = $("#search-term").val();
  console.log(searchTerm);
  let giphy = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1`);
  console.log(giphy.data);
  postGiphy(giphy);
}

$("#submit").on("click", function(e){
  e.preventDefault();
  addGiphy();});

