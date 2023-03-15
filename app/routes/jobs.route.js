const {
  create,
  getAll,
  getOne,
  updateJobs,
  deleteJobs,
} = require("../controllers/jobs.controller");

const router = require("express").Router();

router.get("/", getAll);

router.post("/", create);

router.get("/:job_id", getOne);

router.patch("/", updateJobs);

router.delete("/", deleteJobs);

module.exports = router;
