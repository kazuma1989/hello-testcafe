const express = require("express");
const basicAuth = require("express-basic-auth");

const users = {
  admin: "admin",
  john: "john"
};

const app = express();
app.use(express.urlencoded());

// Basic Auth
app.use(
  basicAuth({
    users,
    challenge: true,
    unauthorizedResponse() {
      return "401 Unauthorized";
    }
  })
);

// Application Login
app.post("/login", (req, resp) => {
  const { name, pass } = req.body;
  if (!name || !pass) {
    resp.sendStatus(401);
    return;
  }

  const success = users[name] === pass;
  if (!success) {
    resp.sendStatus(401);
    return;
  }

  resp.redirect("/success.html");
});

app.use(express.static(__dirname));

const port = process.env.PORT || 1234;
app.listen(port);
