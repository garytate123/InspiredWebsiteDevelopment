const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.static("public/Page Examples/1 Page/"));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.get("*", function (req, res, next) {
  res.send(
    "Whoops, error 404. This page doesn't exist. You must be lost, turn around!"
  );
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});