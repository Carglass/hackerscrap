$(document).ready(function() {
  $.get("./scrape", data => {
    for (newsIndex in data) {
      $("body").append(
        `<div data-id=${newsIndex}><a href="${data[newsIndex][1]}"><h1>${
          data[newsIndex][0]
        }</h1></a></div>`
      );
      let saveButton = $(`<button data-id=${newsIndex}>Save</button>`)
        .data("href", `"${data[newsIndex][1]}"`)
        .data("title", `"${data[newsIndex][0]}"`);
      $("body").append(saveButton);
    }
  });

  $(document).on("click", "button", function(event) {
    let title = $(event.target).data("title");
    console.log(title);
    let link = $(event.target).data("href");
    $.post("/api/articles", { title: title, link: link }, function(data) {
      console.log(data);
    });
  });
});
