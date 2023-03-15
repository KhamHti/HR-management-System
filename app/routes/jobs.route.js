const { create, getAll, getOne } = require("../controllers/jobs.controller");

const router = require("express").Router();

router.get("/", getAll);

router.post("/", create);

router.get("/:job_id", getOne);

module.exports = router;
