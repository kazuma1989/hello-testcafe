const express = require("express");
const expressBasicAuth = require("express-basic-auth");

const users = {
  admin: "admin",
  john: "john"
};

const basicAuth = expressBasicAuth({
  users,
  challenge: true,
  unauthorizedResponse() {
    return "401 Unauthorized";
  }
});

// ----------
// Main app
const port = process.env.PORT || 1234;

const app = express();
app.use(express.urlencoded());
app.use(basicAuth);

// Static contents
app.use(express.static(__dirname));

app.listen(port);

// ----------
// Auth app
const authPort = 1235;

const authApp = express();
authApp.use(express.urlencoded());
authApp.use(basicAuth);

// Login
authApp.post("/login", (req, resp) => {
  const { name, pass } = req.body;
  if (!name || !pass || users[name] !== pass) {
    resp.sendStatus(401);
    return;
  }

  resp.redirect(`http://localhost:${port}/success.html`);
});

authApp.listen(authPort);
