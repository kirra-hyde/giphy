console.log("Let's get this party started!");

function postGiphy(giphy) {
 console.log("giphy url=", giphy.data.data[0].images.downsized.url);
  $(".giphy-canvas").append(`<img src="${giphy.data.data[0].images.downsized.url}">`);
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
  addGiphy();
  });



