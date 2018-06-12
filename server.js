var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// URI for Mongo
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Routes

// SCRAPING

// a GET route for scraping hacker news
app.get("/scrape", function(req,res){});

// ARTICLES

// a GET Route to get all articles, in order to display them
app.get("/api/articles", function(req, res){});

// a POST Route to Post new articles, mainly after scraping
app.post("/api/articles", function(req,res){});

// a DELETE Route to delete Articles, because they are unused ? 
// TODO see if necessary
app.delete("/api/articles", function(req,res){});

// COMMENTS

// a GET route to get comments from an article
// TODO see if it is useful
app.get("/api/:article/comments", function(req,res){});

// a POST route to post a comment on an article
app.post("/api/:article/comments", function(req,res){});

// a PUT route to edit a comment about an article
// TODO interesting if Oauth
app.put("/api/:article/comments", function(req,res){});

// a DELETE route to delete a comment about an article
// TODO interesting if Oauth
app.delete("/api/:article/comments", function(req,res){});

// VOTES

// a POST route to post an upvote
app.post("/api/:article/upvote", function(req,res){});

// a POST route to post a downvote
app.post("/api/:article/downvote", function(req,res){});


// A GET route for scraping the echoJS website
// app.get("/scrape", function(req, res) {
//   // First, we grab the body of the html with request
//   axios.get("http://www.echojs.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function(i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       // Create a new Article using the `result` object built from scraping
//       db.Article.create(result)
//         .then(function(dbArticle) {
//           // View the added result in the console
//           console.log(dbArticle);
//         })
//         .catch(function(err) {
//           // If an error occurred, send it to the client
//           return res.json(err);
//         });
//     });

//     // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scrape Complete");
//   });
// });

// // Route for getting all Articles from the db
// app.get("/articles", function(req, res) {
//   // TODO: Finish the route so it grabs all of the articles
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//   // TODO
//   // ====
//   // Finish the route so it finds one article using the req.params.id,
//   // and run the populate method with "note",
//   // then responds with the article with the note included
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   // TODO
//   // ====
//   // save the new note that gets posted to the Notes collection
//   // then find an article from the req.params.id
//   // and update it's "note" property with the _id of the new note
// });

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
