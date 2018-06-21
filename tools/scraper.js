var cheerio = require("cheerio");

module.exports = function(html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  let results = [];

  $("article").each(function(i, element) {
    let title = $(element)
      .children("a")
      .attr("aria-label");
    let link =
      "https://www.economist.com" +
      $(element)
        .children("a")
        .attr("href");

    console.log(title + " " + link);

    if (title) {
      results.push([title, link]);
    }
  });

  return results;
};
