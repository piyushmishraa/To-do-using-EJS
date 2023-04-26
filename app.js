const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "sunday";

      break;
    case 1:
      day = "Monday";

      break;
    case 2:
      day = "Tuesday";

      break;
    case 3:
      day = "wednesday";

      break;
    case 4:
      day = "thursday";

      break;
    case 5:
      day = "friday";

      break;
    case 6:
      day = "saturday";

      break;

    default:
        console.log("oops there is an error");
      break;
  }

  res.render("list", { kindofday: day });
});

app.listen(3000, function () {
  console.log("server is up and running");
});
