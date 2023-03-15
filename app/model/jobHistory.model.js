const db = require("../../config/db");

module.exports = {
  createJobHistoryByEmpId: (data, callBack) => {
    db.query(
      `INSERT INTO JOB_HISTORY (employee_id, start_date, end_date, job_id, department_id ) VALUES (?,?,?,?,?)`,
      [
        data.employee_id,
        data.start_date,
        data.end_date,
        data.job_id,
        data.department_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllJobHistory: (callBack) => {
    db.query(`SELECT * FROM JOB_HISTORY`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getJobHistoryByEmpId: (employee_id, callBack) => {
    db.query(
      `SELECT * FROM JOB_HISTORY WHERE employee_id = ?`,
      [employee_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateJobHistoryByEmpId: (data, callBack) => {
    db.query(
      `UPDATE JOB_HISTORY SET start_date=?, end_date=?, job_id=?, department_id=? WHERE employee_id = ? `,
      [
        data.start_date,
        data.end_date,
        data.job_id,
        data.department_id,
        data.employee_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteJobHistoryByEmpID: (employee_id, callBack) => {
    db.query(
      `DELETE FROM JOB_HISTORY WHERE employee_id = ?`,
      [employee_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
