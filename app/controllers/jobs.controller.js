const { create, getAll, getOne } = require("../model/jobs.model");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          message:
            err.message || "Some error occurred while creating the jobs.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAll: (req, res) => {
    getAll((err, results) => {
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
  getOne: (req, res) => {
    const job_id = req.params.job_id;
    getOne(job_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results[0]) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      console.log(results);
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
