const express = require("express");
const app = express();
const router = express.Router();
router.get("/admin/users", (req, res) => {
  res.send("<h1>hello</h1>");
  res.end();
});
router.get("/admin/users/create", (req, res) => {
  res.send("<h1>hello so 1</h1>");
  res.end();
});
router.get("/admin/categories", (req, res) => {
  res.send("<h1>hello so 2</h1>");
  res.end();
});
router.get("/admin/categories/create", (req, res) => {
  res.send("<h1>hello so 3</h1>");
  res.end();
});
app.use(router);
app.listen(4000);
