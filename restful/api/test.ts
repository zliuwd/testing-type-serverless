var router = require("express").Router();
router.get("/", (req: any, res: any) =>
  res.send("this is the restful api return msg")
);
module.exports = router;
