$(document).ready(function() {
  $.get("./scrape", data => {
    for (newsIndex in data) {
      $("body").append(
        `<div><a href="${data[newsIndex][1]}"><h1>${
          data[newsIndex][0]
        }</h1></a></div>`
      );
    }
  });
});
