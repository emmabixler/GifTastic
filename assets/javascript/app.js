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
});
