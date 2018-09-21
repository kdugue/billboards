const router = require("express").Router();

router.use((req, res, next) => {
  const err = new Error("This page is not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
