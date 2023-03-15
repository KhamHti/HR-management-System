const db = require("../../config/db");

module.exports = {
  createDepartment: (data, callBack) => {
    db.query(
      `INSERT INTO DEPARTMENTS (department_id, department_name, manager_id, location_id) VALUES (?,?,?,?)`,
      [
        data.department_id,
        data.department_name,
        data.manager_id,
        data.location_id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getAllDepartments: (callBack) => {
    db.query(`SELECT * FROM DEPARTMENTS`, [], (err, results) => {
      if (err) {
        console.log(err);
        return callBack(err);
      }
      return callBack(null, results);
    });
  },
  getDeptByDeptId: (department_id, callBack) => {
    db.query(
      `SELECT * FROM DEPARTMENTS WHERE department_id = ?`,
      [department_id],
      (err, results) => {
        if (err) {
          console.log(err);
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  updateDepartment: (data, callBack) => {
    db.query(
      `UPDATE DEPARTMENTS SET department_name=?, manager_id=?, location_id=? WHERE department_id = ?`,
      [
        data.department_name,
        data.manager_id,
        data.location_id,
        data.department_id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },

  // delete  with department_id (req.params.department_id)
  deleteDepartment: (department_id, callBack) => {
    db.query(
      `DELETE FROM DEPARTMENTS WHERE department_id = ?`,
      [department_id],
      (err, results) => {
        if (err) {
          console.log(err);
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
};
