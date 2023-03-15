const router = require("express").Router();
const {
  createLocation,
  getAllLocation,
  getLocationByLocationId,
  updatLocation,
  deleteLocation,
} = require("../controllers/locations.controller");

router.get("/", getAllLocation);

router.post("/", createLocation);

router.get("/:location_id", getLocationByLocationId);

router.patch("/", updatLocation);

router.delete("/", deleteLocation);

module.exports = router;
