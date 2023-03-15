const {
  getAllJobHistory,
  getJobHistoryByEmpId,
  deleteJobHistoryByEmpID,
  createJobHistoryByEmpId,
  updateJobHistoryByEmpId,
} = require("../controllers/jobHistory.controller");

const router = require("express").Router();

router.get("/", getAllJobHistory);

router.get("/:employee_id", getJobHistoryByEmpId);

router.delete("/:employee_id", deleteJobHistoryByEmpID);

router.post("/", createJobHistoryByEmpId);

router.patch("/", updateJobHistoryByEmpId);

module.exports = router;
