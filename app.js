console.log("Let's get this party started!");

$("submit").on("click", addGiphy)

async function addGiphy() {
  let searchTerm = $("submit").val();
  let giphy = await axios(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  $()
}