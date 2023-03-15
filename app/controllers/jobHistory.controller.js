const {
  getAllJobHistory,
  getJobHistoryByEmpId,
  deleteJobHistoryByEmpID,
  updateJobHistoryByEmpId,
  createJobHistoryByEmpId,
} = require("../model/jobHistory.model");

module.exports = {
  getAllJobHistory: (req, res) => {
    getAllJobHistory((err, results) => {
      if (err) return;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getJobHistoryByEmpId: (req, res) => {
    const employee_id = req.params.employee_id;
    getJobHistoryByEmpId(employee_id, (err, results) => {
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
  deleteJobHistoryByEmpID: (req, res) => {
    const employee_id = req.params.employee_id;
    deleteJobHistoryByEmpID(employee_id, (err, results) => {
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
        message: "Delete job history successfully",
        data: results,
      });
    });
  },
  updateJobHistoryByEmpId: (req, res) => {
    const data = req.body;
    updateJobHistoryByEmpId(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update job history successfully",
        data: results,
      });
    });
  },
  createJobHistoryByEmpId: (req, res) => {
    const body = req.body;
    createJobHistoryByEmpId(body, (err, results) => {
      if (err)
        res.json({
          message:
            err.message || "Some error occurred while creating job history.",
        });
      res.json({
        success: 1,
        data: results,
      });
    });
  },
};
