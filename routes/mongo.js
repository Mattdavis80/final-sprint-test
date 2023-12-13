const express = require("express");
const router = express.Router();
const dal = require("../services/total_dal");

// Need to create the search DAL after creating the database in PG and again in Mongo

// Setting up the /search route
router.get("/", async (req, res) => {
  try {
    let allProcedures = await dal.getProceduresMongo("arm");
    if (DEBUG) console.table(allProcedures);
    res.render("search", { allProcedures });
  } catch {
    res.render("503");
  }
});

module.exports = router;
