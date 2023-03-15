const {
  createDepartment,
  getAllDepartments,
  getDeptByDeptId,
  updateDepartment,
  deleteDepartment,
} = require("../model/department.model");

module.exports = {
  createDepartment: (req, res) => {
    const body = req.body;
    createDepartment(body, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          message:
            err.message || "Some error occurred while creating DEPARTMENTS.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAllDepartments: (req, res) => {
    getAllDepartments((err, results) => {
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
  getDeptByDeptId: (req, res) => {
    const department_id = req.params.department_id;
    getDeptByDeptId(department_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results[0]) {
        res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateDepartment: (req, res) => {
    const data = req.body;
    updateDepartment(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update department successfully",
      });
    });
  },

  // delete  with department_id (req.params.department_id)
  deleteDepartment: (req, res) => {
    const department_id = req.params.department_id;
    deleteDepartment(department_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      //   if (!results) {
      //     return res.json({
      //       success: 0,
      //       message: "Department id not found",
      //     });
      //   }
      return res.json({
        success: 1,
        message: "Delete department successfully",
        // data: results,
      });
    });
  },
};
