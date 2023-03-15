const db = require("../../config/db");

module.exports = {
  createEmployees: (data, callBack) => {
    db.query(
      `INSERT INTO EMPLOYEES (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission, manager_id, department_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.employee_id,
        data.first_name,
        data.last_name,
        data.email,
        data.phone_number,
        data.hire_date,
        data.job_id,
        data.salary,
        data.commission,
        data.manager_id,
        data.department_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllEmployees: (callBack) => {
    db.query(`SELECT * FROM EMPLOYEES`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getEmployeeById: (employee_id, callBack) => {
    db.query(
      `SELECT * FROM EMPLOYEES WHERE employee_id = ?`,
      [employee_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateEmployee: (data, callBack) => {
    db.query(
      `UPDATE EMPLOYEES SET first_name=?, last_name=?, email=?, phone_number=?, hire_date=?, job_id=?, salary=?, commission=?, manager_id=?, department_id=? WHERE employee_id = ? `,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.phone_number,
        data.hire_date,
        data.job_id,
        data.salary,
        data.commission,
        data.manager_id,
        data.department_id,
        data.employee_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteEmployee: (employee_id, callBack) => {
    db.query(
      `DELETE FROM EMPLOYEES WHERE employee_id = ?`,
      [employee_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
