$(document).ready(function() {
  $.get("./scrape", data => {
    for (news of data) {
      $("body").append(
        `<div><a href="${news[1]}"><h1>${news[0]}</h1></a></div>`
      );
    }
  });
});
