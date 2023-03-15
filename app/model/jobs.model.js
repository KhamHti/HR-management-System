const db = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO JOBS (job_id, job_title, min_salary, max_salary) VALUES (?,?,?,?)`,
      [data.job_id, data.job_title, data.min_salary, data.max_salary],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getAll: (callBack) => {
    db.query(`SELECT * FROM JOBS`, [], (err, results) => {
      if (err) {
        console.log(err);
        return callBack(err);
      }
      return callBack(null, results);
    });
  },
  getOne: (job_id, callBack) => {
    db.query(
      `SELECT job_title, min_salary, max_salary FROM JOBS WHERE job_id=?`,
      [job_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
};
