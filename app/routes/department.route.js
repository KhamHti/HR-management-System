const router = require("express").Router();

const {
  createDepartment,
  getAllDepartments,
  getDeptByDeptId,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department.controller");

router.get("/", getAllDepartments);

router.get("/:department_id", getDeptByDeptId);

router.post("/", createDepartment);

router.patch("/", updateDepartment);

// delete  with department_id (req.params.department_id)
router.delete("/:department_id", deleteDepartment);

module.exports = router;
