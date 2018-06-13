var cheerio = require("cheerio");

module.exports = function(html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  $("article").each(function(i, element) {
    var title = $(element)
      .children("a")
      .attr("aria-label");
    var link =
      "https://www.economist.com" +
      $(element)
        .children("a")
        .attr("href");

    if (title) {
      results.push([title, link]);
    }
  });

  console.log(results);
  return results;
};
