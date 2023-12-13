const express = require("express");
const router = express.Router();
const dal = require("../services/total_dal");

router.get("/", (req, res) => {
  res.render("searchBar");
});

router.post("/", async (req, res) => {
  const returnedProcedures = await dal.procedureSearch(
    req.body.keyword,
    req.body.database
  );
  console.log(req.body.database);
  res.render("results", { returnedProcedures });
});

module.exports = router;
