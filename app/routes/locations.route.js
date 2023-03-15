const router = require("express").Router();
const {
  createLocation,
  getAllLocation,
} = require("../controllers/locations.controller");

router.get("/", getAllLocation);

router.post("/", createLocation);

module.exports = router;
