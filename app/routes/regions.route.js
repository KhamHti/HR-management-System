const {
  createRegionId,
  getAll,
  getOne,
  update,
  deleteRegion,
} = require("../controllers/regions.controller");
const router = require("express").Router();

router.post("/", createRegionId);

router.get("/", getAll);

router.get("/:region_id", getOne);

// data မဝင်သေးပါ
router.patch("/", update);

router.delete("/", deleteRegion);

module.exports = router;
