const {
  createEmployees,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../model/employees.model");

module.exports = {
  createEmployees: (req, res) => {
    const body = req.body;
    createEmployees(body, (err, results) => {
      if (err)
        res.json({
          message:
            err.message || "Some error occurred while creating employees.",
        });
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllEmployees: (req, res) => {
    getAllEmployees((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getEmployeeById: (req, res) => {
    const employee_id = req.params.employee_id;
    getEmployeeById(employee_id, (err, results) => {
      if (err) return;
      if (!results[0])
        res.json({
          success: 0,
          message: "record not found",
        });
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateEmployee: (req, res) => {
    const data = req.body;
    updateEmployee(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update employee successfully",
        data: results,
      });
    });
  },
  deleteEmployee: (req, res) => {
    const employee_id = req.params.employee_id;
    deleteEmployee(employee_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Employee id not found",
        });
      }
      return res.json({
        success: 1,
        message: "Delete employee successfully",
        data: results,
      });
    });
  },
};
