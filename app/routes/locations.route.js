const router = require("express").Router();
const {
  createLocation,
  getAllLocation,
  getLocationByLocationId,
  updatLocation,
} = require("../controllers/locations.controller");

router.get("/", getAllLocation);

router.post("/", createLocation);

router.get("/:location_id", getLocationByLocationId);

router.patch("/", updatLocation);

module.exports = router;
