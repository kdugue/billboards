const db = require("./database/database");
const app = require("./server");
const port = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(port);
});
