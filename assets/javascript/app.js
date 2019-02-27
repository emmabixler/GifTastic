var topics = [
  "moon",
  "sun",
  "alien",
  "planet",
  "space",
  "galaxy",
  "stars",
  "astronomy",
  "astronaut",
  "spaceship"
];

$(".search-button").on("click", function() {
  var space = $(this).attr("data-space");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    space +
    "&api_key=UMubgLO5ShhuaMB3twPsPk6tgGw46IN7";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var spaceDiv = $("<div>");
      var p = $("<p>").text("Rating" + results[i].rating);
      var spaceImage = $("<img>");
      spaceImage.attr("id", "div" + i);
      spaceImage.attr("src", results[i].images.fixed_height_still.url);
      spaceDiv.append(p);
      spaceDiv.append(spaceImage);
      $(".results-gif").prepend(spaceDiv);
    }
  });
});

$(".add-gif").on("click", function(e) {
  e.preventDefault();
  //stopping the default action
  var value = $(".add-gif").val();

  console.log(value);
  console.log("clicked");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    value +
    "&api_key=UMubgLO5ShhuaMB3twPsPk6tgGw46IN7";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(response);
    for (var i = 0; i < results.length; i++) {
      console.log("im in the for loop");
      var spaceDiv = $("<div>");
      var p = $("<p>").text("Rating" + results[i].rating);
      var spaceImage = $("<img>");
      spaceImage.attr("src", results[i].images.fixed_height.url);
      spaceDiv.append(p);
      spaceDiv.append(spaceImage);
      $(".results-gif").prepend(spaceDiv);
    }
  });
});
