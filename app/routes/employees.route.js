const {
  getAllEmployees,
  createEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employees.controller");

const router = require("express").Router();

router.get("/", getAllEmployees);

router.get("/:employee_id", getEmployeeById);

router.post("/", createEmployees);

router.patch("/", updateEmployee);

router.delete("/:employee_id", deleteEmployee);

module.exports = router;
