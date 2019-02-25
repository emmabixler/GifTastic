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

$("button").on("click", function() {
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
      spaceImage.attr("src", results[i].images.fixed_height.url);
      spaceDiv.append(p);
      spaceDiv.append(spaceImage);
      $(".results-gif").prepend(spaceDiv);
    }
  });
});

$("#add-gif").on("click", function() {
  var input = $("#gif-input").val();
 
  $("#gif-input").val(input);

  console.log("this is running");
  console.log(input);

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    input +
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
      spaceImage.attr("src", results[i].images.fixed_height.url);
      spaceDiv.append(p);
      spaceDiv.append(spaceImage);
      $("#gifs").prepend(spaceDiv);
    }
  });
});


