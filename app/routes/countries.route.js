const {
  createCountryId,
  getAll,
  getOne,
  updateCountry,
  deleteCountry,
} = require("../controllers/countries.controller");

const router = require("express").Router();

router.post("/", createCountryId);

router.get("/", getAll);

router.get("/:country_id", getOne);

router.patch("/", updateCountry);

router.delete("/", deleteCountry);

module.exports = router;
