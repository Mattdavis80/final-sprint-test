const express = require("express");
const router = express.Router();
// const dal = require("../services/search_pg.dal");
const dal = require("../services/total_dal");

// Need to create the search DAL after creating the database in PG and again in Mongo

// Setting up the /search route
router.get("/", async (req, res) => {
  try {
    let query = "ankle";
    let allProcedures = await dal.getProceduresPg(query);
    if (DEBUG) console.table(allProcedures);
    res.render("search", { allProcedures });
  } catch {
    res.render("503");
  }
});

router.post("/", async (req, res) => {
  try {
    let query = "ankle";
    let user = "1";
    dal.saveSearchQuery(query, user);
    res.redirect("/search");
  } catch (error) {
    res.render("503");
  }
});

module.exports = router;

// router.get("/:id", async (req, res) => {
//   try {
//     let procedure = await dal.getProcedure(req.params.id);
//     if (DEBUG) console.table(procedure);
//     res.render("procedure", { procedure });
//   } catch {
//     res.render("503");
//   }
// });
