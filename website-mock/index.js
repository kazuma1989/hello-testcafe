const express = require("express");
const basicAuth = require("express-basic-auth");

const app = express();

const users = { admin: "admin" };
app.use(
  basicAuth({
    users,
    challenge: true,
    unauthorizedResponse() {
      return "401 Unauthorized";
    }
  })
);

app.use(express.static(__dirname));

const port = process.env.PORT || 1234;
app.listen(port);
